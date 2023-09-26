import React from "react";
import { Menu, Tooltip } from "antd";
import { Link, useLocation } from "react-router-dom";

import { menuItems } from "./interface";

const SidebarMenuItems: React.FC<{ collapsed: boolean }> = ({ collapsed }) => {
  const location = useLocation();

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
      default:
        return "0";
    }
  };

  const selectedKey = getKeyFromPath(location.pathname);

  return (
    <Menu
      theme="dark"
      mode="inline"
      style={{ minHeight: "100vh" }}
      defaultSelectedKeys={[selectedKey]}
    >
      {menuItems.map((menuItem) => (
        <Menu.Item key={menuItem.id} icon={menuItem.icon}>
          {collapsed ? (
            <Tooltip title={menuItem.label}>
              <Link to={menuItem.path}></Link>
            </Tooltip>
          ) : (
            <Link to={menuItem.path}>{menuItem.label}</Link>
          )}
        </Menu.Item>
      ))}
    </Menu>
  );
};

export default SidebarMenuItems;
