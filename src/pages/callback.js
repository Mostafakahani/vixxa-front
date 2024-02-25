import { useRouter } from "next/router";
import axios from "axios";
import { useEffect, useState } from "react";
import { Server } from "../../config";
import { CircularProgress } from "@mui/material";
import { toast } from "react-toastify";

const Callback = () => {
  const router = useRouter();
  const { Authority, Status } = router.query;
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const verifyPayment = async () => {
    try {
      if (!Authority || !Status) {
        throw new Error("پارامترهای درخواست موجود نیستند.");
      }

      if (Status === "NOK") {
        setLoading(false);
        setErrorMessage("تایید پرداخت ناموفق یا توسط کاربر لغو شده است.");
        return;
      }

      if (Status === "OK") {
        setLoading(false);
        setErrorMessage("پرداخت با موفقیت تایید شد.");
      }

      const response = await axios.post(
        `${Server.URL}/pey/verify/${Authority}`,
        { authority: Authority },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );

      if (response.status === 200) {
        setLoading(false);
        toast.success("پرداخت با موفقیت تایید شد.");
        setErrorMessage("پرداخت با موفقیت تایید شد.");
        router.push("/dashboard/user");
      } else {
        throw new Error(response.data.data.message);
      }
    } catch (error) {
      setLoading(false);
      setErrorMessage(error.message);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      verifyPayment();
    }, 1000);

    return () => clearTimeout(timer);
  }, [Authority, Status]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {loading ? (
        <CircularProgress />
      ) : (
        <h3 style={{ color: "#fff" }}>
          {errorMessage || "در حال پردازش پرداخت..."}
        </h3>
      )}
    </div>
  );
};

export default Callback;
