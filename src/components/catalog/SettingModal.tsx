import { useState, FC } from "react";
import { Modal, Space, Button, Typography, Divider, Row, Col } from "antd";
import { SettingFilled } from "@ant-design/icons";

const SettingModal: FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          background: "lightgray",
          height: "40px",
          padding: "12px",
          borderRadius: "8px",
        }}
        onClick={showModal}
      >
        <SettingFilled />
        <Typography>My Stock</Typography>
      </div>
      <Modal
        visible={isModalVisible}
        onOk={handleOk}
        style={{ width: "80%" }}
        onCancel={handleCancel}
      >
        <Typography>Settings Table</Typography>
        <Divider />
        <Row>
          <Col span={11}>
            <Typography>Active</Typography>
          </Col>
          <Divider type="vertical" style={{ height: "100vh" }} />
          <Col span={11}>
            <Typography
              style={{ color: "gray", fontSize: "23px", fontWeight: 700 }}
            >
              Passive
            </Typography>
          </Col>
        </Row>
        <Divider />
      </Modal>
    </>
  );
};

export default SettingModal;
