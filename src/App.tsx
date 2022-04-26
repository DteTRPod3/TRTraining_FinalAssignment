import React from "react";
import "./App.css";
import RouterComponent from "./components/RounterComponent/RouterComponent";
import Footer from "./components/Footer/Footer";
import TopNavbar from "./components/Navbar/TopNavbar";

function App() {
  return (
    <React.Fragment>
      <TopNavbar></TopNavbar>
      <RouterComponent />
      <Footer></Footer>
    </React.Fragment>
  );
}

export default App;
