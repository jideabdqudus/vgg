import React from "react";
import Headline from "../components/Headline";
import TopBar from "../layout/TopBar";
import Particles from "react-particles-js";
import "./pages.css";
import About from "../components/About";
import Focus from "../components/Focus";
import Success from "../components/Success";
import Join from "../components/Join";
import Subscribe from "../components/Subscribe";
import Footer from "../layout/Footer";
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
      <div className="bgSuccess">
        <Success />
      </div>
      <div className="bgJoin">
        <Join />
        <div className="bgOverlay"></div>
      </div>
      <div>
        <Subscribe/>
      </div>
      <div className="bgFooter">
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
