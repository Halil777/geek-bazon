import { FC } from "react";
import { PlusOutlined, PlusSquareOutlined } from "@ant-design/icons";
import { Button, Dropdown } from "antd";
import type { MenuProps } from "antd";
import AddNewIncomes from "./AddNewIncome";
import MoreCreateIncomes from "./MoreCreateIncomes";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <Button type="text" icon={<PlusSquareOutlined />}>
        Worker Goods
      </Button>
    ),
  },
  {
    key: "2",
    label: <AddNewIncomes />,
  },
];

const AddMoreComponent: FC = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        gap: 20,
      }}
    >
      <Dropdown menu={{ items }} placement="bottom">
        <Button
          type="text"
          icon={<PlusOutlined style={{ color: "#53A3F7" }} />}
        >
          Add
        </Button>
      </Dropdown>
      <MoreCreateIncomes />
    </div>
  );
};

export default AddMoreComponent;
