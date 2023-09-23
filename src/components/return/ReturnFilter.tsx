import { SettingOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { FC } from "react";
import {
  returnFilterButton,
  returnFilterContainer,
  returnSettingIcon,
} from "./returnStyle";

const ReturnFilter: FC = () => {
  return (
    <div>
      <div style={returnFilterContainer}>
        <Button type="text" style={returnFilterButton}>
          No Filter!
        </Button>
        <SettingOutlined style={returnSettingIcon} />
      </div>
    </div>
  );
};

export default ReturnFilter;
