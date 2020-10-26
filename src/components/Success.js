import React from "react";
import Timeline from "../assets/TIMELINE 2-01.png";
import "./components.css";

const Success = () => {
  return (
    <div className="container">
      <h3
        style={{
          textAlign: "center",
          fontSize: "30px",
          fontWeight: "bold",
          color: "#2992d0",
          paddingTop: "60px",
          paddingBottom: "20px",
        }}
      >
        Our Success Stories
        <hr
          style={{
            color: "#2992d0",
            width: "20%",
            textAlign: "center",
            border: "1px solid",
          }}
        />
      </h3>
      <p
        style={{
          fontSize: "25px",
          lineHeight: "1.4em",
          fontWeight: "lighter",
          maxWidth: "90%",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        Success means different things to everyone. For us, success is using
        technology to transform the world around us. Here are some of our
        transformative partnerships and investments
      </p>
      <img
        src={Timeline}
        alt="timeline"
        width="900"
        style={{
          margin: "0 auto",
          display: "block",
          marginTop: "70px",
          marginBottom: "70px",
        }}
      />
    </div>
  );
};

export default Success;
