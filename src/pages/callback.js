// pages/callback.js

import { useRouter } from "next/router";
import axios from "axios";
import { useEffect, useState } from "react";
import { Server } from "../../config";

const Callback = () => {
  const router = useRouter();
  const { Authority, Status } = router.query;
  const [errorMessage, setErrorMessage] = useState("");

  const verifyPayment = async () => {
    try {
      if (!Authority || !Status) {
        throw new Error("Query parameters missing.");
      }

      if (Status === "NOK") {
        throw new Error("Payment verification failed or canceled by user.");
      }

      const response = await axios.post(
        `${Server.URL}/pey/verify/${Authority}`,
        {
          authority: Authority,
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.data.code === 100) {
        console.log("Payment verified successfully.");
        console.log("Reference ID:", response.data.data.ref_id);
      } else {
        throw new Error(response.data.data.message);
      }
    } catch (error) {
      console.error("Error verifying payment:", error.message);
      setErrorMessage("خطایی در تایید پرداخت رخ داده است.");
    }
  };

  useEffect(() => {
    verifyPayment();
  }, [Authority, Status]);

  return (
    <div style={{ height: "100vh" }}>
      {errorMessage ? (
        <h3 style={{ color: "#fff" }}>{errorMessage}</h3>
      ) : (
        <div>Processing payment...</div>
      )}
    </div>
  );
};

export default Callback;
