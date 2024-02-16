import { useRouter } from "next/router";
import DetailsItemPage from "../../../Templates/Shop/Details/DetailsPage";
import { Server } from "../../../config";
import axios from "axios";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

function TemplatesPageDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    if (id) {
      getData();
    }
  }, [id]);

  const getData = async () => {
    try {
      const response = await axios.get(`${Server.URL}/products/${id}`);
      if (response.status === 200) {
        setData(response.data.data);
      } else {
        console.error("Error fetching data!");
        toast.error("Error fetching data!");
      }
    } catch (error) {
      if (error.code === "ERR_NETWORK") {
        window.alert("ERR_NETWORK");
      }
      console.error("An error occurred: ", error);
      toast.error("An error occurred");
    } finally {
      setLoading(false); 
    }
  };

  if (loading) {
    return <div>در حاله بارگذاری...</div>;
  }

  if (!data) {
    return <div>اطلاعاتی یافت نشد.</div>;
  }

  return (
    <>
      <DetailsItemPage data={data} />
    </>
  );
}

export default TemplatesPageDetail;
