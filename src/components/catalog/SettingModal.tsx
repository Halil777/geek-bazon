import { useState, FC } from "react";
import { Modal, Typography, Divider, Row, Col, Tooltip } from "antd";
import { SettingFilled } from "@ant-design/icons";

interface SettingModalProps {
  activeColumns: boolean; // Indicates whether columns are active or passive
}

const SettingModal: FC<SettingModalProps> = ({ activeColumns }) => {
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

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      width: 100,
    },
    {
      title: "Image",
      dataIndex: "thumbnailUrl",
      key: "thumbnailUrl",
      width: 100,
      render: (thumbnailUrl: string) => (
        <img src={thumbnailUrl} alt="Thumbnail" style={{ width: "50px" }} />
      ),
      show: activeColumns,
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      width: 150,
      render: (text: string) => (
        <Tooltip title={text}>
          <div>{text.slice(0, 15)}</div>
        </Tooltip>
      ),
    },
    {
      title: "Cross Number",
      dataIndex: "crossNumber",
      key: "crossNumber",
      width: 150,
      show: activeColumns,
    },
    {
      title: "Part Number",
      dataIndex: "partNumber",
      key: "partNumber",
      width: 150,
    },
    // ... other columns ...
  ];

  const activeColumnsData = columns.filter((column) => column.show);
  const passiveColumnsData = columns.filter((column) => !column.show);

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
            <Typography>
              {activeColumns ? "Active Columns :" : "Passive Columns :"}
            </Typography>
            {activeColumnsData.map((column, index) => (
              <div key={index}>{column.title}</div>
            ))}
          </Col>
          <Divider type="vertical" style={{ height: "100vh" }} />
          <Col span={11}>
            <Typography
              style={{ color: "gray", fontSize: "23px", fontWeight: 700 }}
            >
              {activeColumns ? "Passive Columns :" : "Active Columns :"}
            </Typography>
            {passiveColumnsData.map((column, index) => (
              <div key={index}>{column.title}</div>
            ))}
          </Col>
        </Row>
        <Divider />
      </Modal>
    </>
  );
};

export default SettingModal;
