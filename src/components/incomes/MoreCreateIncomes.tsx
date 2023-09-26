import { ExpandAltOutlined } from "@ant-design/icons";
import { Button, Drawer } from "antd";
import { FC, useState } from "react";

const MoreCreateIncomes: FC = () => {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);

  const showDrawer = () => {
    setIsDrawerVisible(true);
  };

  const onClose = () => {
    setIsDrawerVisible(false);
  };
  return (
    <div>
      <Button
        onClick={showDrawer}
        type="text"
        icon={<ExpandAltOutlined style={{ color: "#53A3F7" }} />}
      >
        More
      </Button>
      <Drawer
        title="New Goods"
        placement="bottom"
        closable={true}
        onClose={onClose}
        visible={isDrawerVisible}
        height="100%"
        width="100%"
      ></Drawer>
    </div>
  );
};

export default MoreCreateIncomes;
