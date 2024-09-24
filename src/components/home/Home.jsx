import React from "react";
import "./home.css";
import Me from "../../assets/profile.svg";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes";

function Home() {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="" className="home_img" />
        <h1 className="home_name">Thundarin Thiamphong</h1>
        <span className="home_education">I'm a Web developer</span>

        <HeaderSocials/>


        <a href="#contact" className="btn">Contact Me</a>

        <ScrollDown/>
      </div>
      <Shapes/>
    </section>
  )
}

export default Home;
