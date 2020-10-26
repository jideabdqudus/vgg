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
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2762.538213155658!2d3.326359579846835!3d6.566419835487606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1603718916819!5m2!1sen!2sng"
            width="600"
            height="450"
            frameborder="0"
            style="border:0;"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
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
