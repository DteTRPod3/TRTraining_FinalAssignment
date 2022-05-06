import React from "react";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Footer from "./components/Footer/Footer";
import TopNavbar from "./components/Navbar/TopNavbar";
import RouterComponent from "./components/RouterComponent/RouterComponent";

function App() {
  return (
    <>
      <TopNavbar />
      <ToastContainer
        className="custom-toast"
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme="colored"
        pauseOnHover
      />
      <RouterComponent />
      <Footer />
    </>
  );
}

export default App;
