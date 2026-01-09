import "@/styles/globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import { Provider } from "react-redux";
import dataStore from "../redux/store"
import { useEffect } from "react";
import ReactModal from "react-modal";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps, session }) {
  useEffect(()=>{
    ReactModal.setAppElement("body")
  }, [])

  return (
    <Provider store={dataStore}>
      {/* <SessionProvider session={session}> */}
        <Header />
        <Component {...pageProps} />
        <Footer />
      {/* </SessionProvider> */}
      {/* <Menu_Modal /> */}
    </Provider>
  );
}
