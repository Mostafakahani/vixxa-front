import "@/styles/globals.css";
import RTL from "./RTL";
import Head from "next/head";
import {
  CircularProgress,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import Layout from "../../Componenets/Layout/Layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { AuthProvider } from "./context";

export default function App({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const hasLoadedBefore = localStorage.getItem("hasLoadedBefore");

    if (hasLoadedBefore) {
      setIsLoading(false);
    } else {
      setTimeout(() => {
        setIsLoading(false);
        localStorage.setItem("hasLoadedBefore", true);
      }, 1000);
    }
  }, []);
  const theme = createTheme({
    typography: {
      fontFamily: ["estedad", "Gilroy"].join(","),
    },
  });
  if (isLoading) {
    return <CircularProgress />;
  }
  return (
    <ThemeProvider theme={theme}>
      <RTL>
        <Head>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <meta
            name="description"
            content="وب سایت ویکسا با ارائه کامپوننت ها و تمپلیت های تلویند سی اس اس در اختیار عموم قرار داده است. با هربار بروز رسانی سازنده بصورت رایگان در دسترس قرار میگیرد."
          />
          <meta
            name="keywords"
            content="ویکسا, vixxa, vixa, وب سایت ویکسا, template, componenets, کامپوننت تلویند سی اس اس, tailwindcss, taildwind, tailwind css, css, html, javascript, mui, material-ui, nextjs, next, react, liara, arvancloud, website, templates"
          />
          <meta name="author" content="Mostafa Kahani" />
          <meta name="robots" content="index, follow" />
          <meta name="googlebot" content="index, follow" />
          <meta name="referrer" content="origin-when-cross-origin" />
          <meta name="theme-color" content="#ffffff" />
          <meta name="enamad" content="392013" />
          <meta charset="utf-8" />
          <title>ویکسا | Vixxa</title>
        </Head>
        <AuthProvider>
          <Layout>
            <ToastContainer
              theme="dark"
              closeOnClick
              rtl
              style={{ zIndex: 1000000000000 }}
            />
            <CssBaseline />
            <Component {...pageProps} />
          </Layout>
        </AuthProvider>
      </RTL>
    </ThemeProvider>
  );
}
