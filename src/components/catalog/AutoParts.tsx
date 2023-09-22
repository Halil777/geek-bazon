import React, { FC, useEffect, useState } from "react";
import { Space, Button, Table, Tooltip, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { ExportOutlined, FileSyncOutlined } from "@ant-design/icons";
import {
  fetchAutoParts,
  selectAutoParts,
} from "../../redux/catalog/autoPartsSlice";
import {
  generateRandomAlphanumeric,
  generateRandomNumbers,
} from "./generateNumbers";
import SettingsMenu from "./SettingsMenu";

const { Search } = Input;

const AutoParts: FC = () => {
  const dispatch = useDispatch<any>();
  const [searchText, setSearchText] = useState("");
  const { data: autoParts, status, error } = useSelector(selectAutoParts);
  const [showImageColumn, setShowImageColumn] = useState(true);
  const [showCrossNumberColumn, setShowCrossNumberColumn] = useState(true);

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
    showImageColumn && {
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
    showCrossNumberColumn && {
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
    // ... other columns ...
    {
      title: "Ashgabat",
      key: "operation",
      fixed: "right",
      width: 50,
      render: () => <a>action</a>,
    },
    {
      title: "Moscow",
      key: "operation",
      fixed: "right",
      width: 50,
      render: () => <a>action</a>,
    },
  ].filter(Boolean);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  const randomNumbers = generateRandomNumbers(5000);
  const randomAlphanumeric = generateRandomAlphanumeric(5000);

  const combinedData = autoParts.map((item, index) => ({
    ...item,
    id: index + 1,
    crossNumber: randomNumbers[index].crossNumber,
    partNumber: randomAlphanumeric[index].partNumber,
  }));

  const isExtraLargeScreen = window.matchMedia("(min-width: 1600px)").matches;
  const tableY = isExtraLargeScreen ? 700 : 400;

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
            placeholder="Input search text"
            onSearch={(value) => setSearchText(value)}
            style={{ width: 400 }}
          />
          <Button type="text" icon={<FileSyncOutlined />}>
            Search for anything
          </Button>
        </Space>
        <SettingsMenu
          showImageColumn={showImageColumn}
          setShowImageColumn={setShowImageColumn}
          showCrossNumberColumn={showCrossNumberColumn}
          setShowCrossNumberColumn={setShowCrossNumberColumn}
        />
      </div>
      <div style={{ position: "relative" }}>
        <Table
          columns={columns}
          dataSource={combinedData}
          scroll={{ x: 1500, y: tableY }}
        />
      </div>
    </Space>
  );
};

export default AutoParts;
