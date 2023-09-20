import { FC, useEffect, useState } from "react";
import {
  Space,
  AutoComplete,
  Button,
  Table,
  Tooltip,
  Skeleton,
  Input,
} from "antd";
import { useDispatch, useSelector } from "react-redux";
import { FileSyncOutlined, SettingFilled } from "@ant-design/icons";
import {
  fetchAutoParts,
  selectAutoParts,
} from "../../redux/catalog/autoPartsSlice";
import {
  generateRandomAlphanumeric,
  generateRandomNumbers,
} from "./generateNumbers";

const { Search } = Input;

const AutoParts: FC = () => {
  const dispatch = useDispatch<any>();
  const [searchText, setSearchText] = useState("");
  const { data: autoParts, status, error } = useSelector(selectAutoParts);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchAutoParts());
    }
  }, [status, dispatch]);

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
    },
    {
      title: "Part Number",
      dataIndex: "partNumber",
      key: "partNumber",
      width: 150,
    },
    {
      title: "Part Number",
      dataIndex: "partNumber",
      key: "partNumber",
      width: 150,
    },
    {
      title: "Part Number",
      dataIndex: "partNumber",
      key: "partNumber",
      width: 150,
    },
    {
      title: "Part Number",
      dataIndex: "partNumber",
      key: "partNumber",
      width: 150,
    },
    {
      title: "Part Number",
      dataIndex: "partNumber",
      key: "partNumber",
      width: 150,
    },
    {
      title: "Part Number",
      dataIndex: "partNumber",
      key: "partNumber",
      width: 150,
    },
    {
      title: "Part Number",
      dataIndex: "partNumber",
      key: "partNumber",
      width: 150,
    },
    {
      title: "Part Number",
      dataIndex: "partNumber",
      key: "partNumber",
      width: 150,
    },
    {
      title: "Part Number",
      dataIndex: "partNumber",
      key: "partNumber",
      width: 150,
    },

    {
      title: "Ashgabat",
      key: "operation",
      fixed: "right",
      width: 100,
      render: () => <a>action</a>,
    },
    {
      title: "Moscov",
      key: "operation",
      fixed: "right",
      width: 100,
      render: () => <a>action</a>,
    },
  ];

  if (status === "loading") {
    return (
      <Space direction="vertical" style={{ width: "100%" }} size={30}>
        <div
          style={{
            width: "98%",
            marginTop: 30,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            right: "50px",
          }}
        >
          <Space size={20}>
            <AutoComplete
              style={{ width: 200 }}
              options={[{ value: "Cross Number" }, { value: "Part Number" }]}
              placeholder="Search Cross or Part Number"
              onChange={(value) => setSearchText(value)}
              value={searchText}
            />
            <Button type="text" icon={<FileSyncOutlined />}>
              Search for anything
            </Button>
          </Space>

          <Tooltip title="Settings">
            <SettingFilled style={{ fontSize: "20px", cursor: "pointer" }} />
          </Tooltip>
        </div>
        <Skeleton active />
      </Space>
    );
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  const randomNumbers = generateRandomNumbers(5000);
  const randomAlphanumeric = generateRandomAlphanumeric(5000);

  // Combine the generated data with your autoParts data.
  const combinedData = autoParts.map((item, index) => ({
    ...item,
    id: index + 1, // Add a unique ID
    crossNumber: randomNumbers[index].crossNumber,
    partNumber: randomAlphanumeric[index].partNumber,
  }));

  return (
    <Space direction="vertical" style={{ width: "100%" }} size={30}>
      <div
        style={{
          width: "98%",
          marginTop: 30,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          right: "50px",
        }}
      >
        <Space size={20}>
          <Search
            placeholder="input search text"
            onSearch={(value) => console.log(value)}
            style={{ width: 400 }}
          />
          <Button type="text" icon={<FileSyncOutlined />}>
            Search for anything
          </Button>
        </Space>

        <Tooltip title="Settings">
          <SettingFilled style={{ fontSize: "20px", cursor: "pointer" }} />
        </Tooltip>
      </div>
      <Table
        columns={columns}
        dataSource={combinedData}
        scroll={{ x: 1500, y: 500 }}
      />
    </Space>
  );
};

export default AutoParts;
