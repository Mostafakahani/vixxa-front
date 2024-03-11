import { Button, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Table from "../../../Componenets/Dashboard/Tables/Table";
import axios from "axios";
import { Server } from "../../../config";
import { toast } from "react-toastify";

function UserPanel() {
  const [selected, setSelected] = useState([]);
  const [dataBody, setDataBody] = useState([]);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [loading, setLoading] = useState(dataBody.length > 0);
  const [buttonData, setButtonData] = useState(null);
  const [buttonLink, setButtonLink] = useState(null);
  const dataHead = ["نام محصول", "مبلغ", "دسته بندی", "دریافت محصول"];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${Server.URL}/user/profile`, {
          withCredentials: true,
        });

        const apiData = response.data.purchasedProducts;
        const updatedData = apiData.map((item, index) => {
          return {
            id: index,
            data: [
              // `#${item?.id}`,
              {
                type: "text",
                text: item?.name,
              },
              {
                type: "text",
                text: item?.price || null,
              },
              {
                type: "text",
                text: item?.category,
              },
              {
                type: "btn",
                text: item?.download,
              },
            ],
          };
        });
        setSelected([]);
        setDataBody(updatedData);
      } catch (error) {
        console.error("Error fetching data from the server:", error);
      }
    };

    fetchData();
  }, []);

  const handleButtonData = async (data) => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${Server.URL}/image/get-signed/`,
        { name: data },
        {
          withCredentials: true,
        }
      );
      if (response.status === 200) {
        setLoading(false);
        setButtonLink(response.data);
        toast.success("Ready to Download");
        window.open(
          response.data.link,
          "_blank" 
        );
      } else {
        setLoading(false);
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    } finally {
      setLoading(false);
    }
    setButtonData(data);
  };
  return (
    <>
      <Grid container item rowSpacing={3} sx={{ height: "max-content" }}>
        <Grid container item>
          <Grid container item>
            <Grid
              item
              xs={6}
              sm={4}
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <Button>مشاهده سفارشات</Button>
            </Grid>
            <Grid
              item
              sm={4}
              sx={{
                display: { xs: "none", sm: "flex" },
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography variant="h5" sx={{ color: "#fff" }}>
                لیست سفارشات
              </Typography>
            </Grid>
            <Grid
              item
              xs={6}
              sm={4}
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <Button color="error">خروج از حساب</Button>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                display: { xs: "flex", sm: "none" },
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography variant="h5" sx={{ color: "#fff" }}>
                لیست سفارشات
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid container item>
          <Container
            maxWidth="md"
            sx={{ bgcolor: "#031935", borderRadius: 3, p: 2 }}
          >
            <Grid container rowSpacing={1}>
              <Grid container item xs={12}>
                <Typography
                  sx={{ fontSize: 13, fontWeight: 200, color: "#fff" }}
                >
                  تعداد کل سفارشات خریداری شده:
                  {dataBody?.length}
                  مورد یافت شد.
                </Typography>
              </Grid>
              <Grid container item xs={12}>
                <Table
                  selected={selected}
                  setSelected={setSelected}
                  dataHead={dataHead}
                  dataBody={dataBody}
                  // show={(x) => console.log(dataBody.data[0])}
                  selectedItemId={selectedItemId}
                  loading={loading}
                  handleButtonData={handleButtonData}
                  buttonData={buttonData}
                  buttonLink={buttonLink}
                />
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </>
  );
}

export default UserPanel;
