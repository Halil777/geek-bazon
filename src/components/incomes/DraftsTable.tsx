import { FC, useState } from "react";
import { draftHeader, settingsIcon } from "./style";
import { Button, Divider, Space, Table, Tag, Menu, Dropdown } from "antd";
import { SettingOutlined } from "@ant-design/icons";
import { ColumnsType } from "antd/es/table";
import CalendarIncomes from "./CalendarIncomes";
import CreateIncomes from "./CreateIncomes";

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const DraftsTable: FC = () => {
  const [menuVisible, setMenuVisible] = useState<string | null>(null);

  const handleMenuClick = (key: string) => {
    setMenuVisible(menuVisible === key ? null : key);
  };

  const dropdownMenu = (columnKey: string) => (
    <Menu
      onClick={() => handleMenuClick(columnKey)}
      visible={menuVisible === columnKey}
    >
      <Space size={-10}>
        <Menu.Item key="option1">
          <CalendarIncomes />
        </Menu.Item>
        <Menu.Item key="option2">
          <CalendarIncomes />
        </Menu.Item>
      </Space>
      <Menu.Item key="option3">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "10px",
          }}
        >
          <Button>Cancel</Button>
        </div>
      </Menu.Item>
    </Menu>
  );

  const columns: ColumnsType<DataType> = [
    {
      title: (
        <div>
          <Dropdown overlay={dropdownMenu("name")} trigger={["click"]}>
            <Button type="text">Date / Year</Button>
          </Dropdown>
        </div>
      ),
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Tags",
      key: "tags",
      dataIndex: "tags",
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "loser") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
  ];

  const data: DataType[] = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"],
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sydney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
  ];

  return (
    <div>
      <div style={draftHeader}>
        <Button>No filters specified</Button>
        <Space size={10}>
          <CreateIncomes />
          <Divider type="vertical" style={{ height: 30 }} />
          <SettingOutlined style={settingsIcon} />
        </Space>
      </div>
      <Table columns={columns} dataSource={data} pagination={false} />
    </div>
  );
};

export default DraftsTable;
