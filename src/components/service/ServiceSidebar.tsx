import { Button } from "antd";
import { FC } from "react";
import { serviceSidebarContainer } from "./style";
import { activeSalesButtons, passiveSalesButtons } from "../sales/style";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setActiveComponent } from "../../redux/service/serviceActiveComponentSlice";

const ServiceSidebar: FC = () => {
  const dispatch = useDispatch();

  const activeComponent = useSelector(
    (state: RootState) => state.serviceActiveComponent.activeComponent
  );

  const handleButtonClick = (componentName: string) => {
    dispatch(setActiveComponent(componentName));
  };
  return (
    <div>
      <div style={serviceSidebarContainer}>
        <Button
          onClick={() => handleButtonClick("component1")}
          style={
            activeComponent === "component1"
              ? activeSalesButtons
              : passiveSalesButtons
          }
          type="text"
        >
          Name
        </Button>
        <Button
          onClick={() => handleButtonClick("component2")}
          style={
            activeComponent === "component2"
              ? activeSalesButtons
              : passiveSalesButtons
          }
          type="text"
        >
          Settings
        </Button>
        <Button
          onClick={() => handleButtonClick("component3")}
          style={
            activeComponent === "component3"
              ? activeSalesButtons
              : passiveSalesButtons
          }
          type="text"
        >
          Online-Cash
        </Button>
        <Button
          onClick={() => handleButtonClick("component4")}
          style={
            activeComponent === "component4"
              ? activeSalesButtons
              : passiveSalesButtons
          }
          type="text"
        >
          Barcodes
        </Button>
        <Button
          onClick={() => handleButtonClick("component5")}
          style={
            activeComponent === "component5"
              ? activeSalesButtons
              : passiveSalesButtons
          }
          type="text"
        >
          Profile
        </Button>
        <Button
          onClick={() => handleButtonClick("component6")}
          style={
            activeComponent === "component6"
              ? activeSalesButtons
              : passiveSalesButtons
          }
          type="text"
        >
          Update Bazon
        </Button>
      </div>
    </div>
  );
};

export default ServiceSidebar;
