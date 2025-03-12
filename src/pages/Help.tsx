import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Main from "@/components/Help/Main"
import { useEffect } from "react";

function Help() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      <Header/>
        <Main/>
      <Footer/>
    </>
  )
}

export default Help
