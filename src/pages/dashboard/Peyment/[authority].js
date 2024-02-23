import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import jwt from "jsonwebtoken";
import { Server } from "../../../../config";

// Function to parse query string
const parseQueryString = (url) => {
  const queryString = url.split("?")[1]; // Get the part after the "?"
  const queryParams = new URLSearchParams(queryString); // Parse the query string
  return queryParams;
};

const VerifyPaymentPage = () => {
  const router = useRouter();
  const [data, setData] = useState([]);

  // Function to fetch data based on Authority parameter
  const getData = async (authority) => {
    try {
      const response = await axios.post(
        `${Server.URL}/pey/verify/${authority}`, // Adjust the URL as needed
        { withCredentials: true }
      );
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    const { query } = router;
    if (query && query.Authority) {
      const authority = query.Authority;
      getData(authority);
    }
  }, [router.query]);

  return (
    <div>
      <p style={{ color: "red" }}>Verifying payment...</p>
    </div>
  );
};

export default VerifyPaymentPage;

export async function getServerSideProps(context) {
  const token = context.req.cookies.token;
  try {
    const decodedToken = jwt.verify(token, Server.SECRET);
    const isAdmin = decodedToken.isAdmin || false;
    if (decodedToken) {
      return { props: {} };
    }
  } catch (error) {
    return { notFound: true };
  }
}
