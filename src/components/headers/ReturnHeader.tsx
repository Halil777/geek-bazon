import { Card, Typography } from "antd";
import { FC } from "react";
import { gridStyle } from "./headerStyle";
import { titleName } from "../../style/common/title";

const ReturnHeader: FC = () => {
  return (
    <div>
      <Card style={gridStyle} hoverable>
        <Typography style={titleName}>Returns</Typography>
      </Card>
    </div>
  );
};

export default ReturnHeader;
