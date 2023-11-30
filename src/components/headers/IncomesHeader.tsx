import { Card, Typography } from "antd";
import { FC } from "react";
import { gridStyle } from "./headerStyle";
import { headerTitle } from "../../common/headerTitle";

const IncomesHeader: FC = () => {
  return (
    <div>
      <Card style={gridStyle} hoverable>
        <Typography style={headerTitle}>Incomes Items</Typography>
      </Card>
    </div>
  );
};

export default IncomesHeader;
