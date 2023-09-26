// Incomes.tsx

import { FC } from "react";
import { padding } from "../../style/common/padding";
import IncomesSidebar from "../../components/incomes/IncomesSidebar";
import { Button, Col, Row } from "antd";
import DraftsTable from "../../components/incomes/DraftsTable";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import CompletedTable from "../../components/incomes/CompletedTable";
import CanceledTable from "../../components/incomes/CanceledTable";
import AllIncomesTable from "../../components/incomes/AllIncomesTable";
import SuppliesTable from "../../components/incomes/SuppliesTable";
import {
  closeCreateIncomes,
  openCreateIncomes,
} from "../../redux/incomes/componentsSlice";
import { closeIncomesSidebar } from "../../redux/incomes/incomesSidebarSlice";

const Incomes: FC = () => {
  const selectedTable = useSelector(
    (state: RootState) => state.incomes.selectedTable
  );
  const isSidebarOpen = useSelector(
    (state: RootState) => state.incomesSidebar.isOpen
  );
  const isCreateIncomesOpen = useSelector(
    (state: RootState) => state.components.createIncomesOpen
  );
  const dispatch = useDispatch();

  const toggleCreateIncomes = () => {
    if (!isCreateIncomesOpen) {
      dispatch(openCreateIncomes());
      dispatch(closeIncomesSidebar());
    } else {
      dispatch(closeCreateIncomes());
    }
  };

  return (
    <div style={padding}>
      <Row>
        <Col span={isCreateIncomesOpen ? 0 : 6}>
          {isSidebarOpen && !isCreateIncomesOpen && <IncomesSidebar />}
        </Col>
        <Col span={isCreateIncomesOpen ? 24 : 18}>
          {selectedTable === "first" && <DraftsTable />}
          {selectedTable === "second" && <CompletedTable />}
          {selectedTable === "third" && <CanceledTable />}
          {selectedTable === "fourth" && <AllIncomesTable />}
          {selectedTable === "fifth" && <SuppliesTable />}
        </Col>
      </Row>
    </div>
  );
};

export default Incomes;
