import React from "react";
import Headline from "../components/Headline";
import TopBar from "../layout/TopBar";
import Particles from "react-particles-js";
import "./pages.css";
import About from "../components/About";
import Focus from "../components/Focus";
const Home = () => {
  return (
    <div>
      <div className="bgImg">
        <TopBar />
        <Particles style={{ position: "absolute" }} />
        <Particles style={{ position: "absolute" }} />
        <Particles style={{ position: "absolute" }} />
        <Headline />
      </div>
      <div className="bgAbout">
        <About />
      </div>
      <div className="bgFocus">
        <Particles style={{ position: "absolute" }} />
        <Particles style={{ position: "absolute" }} />
        <Particles style={{ position: "absolute" }} />
        <Focus />
      </div>
    </div>
  );
};

export default Home;
