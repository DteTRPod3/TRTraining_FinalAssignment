import React from "react";
import "./App.css";
import RouterComponent from "./components/RouterComponent/RouterComponent";
import Footer from "./components/Footer/Footer";
import TopNavbar from "./components/Navbar/TopNavbar";

function App() {
  return (
    <>
      <TopNavbar/>
      <RouterComponent />
      <Footer/>
    </>
  );
}

export default App;
