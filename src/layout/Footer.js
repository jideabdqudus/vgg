import React from "react";
import { Row, Col } from "antd";
import Logo from "../assets/lo12go.png";

const Footer = () => {
  return (
    <div className="container">
      <Row style={{paddingTop:"60px"}}>
        <Col span={12}>
          <Row>
            <Col span={24}>
              <img src={Logo} alt="Logo" width="200" />
            </Col>
            <Col
              span={24}
              style={{ paddingTop: "20px", paddingBottom: "20px" }}
            >
              <p style={{ color: "white", fontWeight: "lighter" }}>
                Venture Garden Group is a holding company for a group of
                financial technology entities dedicated to the innovative and
                data-driven financial technology solutions.
              </p>
              <i style={{ color: "white", fontWeight: "lighter" }}>
                Transforming Africa through technology
              </i>
            </Col>
          </Row>
        </Col>
        <Col span={4}>asaasa</Col>
        <Col span={8}>asasa</Col>
      </Row>
    </div>
  );
};

export default Footer;
