import { Stack } from "@mui/material";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { DownloadTableExcel } from "react-export-table-to-excel";

const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "ID",
    width: 70,
    editable: true,
  },
  {
    field: "name",
    headerName: "Name",
    editable: true,
    resizable: true,
  },
  {
    field: "username",
    headerName: "Username",
    resizable: true,
  },
  {
    field: "email",
    headerName: "Email",
    resizable: true,
  },
  {
    field: "address",
    headerName: "Address",
    sortable: false,
    resizable: true,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.address.city || ""}, ${params.row.address.street || ""}`,
  },
  {
    field: "phone",
    headerName: "Phone",
    headerClassName: "fixed-header",
    cellClassName: "fixed-cell",
  },
  {
    field: "website",
    headerName: "Website",
    headerClassName: "fixed-header",
    cellClassName: "fixed-cell",
  },
];

export default function DataTable() {
  const tableRef = useRef(null);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setRows(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ width: "100%" }}>
      <DataGrid ref={tableRef} rows={rows} columns={columns} />
      <Stack
        direction="row"
        justifyContent="flex-end"
        alignItems="end"
        height="100%"
      >
        <DownloadTableExcel
          filename="users table"
          sheet="users"
          currentTableRef={tableRef.current}
        >
          <button style={{ padding: 12, width: 150, cursor: "pointer" }}>
            Export excel
          </button>
        </DownloadTableExcel>
      </Stack>
    </div>
  );
}
