import React from "react";
import { Menu } from "antd";
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
    <Menu theme="dark" mode="inline" defaultSelectedKeys={[selectedKey]}>
      {menuItems.map((menuItem) => (
        <Menu.Item key={menuItem.id} icon={menuItem.icon}>
          <Link to={menuItem.path}>
            {!collapsed && <span>{menuItem.label}</span>}
          </Link>
        </Menu.Item>
      ))}
    </Menu>
  );
};

export default SidebarMenuItems;
