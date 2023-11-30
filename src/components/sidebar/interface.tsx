import {
  UserOutlined,
  RetweetOutlined,
  ShoppingCartOutlined,
  BookOutlined,
  WalletOutlined,
  ToolOutlined,
  DatabaseOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";

interface MenuItem {
  id: string;
  icon: React.ReactNode;
  label: string;
  path: string;
}

export const menuItems: MenuItem[] = [
  { id: "1", icon: <AppstoreOutlined />, label: "Catalog", path: "/" },
  {
    id: "2",
    icon: <UserOutlined />,
    label: "Clients",
    path: "/clients",
  },
  { id: "3", icon: <RetweetOutlined />, label: "Returns", path: "/returns" },
  { id: "4", icon: <ShoppingCartOutlined />, label: "Sales", path: "/sales" },
  {
    id: "5",
    icon: <BookOutlined />,
    label: "References",
    path: "/references",
  },
  { id: "6", icon: <WalletOutlined />, label: "Incomes", path: "/incomes" },
  { id: "7", icon: <ToolOutlined />, label: "Service", path: "/service" },
  { id: "8", icon: <DatabaseOutlined />, label: "Stock", path: "/stock" },
  {
    id: "9",
    icon: <DatabaseOutlined />,
    label: "Analytics",
    path: "/analytics",
  },
];
