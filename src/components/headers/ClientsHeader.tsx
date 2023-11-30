import { Card, Typography } from "antd";
import React from "react";
import { headerTitle } from "../../common/headerTitle";
import { gridStyle } from "./headerStyle";

const ClientsHeader: React.FC = () => {
  return (
    <Card hoverable style={gridStyle}>
      <Typography style={headerTitle}>Clients header</Typography>
    </Card>
  );
};

export default ClientsHeader;
