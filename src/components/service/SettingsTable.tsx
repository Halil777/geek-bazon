import { FC } from "react";
import { containerCommonStyle, headerContainerCommonStyle } from "./style";
import { HomeFilled } from "@ant-design/icons";
import { Typography } from "antd";

const SettingsTable: FC = () => {
  return (
    <>
      <div style={containerCommonStyle}>
        <div style={headerContainerCommonStyle}>
          <HomeFilled style={{ color: "#fff", fontSize: 25 }} />
          <Typography style={{ color: "#fff", fontSize: 16, fontWeight: 600 }}>
            Default delivery warehouse
          </Typography>
        </div>
        <div style={{ padding: 20 }}>
          <Typography style={{ color: "gray", fontWeight: 500 }}>
            This setting applies only to this computer. If this computer is used
            primarily in one warehouse, it should be listed here.
          </Typography>
        </div>
      </div>
      <Typography style={{ marginTop: 40, color: "gray", fontWeight: 500 }}>
        You do not have permission to edit company settings.
      </Typography>
    </>
  );
};

export default SettingsTable;
