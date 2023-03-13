import "@/styles/globals.css";
import "antd/dist/reset.css";
import "@/styles/Home.css";
import "@/styles/CernTollBar.css";
import "@/styles/searchField.css";

import type { AppProps } from "next/app";
import { Layout } from "antd";
import CernToolBar from "@/components/cernToolbar";
import { SearchField } from "@/components/searchField";

export default function App({ Component, pageProps }: AppProps) {
  if (typeof window !== "undefined") {
    window.onload = () => {
      document.getElementById("holderStyle").remove();
    };
  }
  return (
    <>
      <CernToolBar />
      <SearchField />
      <Component {...pageProps} />
    </>
  );
}
