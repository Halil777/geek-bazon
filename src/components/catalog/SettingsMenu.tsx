import { SettingFilled } from "@ant-design/icons";
import { Menu, Dropdown, Space, Switch, Tooltip, Typography } from "antd";
import { ClickParam } from "antd/lib/menu/index";

const { SubMenu } = Menu;

const stocks = [
  {
    key: "1",
    label: (
      <Space style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography>Ashgabat</Typography>
        <Switch />
      </Space>
    ),
  },
  {
    key: "2",
    label: (
      <Space style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography>Moscov</Typography>
        <Switch />
      </Space>
    ),
  },
];

const items = [
  {
    key: "1",
    label: (
      <Space style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography>Remove Image</Typography>
        <Switch />
      </Space>
    ),
  },
  {
    key: "2",
    label: (
      <Space style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography>Remove Cross Number</Typography>
        <Switch />
      </Space>
    ),
  },
  {
    key: "3",
    label: <Menu.Divider />,
  },
  {
    key: "4",
    label: (
      <SubMenu title={<Typography>My Stocks</Typography>} key="stocks">
        {stocks.map((stock) => (
          <Menu.Item key={stock.key}>{stock.label}</Menu.Item>
        ))}
      </SubMenu>
    ),
  },
];

const SettingsMenu: React.FC = () => {
  const handleMenuClick = (params: ClickParam) => {
    console.log("Menu clicked:", params);
  };

  return (
    <Dropdown
      overlayStyle={{ width: 300 }}
      overlay={
        <Menu onClick={handleMenuClick} mode="vertical">
          {items.map((item) => (
            <Menu.Item key={item.key}>{item.label}</Menu.Item>
          ))}
        </Menu>
      }
      placement="bottomRight"
    >
      <Tooltip title="Settings">
        <SettingFilled style={{ fontSize: 20, cursor: "pointer" }} />
      </Tooltip>
    </Dropdown>
  );
};

export default SettingsMenu;
