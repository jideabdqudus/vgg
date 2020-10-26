import React from "react";
import "./components.css";

const About = () => {
  return (
    <div className="container" style={{ paddingBottom: "80px" }}>
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
        About Us
        <hr
          style={{
            color: "#2992d0",
            width: "20%",
            textAlign: "center",
            border: "1px solid",
          }}
        />
      </h3>
      <div className="reCenter">
        <p
          style={{
            fontSize: "25px",
            lineHeight: "1.4em",
            fontWeight: "lighter",
          }}
        >
          As a company, we feel a deep sense of purpose and pride in knowing
          that through our work we have the power to change Africa and the
          world.
        </p>
        <p className="textPar">
          Venture Garden Group (VGG) is a leading provider of innovative,
          data-driven, end-to-end technology platforms addressing reconciliation
          and payment processing inefficiencies across multiple sectors of the
          African economy. Our <b style={{ fontWeight: "bolder" }}>mission</b>{" "}
          is to transform Africa by using innovative technologies to solve real
          socio-economic challenges in impact sectors critical to sustainable
          economic development.
        </p>
        <p className="textPar">
          We have extensive experience in serving both in public and private
          sectors and primarily operate through our multi-sector strategic
          business units. We are in energy, healthcare, education, aviation,
          financial services and social services. We help our customers reach
          new levels of efficiency, reliability and sustainability by providing
          industry-leading technology solutions and expertise.
        </p>
      </div>
    </div>
  );
};

export default About;
