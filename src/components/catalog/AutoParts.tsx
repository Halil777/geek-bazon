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
import {
  ExportOutlined,
  FileSyncOutlined,
  SettingFilled,
} from "@ant-design/icons";
import {
  fetchAutoParts,
  selectAutoParts,
} from "../../redux/catalog/autoPartsSlice";
import {
  generateRandomAlphanumeric,
  generateRandomNumbers,
} from "./generateNumbers";
import SettingsMenu from "./SettingsMenu";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import LoadingCatalog from "./LoadingCatalog";
import AutoPartsColumns from "./AutoPartsColumns";

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

  if (status === "loading") {
    return <LoadingCatalog />;
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

  // Determine the screen height
  const isExtraLargeScreen = window.matchMedia("(min-width: 1600px)").matches;

  // Conditionally set the y value for the Table
  const tableY = isExtraLargeScreen ? 700 : 400;
  const handleExportTable = () => {
    // Create a new workbook
    const wb = XLSX.utils.book_new();

    // Create a worksheet
    const ws = XLSX.utils.json_to_sheet(combinedData);

    // Add the worksheet to the workbook
    XLSX.utils.book_append_sheet(wb, ws, "AutoParts");

    // Generate a blob from the workbook
    const blob = XLSX.write(wb, { bookType: "blob" });

    // Create a Blob object
    const blobObject = new Blob([blob], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });

    // Save the Blob object as a file
    saveAs(blobObject, "AutoParts.xlsx");
  };

  const handleActionClick = () => {
    // Your action handling code here
  };

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

        <SettingsMenu />
      </div>
      <div style={{ position: "relative" }}>
        <Table
          columns={<AutoPartsColumns onActionClick={handleActionClick} />}
          dataSource={combinedData}
          scroll={{ x: 1500, y: tableY }}
        />
        <Button
          type="primary"
          icon={<ExportOutlined />}
          onClick={handleExportTable}
          style={{
            zIndex: 1000,
            position: "fixed",
            bottom: 0,
            right: 20,
          }}
        >
          Export table
        </Button>
      </div>
    </Space>
  );
};

export default AutoParts;
