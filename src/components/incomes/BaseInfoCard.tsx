import { Button, Card, Divider, Input, Select, Space, Typography } from "antd";
import { FC, useRef, useState } from "react";
import { createItemContainer, createItemInfo } from "./style";
import { PlusOutlined } from "@ant-design/icons";
import type { SelectProps } from "antd";
const { TextArea } = Input;
import type { InputRef } from "antd";

let index = 0;

const options: SelectProps["options"] = [];

for (let i = 10; i < 36; i++) {
  options.push({
    value: i.toString(36) + i,
    label: i.toString(36) + i,
  });
}

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const BaseInfoCard: FC = () => {
  const [items, setItems] = useState(["Ashgabat", "Moscow"]);
  const [name, setName] = useState("");
  const inputRef = useRef<InputRef>(null);

  const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const addItem = (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => {
    e.preventDefault();
    setItems([...items, name || `New item ${index++}`]);
    setName("");
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };

  return (
    <div>
      <Card style={createItemInfo}>
        <div style={{ display: "flex", gap: 20 }}>
          <div style={createItemContainer}>
            <Typography>Summa</Typography>
            <Typography>0</Typography>
          </div>
          <div style={createItemContainer}>
            <Typography>Blaa. blaa</Typography>
            <Typography>0</Typography>
          </div>
        </div>
        <Divider />
        <Space direction="vertical" style={{ width: "100%" }}>
          <Typography>Postawka</Typography>
          <Select
            mode="tags"
            style={{ width: "100%" }}
            onChange={handleChange}
            tokenSeparators={[","]}
            options={options}
          />
        </Space>
        <Divider />
        <Space direction="vertical" style={{ width: "100%" }}>
          <Typography>Sklad oprihoddovaniya</Typography>
          <Select
            style={{ width: "100%" }}
            placeholder="custom dropdown render"
            dropdownRender={(menu) => (
              <>
                {menu}
                <Divider style={{ margin: "8px 0" }} />
                <Space style={{ padding: "0 8px 4px" }}>
                  <Input
                    placeholder="Please enter item"
                    ref={inputRef}
                    value={name}
                    onChange={onNameChange}
                  />
                  <Button type="text" icon={<PlusOutlined />} onClick={addItem}>
                    Add item
                  </Button>
                </Space>
              </>
            )}
            options={items.map((item) => ({
              label: item,
              value: item,
            }))}
          />
        </Space>
        <TextArea
          rows={3}
          placeholder="commentary"
          style={{ marginTop: "30px" }}
        />
      </Card>
    </div>
  );
};

export default BaseInfoCard;
