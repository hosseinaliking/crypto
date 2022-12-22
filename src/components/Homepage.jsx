import React from "react";

//* Api *//
import getCoinsData from "../api/cryptoApi";

//* Millify *//
import millify from "millify";

//* ANT *//
import { Typography, Row, Col, Statistic } from "antd";
const { Title } = Typography;

//* Router *//
import { Link } from "react-router-dom";

//* React Query *//
import { useQuery } from "react-query";

const Homepage = () => {
  const { data, isLoading } = useQuery(getCoinsData);

  console.log(data);

  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
      <Row>
        {/* Half of screen */}
        <Col span={12}>
          {" "}
          <Statistic title="Total Cryptocurrencies" value="5" />{" "}
        </Col>
        <Col span={12}>
          {" "}
          <Statistic title="Total Exchanges" value="5" />{" "}
        </Col>
        <Col span={12}>
          {" "}
          <Statistic title="Total Market Cap" value="5" />{" "}
        </Col>
        <Col span={12}>
          {" "}
          <Statistic title="Total 24h Volume" value="5" />{" "}
        </Col>
        <Col span={12}>
          {" "}
          <Statistic title="Total Markets" value="5" />{" "}
        </Col>
      </Row>
    </>
  );
};

export default Homepage;
