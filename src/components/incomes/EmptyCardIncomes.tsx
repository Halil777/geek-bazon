import { FC } from "react";
import { emptyIncomeContainer } from "./style";
import { Typography } from "antd";

const EmptyCardIncomes: FC = () => {
  return (
    <div style={emptyIncomeContainer}>
      <Typography style={{ fontSize: 16, color: "lightgray" }}>
        Create a receipt , <br /> to add products
      </Typography>
    </div>
  );
};

export default EmptyCardIncomes;
