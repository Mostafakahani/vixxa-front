import "@/styles/globals.css";
import createEmotionCache from "./createEmotionCache";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider } from "@mui/material/styles";
import RTL from "./RTL";
import Head from "next/head";
import { CssBaseline } from "@mui/material";

const clientSideEmotionCache = createEmotionCache();

export default function App(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <RTL>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
          <meta name="robots" content="index" />
          <meta name="googlebot" content="index" />
          <title>Vixxa | ویکسا</title>
        </Head>
        <div>
          <CssBaseline />
          <Component {...pageProps} />
        </div>
      </RTL>
    </CacheProvider>
  );
}
