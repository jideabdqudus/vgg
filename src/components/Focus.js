import React from "react";
import { Card, Col, Row } from "antd";
const Focus = () => {
  return (
    <div className="container">
      <h3
        style={{
          textAlign: "center",
          fontSize: "30px",
          fontWeight: "bold",
          color: "#fff",
          padding: "20px",
        }}
      >
        Focus Areas
        <hr
          style={{
            color: "#fff",
            width: "20%",
            textAlign: "center",
            border: "1px solid",
          }}
        />
      </h3>
      <div>
        <Row>
          <Col span={8}>
            <h4>Knowledge</h4>
            <Card></Card>
          </Col>
          <Col span={8}>
            <h4>Investment</h4>
          </Col>
          <Col span={8}>
            <h4>Technology</h4>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Focus;
