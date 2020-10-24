import React from "react";
import { Card, Col, Row } from "antd";
import Data from "../assets/im12g1.jpg";
import Invest from "../assets/im12g2.jpeg";
import Tech from "../assets/tec12h.jpg";
import Meta from "antd/lib/card/Meta";
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
            <Card
              style={{ width: 300, height: 550 }}
              cover={<img src={Data} alt="example"  />}
            >
              <Meta
                title="Do more Data"
                description="Our business intelligence and research teams provide data solutions that are tailored to meet specific decision-making needs for the various sectors we work in. The solutions are characterised by intelligence dashboards for real-time access to useful insights reporting, analytics to drive actionable insights based on patterns in data, monitoring and evaluation tools to achieve transparency in public sector initiatives"
              />
            </Card>
          </Col>
          <Col span={8}>
            <h4>Investment</h4>
            <Card
              style={{ width: 300, height: 550 }}
              cover={<img src={Invest} alt="example" />}
            >
              <Meta
                title="Investing in the Next"
                description="We are proud to support initiatives that grow the African technology ecosystem and have the potential to change the world. Through GreenHouse Capital, the investment arm of VGG, we support Africa’s next generation of high growth technology startups and entrepreneurs. We offer investment services and resources to passionate entrepreneurs who find opportunities in the midst of challenges and are poised to transform emerging markets in a fundamental way."
              />
            </Card>
          </Col>
          <Col span={8}>
            <h4>Technology</h4>
            <Card
              style={{ width: 300, height: 550 }}
              cover={<img src={Tech} alt="example" style={{height: 170}}/>}
            >
              <Meta
                title="Transformative Tech"
                description="Our products and platforms address the most challenging inefficiencies in reconciliation and payment processing across multiple industries including financial services, education, aviation,as well as power. We offer technology solutions to drive efficiency, transparency and productivity in governments and private sector organisations, and are changing the way our societies and nations work, trade and learn."
              />
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Focus;
