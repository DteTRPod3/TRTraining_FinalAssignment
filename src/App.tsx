import React from "react";
import "./App.css";
import RouterComponent from "./Components/RounterComponent/RouterComponent";
import Footer from "./Components/Footer/Footer";
import TopNavbar from "./Components/Navbar/TopNavbar";

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
