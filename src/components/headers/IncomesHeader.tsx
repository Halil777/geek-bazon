import { Card, Typography } from "antd";
import { FC } from "react";
import { gridStyle } from "./headerStyle";
import { titleName } from "../../style/common/title";

const IncomesHeader: FC = () => {
  return (
    <div>
      <Card style={gridStyle} hoverable>
        <Typography style={titleName}>Incomes Items</Typography>
      </Card>
    </div>
  );
};

export default IncomesHeader;
