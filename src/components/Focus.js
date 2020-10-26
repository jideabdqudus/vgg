import React from "react";
import { Card, Col, Row } from "antd";
import Data from "../assets/im12g1.jpg";
import Invest from "../assets/im12g2.jpeg";
import Tech from "../assets/tec12h.jpg";
import "./components.css";
const Focus = () => {
  return (
    <div className="container">
      <h3
        style={{
          textAlign: "center",
          fontSize: "30px",
          fontWeight: "bold",
          color: "#fff",
          paddingTop: "60px",
          paddingBottom: "20px",
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
        <Row style={{ paddingBottom: "80px" }}>
          <Col span={8}>
            <h4 className="aboutPar">Knowledge</h4>
            <Card
              style={{
                width: 300,
                height: 600,
                boxShadow: "5px 10px 18px #888888",
              }}
              cover={<img src={Data} alt="example" />}
            >
              <p style={{ fontWeight: "lighter", fontSize: "25px" }}>
                Do More Data
              </p>
              <p style={{ fontWeight: "lighter", lineHeight: "1.8em" }}>
                Our business intelligence and research teams provide data
                solutions that are tailored to meet specific decision-making
                needs for the various sectors we work in. The solutions are
                characterised by intelligence dashboards for real-time access to
                useful insights reporting, analytics to drive actionable
                insights based on patterns in data, monitoring and evaluation
                tools to achieve transparency in public sector initiatives
              </p>
            </Card>
          </Col>
          <Col span={8}>
            <h4 className="aboutPar">Investment</h4>
            <Card
              style={{
                width: 300,
                height: 600,
                boxShadow: "5px 10px 18px #888888",
              }}
              cover={<img src={Invest} alt="example" />}
            >
              <p style={{ fontWeight: "lighter", fontSize: "25px" }}>
                Investing in the Next
              </p>
              <p style={{ fontWeight: "lighter", lineHeight: "1.8em" }}>
                We are proud to support initiatives that grow the African
                technology ecosystem and have the potential to change the world.
                Through GreenHouse Capital, the investment arm of VGG, we
                support Africa’s next generation of high growth technology
                startups and entrepreneurs. We offer investment services and
                resources to passionate entrepreneurs who find opportunities in
                the midst of challenges and are poised to transform emerging
                markets in a fundamental way.
              </p>
            </Card>
          </Col>
          <Col span={8}>
            <h4 className="aboutPar">Technology</h4>
            <Card
              style={{
                width: 300,
                height: 600,
                boxShadow: "5px 10px 18px #888888",
              }}
              cover={<img src={Tech} alt="example" style={{ height: 170 }} />}
            >
              <p style={{ fontWeight: "lighter", fontSize: "25px" }}>
                Transformative Tech
              </p>
              <p style={{ fontWeight: "lighter", lineHeight: "1.8em" }}>
                Our products and platforms address the most challenging
                inefficiencies in reconciliation and payment processing across
                multiple industries including financial services, education,
                aviation,as well as power. We offer technology solutions to
                drive efficiency, transparency and productivity in governments
                and private sector organisations, and are changing the way our
                societies and nations work, trade and learn.
              </p>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Focus;
