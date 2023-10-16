import { Col, Divider, Row } from "antd";
import { FC } from "react";
import ServiceSidebar from "../../components/service/ServiceSidebar";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import NameTable from "../../components/service/NameTable";
import SettingsTable from "../../components/service/SettingsTable";
import OnlineCashTable from "../../components/service/OnlineCashTable";
import BarcodesTable from "../../components/service/BarcodesTable";
import ProfileComponent from "../../components/service/ProfileComponent";
import UpdateComponent from "../../components/service/UpdateComponent";

const Service: FC = () => {
  const activeComponent = useSelector(
    (state: RootState) => state.serviceActiveComponent.activeComponent
  );

  return (
    <div>
      <Row>
        <Col span={4}>
          <ServiceSidebar />
        </Col>
        <Col span={1}>
          <Divider type="vertical" style={{ height: "100vh" }} />
        </Col>
        <Col span={19}>
          {activeComponent === "component1" && <NameTable />}
          {activeComponent === "component2" && <SettingsTable />}
          {activeComponent === "component3" && <OnlineCashTable />}
          {activeComponent === "component4" && <BarcodesTable />}
          {activeComponent === "component5" && <ProfileComponent />}
          {activeComponent === "component6" && <UpdateComponent />}
        </Col>
      </Row>
    </div>
  );
};

export default Service;
