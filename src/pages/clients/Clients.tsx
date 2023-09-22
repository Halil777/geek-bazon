import { FC } from "react";
import ClientsSidebar from "../../components/clients";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Col, Row } from "antd";
import ClientsFirstTable from "../../components/clients/ClientsFirstTable";
import ClientsSecondTable from "../../components/clients/ClientsSecondTable";

const Clients: FC = () => {
  const selectedClientsTable = useSelector(
    (state: RootState) => state.clientsTables.selectedClientsTable
  );

  return (
    <div>
      <Row>
        <Col span={6}>
          <ClientsSidebar />
        </Col>
        <Col span={18}>
          {selectedClientsTable === "first" && <ClientsFirstTable />}
          {selectedClientsTable === "second" && <ClientsSecondTable />}
        </Col>
      </Row>
    </div>
  );
};

export default Clients;
