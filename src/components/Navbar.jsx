import React from "react";

//* ANT *//
import { Button, Typography, Menu, Avatar } from "antd";

//* Router *//
import { Link } from "react-router-dom";

//* Icons *//
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons";

//* Images *//
import icon from "../images/cryptocurrency.png";

//* Items *//
const menuItems = [
  {
    key: "home",
    label: <Link to="/">Home</Link>,
  },
  {
    key: "cryptocurrencies",
    label: <Link to="/cryptocurrencies">Cryptocurrencies</Link>,
  },
  {
    key: "exchanges",
    label: <Link to="/exchanges">Exchanges</Link>,
  },
  {
    key: "news",
    label: <Link to="/news">News</Link>,
  },
];

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size={"large"} />
        <Typography.Title level={2} className="logo">
          <Link to="/">Crypoverss</Link>
        </Typography.Title>
      </div>

      <Menu theme="dark" items={menuItems} />
    </div>
  );
};

export default Navbar;
