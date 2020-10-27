import React from "react";
import { Row, Col, Divider } from "antd";
import Logo from "../assets/lo12go.png";
import {
  MailOutlined,
  FacebookFilled,
  TwitterCircleFilled,
  InstagramFilled,
  LinkedinFilled,
} from "@ant-design/icons";

const Footer = () => {
  return (
    <div className="container">
      <Row style={{ paddingTop: "60px" }}>
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
        <Col span={6}>
          <Row>
            <Col span={24}>
              <p style={{ color: "white", marginBottom: "30px" }}>
                Our Corporate Office:
              </p>
            </Col>
            <Col span={24}>
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  marginBottom: 0,
                  color: "white",
                }}
              >
                Vibranium Valley
              </p>
            </Col>
            <Col span={24}>
              <p
                style={{
                  fontWeight: "lighter",

                  color: "white",
                }}
              >
                42, Local Airport Road, Ikeja, Lagos
              </p>
            </Col>
          </Row>
        </Col>
        <Col span={6}>
        
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={18}>
          <Row>
            <MailOutlined
              style={{
                color: "white",
                fontSize: "20px",
                marginRight: "10px",
              }}
            />{" "}
            <p style={{ color: "white" }}> vgg@venturegardengroup.com</p>
          </Row>
        </Col>
        <Col span={6}>
          <Row>
            <FacebookFilled
              style={{ fontSize: "25px", paddingRight: "25px", color: "white" }}
            />
            <TwitterCircleFilled
              style={{ fontSize: "25px", paddingRight: "25px", color: "white" }}
            />
            <InstagramFilled
              style={{ fontSize: "25px", paddingRight: "25px", color: "white" }}
            />
            <LinkedinFilled
              style={{ fontSize: "25px", paddingRight: "25px", color: "white" }}
            />
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
