import { Tooltip } from "antd";
import { useState, FC } from "react";
import { Resizable } from "react-resizable";
import "react-resizable/css/styles.css";

const ReturnTable: FC = () => {
  const [columnWidths, setColumnWidths] = useState({
    column1: 100, // Initial width for column 1
    column2: 150, // Initial width for column 2
    // Add more columns as needed
  });

  const handleResize = (columnKey: string, newWidth: number) => {
    setColumnWidths((prevWidths) => ({
      ...prevWidths,
      [columnKey]: newWidth,
    }));
  };

  const text =
    "Column 1 Data Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse alias aliquid iure, assumenda sapiente ut commodi quibusdam ratione ducimus cumque, consectetur animi sit quasi harumdoloremque modi dolor temporibus nostrum.";

  return (
    <table>
      <thead>
        <tr>
          <th>
            <Resizable
              width={columnWidths.column1}
              height={0}
              onResize={(e, { size }) => handleResize("column1", size.width)}
            >
              <div>Column 1</div>
            </Resizable>
          </th>
          <th>
            <Resizable
              width={columnWidths.column2}
              height={0}
              onResize={(e, { size }) => handleResize("column2", size.width)}
            >
              <div>Column 2</div>
            </Resizable>
          </th>
          {/* Add more resizable columns here */}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ width: columnWidths.column1 }}>
            <Tooltip title={text}>{text.slice(0, 10)}</Tooltip>
          </td>
          <td style={{ width: columnWidths.column2 }}>Column 2 Data</td>
          {/* Add more table data here */}
        </tr>
        {/* Add more table rows here */}
      </tbody>
    </table>
  );
};

export default ReturnTable;
