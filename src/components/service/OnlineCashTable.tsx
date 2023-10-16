import { FC } from "react";
import { containerCommonStyle, headerContainerCommonStyle } from "./style";
import { PrinterFilled } from "@ant-design/icons";
import { Typography } from "antd";

const OnlineCashTable: FC = () => {
  return (
    <div style={containerCommonStyle}>
      <div style={headerContainerCommonStyle}>
        <PrinterFilled style={{ color: "#fff", fontSize: 25 }} />
        <Typography style={{ color: "#fff", fontSize: 16, fontWeight: 600 }}>
          Setting up a cash register for punching checks
        </Typography>
      </div>
      <div style={{ padding: 20 }}>
        <Typography style={{ color: "gray", fontWeight: 500 }}>
          You (user +9 (936) 343-03-38) are not registered as a cashier on any
          cash register. To break checks, seek help from an employee of your
          organization who has such access.
        </Typography>
      </div>
    </div>
  );
};

export default OnlineCashTable;
