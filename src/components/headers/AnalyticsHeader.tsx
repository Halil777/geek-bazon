import { FC } from "react";
import { gridStyle } from "./headerStyle";
import { Card, Typography } from "antd";
import { headerTitle } from "../../common/headerTitle";

const AnalyticsHeader: FC = () => {
  return (
    <Card hoverable style={gridStyle}>
      <Typography style={headerTitle}>Analytics</Typography>
    </Card>
  );
};

export default AnalyticsHeader;
