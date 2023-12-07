import React, { useEffect, useState } from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { AxiosInstance } from "../../../common/AxiosInstance";
import { Autopart } from "./autoPartColumns";

const AutopartsTable: React.FC = () => {
  const [data, setData] = useState<Autopart[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace the URL with your actual backend API endpoint
        const response = await AxiosInstance.get<Autopart[]>("autoparts");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const columns: ColumnsType<Autopart> = [
    {
      title: "Autopart ID",
      dataIndex: "autopart_id",
      key: "autopart_id",
    },
    {
      title: "Brand ID",
      dataIndex: "brand_id",
      key: "brand_id",
    },
    {
      title: "Model ID",
      dataIndex: "model_id",
      key: "model_id",
    },
    {
      title: "Generation ID",
      dataIndex: "generation_id",
      key: "generation_id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Front / Back",
      dataIndex: "front_back",
      key: "front_back",
    },
    {
      title: "Left / Right",
      dataIndex: "left_right",
      key: "left_right",
    },
    {
      title: "Number of Parts",
      dataIndex: "number_of_part",
      key: "number_of_part",
    },
    {
      title: "Year",
      dataIndex: "year",
      key: "year",
    },
    {
      title: "Color",
      dataIndex: "color",
      key: "color",
    },
    {
      title: "Comment",
      dataIndex: "comment",
      key: "comment",
    },
    {
      title: "Cross Number",
      dataIndex: "cross_number",
      key: "cross_number",
    },
    {
      title: "Note",
      dataIndex: "note",
      key: "note",
    },
    {
      title: "Marking",
      dataIndex: "marking",
      key: "marking",
    },
    {
      title: "Is Archive",
      dataIndex: "is_archive",
      key: "is_archive",
      render: (is_archive) => (is_archive ? "Yes" : "No"),
    },
    {
      title: "Not for Export",
      dataIndex: "not_for_export",
      key: "not_for_export",
      render: (not_for_export) => (not_for_export ? "Yes" : "No"),
    },
    {
      title: "Site Link",
      dataIndex: "site_link",
      key: "site_link",
    },
    {
      title: "Old Bar code",
      dataIndex: "old_bar_code",
      key: "old_bar_code",
    },
    {
      title: "Old Data",
      dataIndex: "old_data",
      key: "old_data",
    },
    {
      title: "Is Used",
      dataIndex: "is_used",
      key: "is_used",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Created At",
      dataIndex: "created_at",
      key: "created_at",
      render: (created_at) => new Date(created_at).toLocaleString(),
    },
    {
      title: "Updated At",
      dataIndex: "updated_at",
      key: "updated_at",
      render: (updated_at) => new Date(updated_at).toLocaleString(),
    },
    {
      title: "Model",
      dataIndex: "model",
      key: "model",
    },
    {
      title: "Brand",
      dataIndex: "brand",
      key: "brand",
    },
    {
      title: "Generation",
      dataIndex: ["generation", "name"],
      key: "generation_name",
    },
    {
      title: "Action",
      key: "operation",
      width: 100,
      fixed: "right",
      render: () => <a>action</a>,
    },
  ];

  return <Table columns={columns} dataSource={data} scroll={{ x: 4000 }} />;
};

export default AutopartsTable;
