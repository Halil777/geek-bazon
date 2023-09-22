import { Button, Card, Space } from "antd";
import { FC } from "react";
import { clientSidebarBtns, clietSidebarCard } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { selectTable } from "../../redux/clients/clientTablesSlice";

const ClientsSidebar: FC = () => {
  const dispatch = useDispatch();
  const selectedClientsTable = useSelector(
    (state: RootState) => state.clientsTables.selectedClientsTable
  );

  const openFirstTable = () => {
    dispatch(selectTable("first"));
  };

  const openServiceTable = () => {
    dispatch(selectTable("second"));
  };

  return (
    <div>
      <Card hoverable style={clietSidebarCard}>
        <Space direction="vertical" size={10}>
          <Button
            onClick={openFirstTable}
            type={selectedClientsTable === "first" ? "primary" : "text"}
            style={clientSidebarBtns}
          >
            Service
          </Button>
          <Button
            onClick={openServiceTable}
            type={selectedClientsTable === "second" ? "primary" : "text"}
            style={clientSidebarBtns}
          >
            Active
          </Button>
          <Button type="primary" style={clientSidebarBtns}>
            Passive
          </Button>
          <Button type="primary" style={clientSidebarBtns}>
            Settings
          </Button>
        </Space>
      </Card>
    </div>
  );
};

export default ClientsSidebar;
