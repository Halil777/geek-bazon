import { Button, Card, Space, Typography } from "antd";
import { FC } from "react";
import { gridStyle } from "./headerStyle";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setActiveReference } from "../../redux/reference/referenceSlice";

const ReferenceHeader: FC = () => {
  const dispatch = useDispatch();

  const activeReference = useSelector(
    (state: RootState) => state.referenceActive.activeReference
  );

  const handleButtonClick = (componentName: string) => {
    dispatch(setActiveReference(componentName));
  };

  return (
    <div>
      <Card style={gridStyle} hoverable>
        <Space size={30}>
          <Typography>Reference Page</Typography>
          <Button
            onClick={() => dispatch(handleButtonClick("first"))}
            type={activeReference === "first" ? "primary" : "text"}
          >
            First Button
          </Button>
          <Button
            onClick={() => dispatch(handleButtonClick("second"))}
            type={activeReference === "second" ? "primary" : "text"}
          >
            Second Button
          </Button>
          <Button type="dashed">Third Button</Button>
          <Button type="link">Fourth Button</Button>
        </Space>
      </Card>
    </div>
  );
};

export default ReferenceHeader;
