import { Button, Card, Col, Row, Space, Typography } from "antd";
import { FC } from "react";
import { gridStyle } from "./headerStyle";
import { useDispatch, useSelector } from "react-redux";
import { selectTable } from "../../redux/catalog/catalogSlice";
import { RootState } from "../../redux/store";
import { headerTitle } from "../../common/headerTitle";

const CatalogHeader: FC = () => {
  const dispatch = useDispatch();
  const selectedTable = useSelector(
    (state: RootState) => state.catalog.selectedTable
  );

  const autoPartsTable = () => {
    dispatch(selectTable("first"));
  };

  const openTiresTable = () => {
    dispatch(selectTable("second"));
  };

  const openServiceTable = () => {
    dispatch(selectTable("third"));
  };

  return (
    <Card hoverable style={gridStyle}>
      <Row>
        <Col span={12}>
          <Space size={30}>
            <Typography style={headerTitle}>Goods and Services</Typography>
            <Button
              onClick={autoPartsTable}
              type={selectedTable === "first" ? "primary" : "text"} // Check if the first table is selected
            >
              Auto Parts
            </Button>
            <Button
              onClick={openTiresTable}
              type={selectedTable === "second" ? "primary" : "text"} // Check if the second table is selected
            >
              Tires and Wheels
            </Button>
            <Button
              onClick={openServiceTable}
              type={selectedTable === "third" ? "primary" : "text"} // Check if the third table is selected
            >
              Services
            </Button>
          </Space>
        </Col>
        <Col span={12}></Col>
      </Row>
    </Card>
  );
};

export default CatalogHeader;
