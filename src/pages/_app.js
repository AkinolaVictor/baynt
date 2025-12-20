import "@/styles/globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import { Provider } from "react-redux";
import dataStore from "../redux/store"
import { useEffect } from "react";
import ReactModal from "react-modal";

export default function App({ Component, pageProps }) {
  useEffect(()=>{
    ReactModal.setAppElement("body")
  }, [])

  return (
    <Provider store={dataStore}>
      <Header />
      <Component {...pageProps} />
      <Footer />
      {/* <Menu_Modal /> */}
    </Provider>
  );
}
