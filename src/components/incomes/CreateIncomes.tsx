import { Button, Card, Col, Divider, Row, Tooltip, Typography } from "antd";
import { FC, useState } from "react";
import { ArrowLeftOutlined, MoreOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import {
  closeIncomesSidebar,
  openIncomesSidebar,
} from "../../redux/incomes/incomesSidebarSlice";
import {
  closeCreateIncomes,
  openCreateIncomes,
} from "../../redux/incomes/componentsSlice";
import {
  addCancelButtonDiv,
  cancelButton,
  createButton,
  createIncomseHeaderContainer,
  moreIcon,
  titleCreate,
} from "./style";
import BaseInfoCard from "./BaseInfoCard";
import EmptyCardIncomes from "./EmptyCardIncomes";
import { showSuccess } from "../alert/Alert";
import AddMoreComponent from "./AddMoreComponent";

const CreateIncomes: FC = () => {
  const isOpen = useSelector(
    (state: RootState) => state.components.createIncomesOpen
  );
  const dispatch = useDispatch();

  const [showNewComponent, setShowNewComponent] = useState(false);

  const toggleSidebar = () => {
    dispatch(closeIncomesSidebar());
    dispatch(openCreateIncomes());
  };

  const toggleClose = () => {
    dispatch(closeCreateIncomes());
    dispatch(openIncomesSidebar());
  };

  const handleCreateIncomes = () => {
    setShowNewComponent(true);
    showSuccess("Successfully created new incomes component");
  };

  return (
    <>
      <Button onClick={toggleSidebar} type="primary">
        New Incomes
      </Button>

      {isOpen && (
        <Card
          style={{
            position: "absolute",
            width: "100%",
            left: 0,
            top: 0,
            height: "100vh",
            zIndex: 1000,
          }}
        >
          <Tooltip title="Close">
            <ArrowLeftOutlined onClick={toggleClose} />
          </Tooltip>
          <Row>
            <Col span={18}>
              <div style={createIncomseHeaderContainer}>
                <Typography style={titleCreate}>New Incomes Create</Typography>
                <div style={addCancelButtonDiv}>
                  {/* Show the "Create Incomes" button only if the new component is not shown */}
                  {!showNewComponent && (
                    <Button
                      type="primary"
                      style={createButton}
                      onClick={handleCreateIncomes}
                    >
                      Create Incomes
                    </Button>
                  )}
                  <Button
                    style={cancelButton}
                    type="text"
                    onClick={() => {
                      setShowNewComponent(false); // Hide the new component
                    }}
                  >
                    Cancel
                  </Button>
                </div>
                <Tooltip title="Actions with Receipts">
                  <MoreOutlined style={moreIcon} />
                </Tooltip>
              </div>
              <Row>
                <Col span={8} style={{ marginTop: 10 }}>
                  <BaseInfoCard />
                </Col>
                <Col span={16} style={{ marginTop: 10 }}>
                  {/* Conditionally render the new component or EmptyCardIncomes */}
                  {showNewComponent ? (
                    <AddMoreComponent />
                  ) : (
                    <EmptyCardIncomes />
                  )}
                </Col>
              </Row>
            </Col>
            <Divider type="vertical" style={{ height: "90vh" }} />
            <Col span={6}></Col>
          </Row>
        </Card>
      )}
    </>
  );
};

export default CreateIncomes;
