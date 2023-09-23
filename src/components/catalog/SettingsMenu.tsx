import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dropdown, Menu, Space, Switch, Tooltip, Typography } from "antd";
import { ClickParam } from "antd/lib/menu/index";
import SettingModal from "./SettingModal";
import {
  setShowCrossNumberColumn,
  setShowImageColumn,
} from "../../redux/catalog/columnsSlice";
import { RootState } from "../../redux/store";
import { SettingFilled } from "@ant-design/icons";

type SettingModalProps = {
  activeColumns?: boolean; // Make it optional
};

const SettingsMenu: React.FC = () => {
  const dispatch = useDispatch();
  const showImageColumn = useSelector(
    (state: RootState) => state.columns.showImageColumn
  );
  const showCrossNumberColumn = useSelector(
    (state: RootState) => state.columns.showCrossNumberColumn
  );

  const handleImageSwitchChange = (checked: boolean) => {
    dispatch(setShowImageColumn(checked));
  };

  const handleCrossNumberSwitchChange = (checked: boolean) => {
    dispatch(setShowCrossNumberColumn(checked));
  };

  const handleMenuClick = (params: ClickParam) => {
    console.log("Menu clicked:", params);
  };

  return (
    <Dropdown
      overlayStyle={{ width: 300 }}
      overlay={
        <Menu onClick={handleMenuClick} mode="vertical">
          <Menu.Item key="1">
            <Space style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography>Remove Image</Typography>
              <Switch
                checked={showImageColumn}
                onChange={handleImageSwitchChange}
              />
            </Space>
          </Menu.Item>
          <Menu.Item key="2">
            <Space style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography>Remove Cross Number</Typography>
              <Switch
                checked={showCrossNumberColumn}
                onChange={handleCrossNumberSwitchChange}
              />
            </Space>
          </Menu.Item>
          <Menu.Divider />
          <Menu.Item key="3">
            <div></div>
          </Menu.Item>
          <Menu.Item key="4">
            <SettingModal activeColumns={true} />
          </Menu.Item>
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
