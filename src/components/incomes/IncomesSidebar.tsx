import { Button, Card, Divider, Space } from "antd";
import { FC } from "react";
import { activeButton, incomesContainer, passiveButton } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { selectTable } from "../../redux/incomes/incomesSlice";

const IncomesSidebar: FC = () => {
  const dispatch = useDispatch();
  const selectedTable = useSelector(
    (state: RootState) => state.incomes.selectedTable
  );

  const openDraftsTable = () => {
    dispatch(selectTable("first"));
  };

  const openCompletedTable = () => {
    dispatch(selectTable("second"));
  };

  const openCanceledTable = () => {
    dispatch(selectTable("third"));
  };

  const openAllIncomesTable = () => {
    dispatch(selectTable("fourth"));
  };

  const openSuppliesTable = () => {
    dispatch(selectTable("fifth"));
  };
  return (
    <div>
      <Card style={incomesContainer}>
        <Space direction="vertical" size={30}>
          <Button
            onClick={openDraftsTable}
            type="text"
            style={selectedTable === "first" ? activeButton : passiveButton}
          >
            Drafts
          </Button>
          <Button
            onClick={openCompletedTable}
            type="text"
            style={selectedTable === "second" ? activeButton : passiveButton}
          >
            Completed
          </Button>
          <Button
            onClick={openCanceledTable}
            type="text"
            style={selectedTable === "third" ? activeButton : passiveButton}
          >
            Canceled
          </Button>
          <Button
            onClick={openAllIncomesTable}
            type="text"
            style={selectedTable === "fourth" ? activeButton : passiveButton}
          >
            All Incomes
          </Button>
          <Divider />
          <Button
            onClick={openSuppliesTable}
            type="text"
            style={selectedTable === "fifth" ? activeButton : passiveButton}
          >
            Supplies
          </Button>
        </Space>
      </Card>
    </div>
  );
};

export default IncomesSidebar;
