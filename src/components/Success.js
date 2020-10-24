import React from "react";
import Timeline from "../assets/TIMELINE 2-01.png"

const Success = () => {
  return (
    <div>
      <h3
        style={{
          textAlign: "center",
          fontSize: "30px",
          fontWeight: "bold",
          color: "#2992d0",
          padding: "20px",
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
      <p style={{ fontSize: "30px", lineHeight: "1.4em" }}>
        Success means different things to everyone. For us, success is using
        technology to transform the world around us. Here are some of our
        transformative partnerships and investments
      </p>
    </div>
  );
};

export default Success;
