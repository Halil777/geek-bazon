import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { Link, Outlet, useLocation } from "react-router-dom";
import DynamicHeader from "../headers/DynamicHeader";
import { menuItems } from "./interface";

const { Content, Sider } = Layout;

const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(true);
  const location = useLocation();
  const currentPage = location.pathname;

  const getKeyFromPath = (path: string) => {
    switch (path) {
      case "/":
        return "1";
      case "/clients":
        return "2";
      case "/returns":
        return "3";
      case "/sales":
        return "4";
      case "/references":
        return "5";
      case "/incomes":
        return "6";
      case "/service":
        return "7";
      case "/stock":
        return "8";
      case "/analytics":
        return "9";
      default:
        return "0";
    }
  };

  const selectedKey = getKeyFromPath(location.pathname);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          style={{ minHeight: "100vh" }}
          defaultSelectedKeys={[selectedKey]}
        >
          {menuItems.map((menuItem) => (
            <Menu.Item key={menuItem.id} icon={menuItem.icon}>
              <Link to={menuItem.path}>{menuItem.label}</Link>
            </Menu.Item>
          ))}
        </Menu>
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
