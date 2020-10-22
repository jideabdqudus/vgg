import React, { useState } from "react";

import { Menu } from "antd";

import Logo from "../assets/lo12go.png";

const TopBar = () => {
  const [current, setCurrent] = useState("mail");

  const handleClick = (e) => {
    console.log("click ", e);
    setCurrent({ current: e.key });
  };

  return (
    <div className="container">
      <Menu
        onClick={handleClick}
        selectedKeys={[current]}
        mode="horizontal"
        style={{ backgroundColor: "#013444", border:"none" }}
      >
        <Menu.Item key="logo">
          <img src={Logo} alt="Logo" height="30" style={{marginTop: 20}} />
        </Menu.Item>
        <Menu.Item key="home" style={myStyle}>
          Home
        </Menu.Item>
        <Menu.Item key="about" style={myStyle}>
          About Us
        </Menu.Item>
        <Menu.Item key="focus" style={myStyle}>
          Focus Areas
        </Menu.Item>
        <Menu.Item key="join" style={myStyle}>
          Join Us
        </Menu.Item>
        <Menu.Item key="blog" style={myStyle}>
          Blog
        </Menu.Item>
      </Menu>
    </div>
  );
};

const myStyle = {
  color: "#54ab68",
  float: "right",
  margin: 10,
};

export default TopBar;
