import React from "react";
import "./App.css";
import BackgroundCarousal from "./Components/Carousal/BackgroundCarousal";
import TopNavbar from "./Components/Navbar/TopNavbar";

function App() {
  return (
    <React.Fragment>
      <TopNavbar></TopNavbar>
      <BackgroundCarousal></BackgroundCarousal>
    </React.Fragment>
  );
}

export default App;
