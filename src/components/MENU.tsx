import React from "react";
import Link from "next/link";
import { Typography, Menu, Row, Col } from "antd";

const { Title } = Typography;

function MENU() {
  return (
    // <Row
    //   className="menu"
    //   style={{ justifyContent: "space-between", display: "flex" }}
    // >
    <div style={{display:"inline-block", width:"100%"}}>
      {/* <Col
        xs={{ span: 21 }}
        lg={{ span: 8 }}
        className="about-us" */}
        <div
        key="about-us"
        style={{display:"inline-block", width:"33%"}}
        // style={{ justifyContent: "flex-start", display: "flex" }}
      >
        <Link href="/about-us">
          <Title level={2} className="about-us-link" style={{display: "flex", justifyContent: "end"}}>
            About
          </Title>
        </Link>
      </div>

      {/* <Col xs={{ span: 21 }} lg={{ span: 8 }} className="events" key="events"> */}
      <div  style={{display:"inline-block", width:"33%"}}>
        <Typography.Link href="https://indico.cern.ch/category/72/">
          <Title level={2} className="events-link" style={{display: "flex", justifyContent: "end"}}>
            Events
          </Title>
        </Typography.Link>
        </div>
      <div
        // xs={{ span: 21 }}
        // lg={{ span: 8 }}
        className="contact-us"
        key="contact-us"
        style={{display:"inline-block", width:"33%"}}
      >
        <Typography.Link href="mailto:atc-contact@cern.ch" target="_blank">
          <Title level={2} className="contact-us-link" style={{display: "flex", justifyContent: "end"}}>
            Contact
          </Title>
        </Typography.Link>
      </div>
    </div>
  );
}

export default MENU;
