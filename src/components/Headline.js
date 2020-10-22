import React from "react";
import { Row, Col } from "antd";

const Headline = () => {
  return (
    <Row className="container">
      <Col
        span={12}
        style={{
          display: "flex",
          height: "50vh",
          position: "relative",
          top: "200px",
        }}
      >
        <h1
          style={{
            color: "#51b74b",
            fontWeight: "800",
            fontSize: "45px",
            lineHeight: "1.6em",
          }}
        >
          Transforming Africa
          <br />
          through technology
        </h1>
      </Col>
    </Row>
  );
};

export default Headline;
