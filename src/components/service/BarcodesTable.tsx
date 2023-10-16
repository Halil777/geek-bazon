import { FC } from "react";
import { containerCommonStyle, headerContainerCommonStyle } from "./style";
import { LockFilled } from "@ant-design/icons";
import { Typography } from "antd";

const BarcodesTable: FC = () => {
  return (
    <div style={containerCommonStyle}>
      <div style={headerContainerCommonStyle}>
        <LockFilled style={{ color: "#fff", fontSize: 25 }} />
        <Typography style={{ color: "#fff", fontSize: 16, fontWeight: 600 }}>
          Authorization sessions
        </Typography>
      </div>
      <Typography style={{ padding: 20, color: "gray", fontWeight: 500 }}>
        All browsers on which your user’s authorization is current are listed
        here +9 (936) 343-03-38.
      </Typography>
    </div>
  );
};

export default BarcodesTable;
