import React, { useState } from "react";
import { Modal, Checkbox } from "antd";
import { ColumnsType } from "antd/es/table";
import { Grid } from "@mui/material";

interface ColumnManagerProps {
  columns: ColumnsType<any>;
  onColumnToggle: (checkedColumns: string[]) => void;
  visible: boolean;
  onClose: () => void;
}

const ColumnManager: React.FC<ColumnManagerProps> = ({
  columns,
  onColumnToggle,
  visible,
  onClose,
}) => {
  const [checkedColumns, setCheckedColumns] = useState(() => {
    const initialCheckedColumns = columns.map((column) => column.key as string);
    return initialCheckedColumns;
  });

  const handleCheckboxChange = (columnKey: string) => {
    const updatedCheckedColumns = checkedColumns.includes(columnKey)
      ? checkedColumns.filter((key) => key !== columnKey)
      : [...checkedColumns, columnKey];

    setCheckedColumns(updatedCheckedColumns);
    onColumnToggle(updatedCheckedColumns);
  };

  return (
    <Modal
      style={{ width: "100%" }}
      title="Column Manager"
      visible={visible}
      onCancel={onClose}
      footer={null}
    >
      <Grid container spacing={2}>
        {columns.map((column) => (
          <Grid item key={column.key} lg={4} md={4} sm={4} xs={6}>
            <Checkbox
              onChange={() => handleCheckboxChange(column.key as string)}
              checked={checkedColumns.includes(column.key as string)}
            >
              {column.title as React.ReactNode}
            </Checkbox>
          </Grid>
        ))}
      </Grid>
    </Modal>
  );
};

export default ColumnManager;
