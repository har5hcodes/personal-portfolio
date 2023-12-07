import React from "react";
import "./MainContent.modular.css";
import mainImg from "../../assets/mainImg.png";
import About from "../About/About";
import Work from "../Work/Work";
import Connect from "../Connect/Connect";

const MainContent = () => {
  return (
    <div className="mainContainer">
      <img src={mainImg} alt="" />
      {/* <About /> */}
      {/* <Work /> */}
      <Connect />
    </div>
  );
};

export default MainContent;
