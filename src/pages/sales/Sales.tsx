// Sales.tsx
import { FC } from "react";
import { Col, Row } from "antd";
import { useSelector } from "react-redux";
import SalesButtons from "../../components/sales/SalesButtons";
import SalesNews from "../../components/sales/SalesNews";
import SalesAtWork from "../../components/sales/SalesAtWork";
import SalesCanceled from "../../components/sales/SalesCanceled";
import SalesIssued from "../../components/sales/SalesIssued";
import SalesAllTransaction from "../../components/sales/SalesAllTransaction";
import { RootState } from "../../redux/store";

const Sales: FC = () => {
  const activeComponent = useSelector(
    (state: RootState) => state.salesActiveButton.activeComponent
  );

  return (
    <div style={{ paddingTop: "90px" }}>
      <Row>
        <Col span={6}>
          <SalesButtons />
        </Col>
        <Col>
          {activeComponent === "component1" && <SalesNews />}
          {activeComponent === "component2" && <SalesAtWork />}
          {activeComponent === "component3" && <SalesIssued />}
          {activeComponent === "component4" && <SalesCanceled />}
          {activeComponent === "component5" && <SalesAllTransaction />}
        </Col>
      </Row>
    </div>
  );
};

export default Sales;
