import React from "react";
import "./App.css";
import BackgroundCarousal from "./Components/Carousal/BackgroundCarousal";
import Footer from "./Components/Footer/Footer";
import TopNavbar from "./Components/Navbar/TopNavbar";
import Searchbar from "./Components/Searchbar/Searchbar";

function App() {
  return (
    <React.Fragment>
      <TopNavbar></TopNavbar>
      <BackgroundCarousal></BackgroundCarousal>
      <Searchbar></Searchbar>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default App;
