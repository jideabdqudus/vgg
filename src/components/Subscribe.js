import React from "react";
import { Input, Row, Col, Button } from "antd";

const Subscribe = () => {
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
        Subscribe to our Newsletter
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
          maxWidth: "70%",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        Find out about news, features and connections around our businesses
      </p>
      <Row style={{ marginTop: 50, marginBottom: 60 }}>
        <Col span={6}></Col>
        <Col span={8} style={{ paddingRight: "15px" }}>
          <Input placeholder="you@mail.com" size="large" />
        </Col>
        <Col span={8}>
          <Button size="large" type="primary">
            SUBSCRIBE
          </Button>
        </Col>
        <Col span={8}></Col>
      </Row>
    </div>
  );
};

export default Subscribe;
