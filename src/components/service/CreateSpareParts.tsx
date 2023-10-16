// CreateSpareParts.tsx
import { FC, useState } from "react";
import { Button, Divider, Input, Modal, Space, Typography } from "antd";
import { activeSalesButtons } from "../sales/style";
import { headerTitleName } from "./style";
import { useDispatch } from "react-redux";
import { addSparePartName } from "../../redux/service/sparePartNamesActions";
import { showSuccess } from "../alert/Alert";

const CreateSpareParts: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newName, setNewName] = useState("");
  const dispatch = useDispatch();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    dispatch(addSparePartName(newName));
    setIsModalOpen(false);
    setNewName("");
    showSuccess("Successfully added new Spare Part");
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setNewName("");
  };

  return (
    <div>
      <Button style={activeSalesButtons} onClick={showModal}>
        Add
      </Button>
      <Modal
        title="Part name: Creation"
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Space style={{ marginTop: 50 }} size={20}>
          <Typography style={headerTitleName}>Name</Typography>
          <Input
            style={{ width: 400 }}
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
        </Space>
        <Divider />
      </Modal>
    </div>
  );
};

export default CreateSpareParts;
