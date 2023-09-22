import React, { useState } from "react";
import { Layout } from "antd";
import { Outlet, useLocation } from "react-router-dom";
import DynamicHeader from "../headers/DynamicHeader";
import SidebarMenuItems from ".";

const { Content, Sider } = Layout;

const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(true);
  const location = useLocation();
  const currentPage = location.pathname;

  return (
    <Layout style={{ height: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <SidebarMenuItems collapsed={collapsed} />
      </Sider>
      <Layout>
        <DynamicHeader currentPage={currentPage} />
        <Content style={{ margin: "0 16px" }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Sidebar;
