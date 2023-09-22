// SalesButtons.tsx
import { Button, Card, Space } from "antd";
import { FC } from "react";
import {
  salesButtonsCard,
  activeSalesButtons,
  passiveSalesButtons,
} from "./style";
import { useDispatch } from "react-redux";
import { setActiveComponent } from "../../redux/sales/salesActiveButtonSlice";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";

const SalesButtons: FC = () => {
  const dispatch = useDispatch();

  const activeComponent = useSelector(
    (state: RootState) => state.salesActiveButton.activeComponent
  );

  const handleButtonClick = (componentName: string) => {
    dispatch(setActiveComponent(componentName));
  };

  return (
    <div>
      <Card style={salesButtonsCard} hoverable>
        <Space direction="vertical" size={20}>
          <Button
            style={
              activeComponent === "component1"
                ? activeSalesButtons
                : passiveSalesButtons
            }
            onClick={() => handleButtonClick("component1")}
          >
            News
          </Button>
          <Button
            style={
              activeComponent === "component2"
                ? activeSalesButtons
                : passiveSalesButtons
            }
            onClick={() => handleButtonClick("component2")}
          >
            At Work
          </Button>
          <Button
            style={
              activeComponent === "component3"
                ? activeSalesButtons
                : passiveSalesButtons
            }
            onClick={() => handleButtonClick("component3")}
          >
            Issued
          </Button>
          <Button
            style={
              activeComponent === "component4"
                ? activeSalesButtons
                : passiveSalesButtons
            }
            onClick={() => handleButtonClick("component4")}
          >
            Canceled
          </Button>
          <Button
            style={
              activeComponent === "component5"
                ? activeSalesButtons
                : passiveSalesButtons
            }
            onClick={() => handleButtonClick("component5")}
          >
            All Transactions
          </Button>
        </Space>
      </Card>
    </div>
  );
};

export default SalesButtons;
