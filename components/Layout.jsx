import React from "react";
import Nav from "./Nav";
// import React from "react";
import { Breadcrumb, Layout, Menu } from "antd";
import Header from "./Header";
import Footer from "./Footer";
const { Content } = Layout;
const Layoutt = ({ children }) => {
  return (
    <Layout className="layout">
      <Header />
      <Nav />

      <Content
        style={{
          padding: "10px 30px",
          backgroundColor: "white",
        }}
      >
        <div className="site-layout-content">{children}</div>
      </Content>
      <Footer />
    </Layout>
  );
};

export default Layoutt;
