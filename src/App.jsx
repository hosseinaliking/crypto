import React from "react";

//* Styles *//
import "./App.css";

//* Components *//
import {
  Navbar,
  Homepage,
  Exchanges,
  News,
  Cryptocurrencies,
  CryptoDetails,
} from "./components";

//* ANT *//
import { Layout, Typography, Space } from "antd";

//* Router *//
import { Route, Routes, Link } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>

      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/exchanges" element={<Exchanges />} />
              <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
              <Route path="/crypto/:coinId" element={<CryptoDetails />} />
              <Route path="/news" element={<News />} />
            </Routes>
          </div>
        </Layout>

        <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}
          >
            Cryptovewss <br />
            All reserved
          </Typography.Title>

          <Space>
            <Link to="/">Home</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/news">news</Link>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default App;
