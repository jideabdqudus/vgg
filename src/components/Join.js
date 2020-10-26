import React from "react";
import "./components.css";

const Join = () => {
  return (
    <div>
      <h3
        style={{
          textAlign: "center",
          fontSize: "30px",
          fontWeight: "bold",
          color: "white",
          paddingTop: "60px",
          paddingBottom: "20px",
        }}
      >
        Join Us
        <hr
          style={{
            color: "white",
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
          maxWidth: "70%",
          margin: "0 auto",
          textAlign: "center",
          color:"white"
        }}
      >
        Our team is made up of smart and driven people who want to use
        technology to make a big difference in the world. We’re always in search
        of partners and volunteers with that same vision. If that sounds like
        you, find your fit in our team.
      </p>
    </div>
  );
};

export default Join;
