import { Card, Typography } from "antd";
import { FC } from "react";
import { gridStyle } from "./headerStyle";

const SalesHeader: FC = () => {
  return (
    <div>
      <Card style={gridStyle} hoverable>
        <Typography>Sales section</Typography>
      </Card>
    </div>
  );
};

export default SalesHeader;
