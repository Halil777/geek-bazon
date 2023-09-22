import { FileSyncOutlined, SettingFilled } from "@ant-design/icons";
import { AutoComplete, Button, Skeleton, Space, Tooltip } from "antd";
import { FC } from "react";

const LoadingCatalog: FC = () => {
  return (
    <div>
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
              //   onChange={(value) => setSearchText(value)}
              //   value={searchText}
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
    </div>
  );
};

export default LoadingCatalog;
