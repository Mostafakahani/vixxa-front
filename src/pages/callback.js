// pages/callback.js

import { useRouter } from "next/router";
import axios from "axios";
import { useEffect } from "react";
import { Server } from "../../config";

const Callback = () => {
  const router = useRouter();

  const verifyPayment = async () => {
    try {
      const { Authority, Status } = router.query;  
      if (!Authority || !Status) {
        console.error("Invalid parameters.");
        return;
      }

      if (Status !== "OK") {
        console.error("Payment verification failed or canceled by user.");
        return;
      }
 
      // Replace 'YOUR_MERCHANT_ID' with your actual ZarinPal merchant ID
      const merchantId = "2611112f-e4eb-455b-bd53-fdcaa5f39322";

      const response = await axios.post( 
        `${Server.URL}/pey/verify/${Authority}`,
        {
          authority: Authority,
        }
      );

      if (response.data.data.code === 100) {
        console.log("Payment verified successfully.");
        console.log("Reference ID:", response.data.data.ref_id);
        // Do any further processing here if needed
      } else {
        console.error(
          "Payment verification failed:",
          response.data.data.message
        );
      }
    } catch (error) {
      console.error("Error verifying payment:", error);
    }
  };

  useEffect(() => {
    verifyPayment();
  }, []); // Run once on component mount

  return <div>Processing payment...</div>;
};

export default Callback;
