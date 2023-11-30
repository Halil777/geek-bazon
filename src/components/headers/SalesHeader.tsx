import { Card, Typography } from "antd";
import { FC } from "react";
import { gridStyle } from "./headerStyle";
import { headerTitle } from "../../common/headerTitle";

const SalesHeader: FC = () => {
  return (
    <div>
      <Card style={gridStyle} hoverable>
        <Typography style={headerTitle}>Sales section</Typography>
      </Card>
    </div>
  );
};

export default SalesHeader;
