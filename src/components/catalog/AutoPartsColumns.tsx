import React from "react";
import { Tooltip, Image } from "antd";
import { ColumnProps } from "antd/es/table";
import { AutoPart } from "./types";

interface Props {
  onActionClick: () => void;
}

const AutoPartsColumns: React.FC<Props> = ({ onActionClick }) => {
  const columns: ColumnProps<AutoPart>[] = [
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
        <Image src={thumbnailUrl} alt="Thumbnail" width={50} />
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
    // ... other columns ...
    {
      title: "Ashgabat",
      key: "operation",
      fixed: "right",
      width: 100,
      render: () => <a onClick={onActionClick}>action</a>,
    },
    {
      title: "Moscov",
      key: "operation",
      fixed: "right",
      width: 100,
      render: () => <a onClick={onActionClick}>action</a>,
    },
  ];

  return <>{columns}</>;
};

export default AutoPartsColumns;

//   const columns = [
//     {
//       title: "ID",
//       dataIndex: "id",
//       key: "id",
//       width: 100,
//     },
//     {
//       title: "Image",
//       dataIndex: "thumbnailUrl",
//       key: "thumbnailUrl",
//       width: 100,
//       render: (thumbnailUrl: string) => (
//         <img src={thumbnailUrl} alt="Thumbnail" style={{ width: "50px" }} />
//       ),
//     },
//     {
//       title: "Title",
//       dataIndex: "title",
//       key: "title",
//       width: 150,
//       render: (text: string) => (
//         <Tooltip title={text}>
//           <div>{text.slice(0, 15)}</div>
//         </Tooltip>
//       ),
//     },
//     {
//       title: "Cross Number",
//       dataIndex: "crossNumber",
//       key: "crossNumber",
//       width: 150,
//     },
//     {
//       title: "Part Number",
//       dataIndex: "partNumber",
//       key: "partNumber",
//       width: 150,
//     },
//     {
//       title: "Part Number",
//       dataIndex: "partNumber",
//       key: "partNumber",
//       width: 150,
//     },
//     {
//       title: "Part Number",
//       dataIndex: "partNumber",
//       key: "partNumber",
//       width: 150,
//     },
//     {
//       title: "Part Number",
//       dataIndex: "partNumber",
//       key: "partNumber",
//       width: 150,
//     },
//     {
//       title: "Part Number",
//       dataIndex: "partNumber",
//       key: "partNumber",
//       width: 150,
//     },
//     {
//       title: "Part Number",
//       dataIndex: "partNumber",
//       key: "partNumber",
//       width: 150,
//     },
//     {
//       title: "Part Number",
//       dataIndex: "partNumber",
//       key: "partNumber",
//       width: 150,
//     },
//     {
//       title: "Part Number",
//       dataIndex: "partNumber",
//       key: "partNumber",
//       width: 150,
//     },
//     {
//       title: "Part Number",
//       dataIndex: "partNumber",
//       key: "partNumber",
//       width: 150,
//     },

//     {
//       title: "Ashgabat",
//       key: "operation",
//       fixed: "right",
//       width: 100,
//       render: () => <a>action</a>,
//     },
//     {
//       title: "Moscov",
//       key: "operation",
//       fixed: "right",
//       width: 100,
//       render: () => <a>action</a>,
//     },
//   ];
