import { FC } from "react";
import { padding } from "../../style/common/padding";
import ReturnFilter from "../../components/return/ReturnFilter";
import ReturnTable from "../../components/return/ReturnTable";

const Returns: FC = () => {
  return (
    <div style={padding}>
      <ReturnFilter />
      <ReturnTable />
    </div>
  );
};

export default Returns;
