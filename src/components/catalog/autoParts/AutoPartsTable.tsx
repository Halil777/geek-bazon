import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70, editable: true },
  {
    field: "firstName",
    headerName: "First name",
    editable: true,
    resizable: true,
  },
  { field: "lastName", headerName: "Last name", resizable: true },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    resizable: true,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    resizable: true,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
  {
    field: "test",
    headerName: "Test",
    headerClassName: "fixed-header",
    cellClassName: "fixed-cell",
  },
  {
    field: "test2",
    headerName: "Test 2",
    headerClassName: "fixed-header",
    cellClassName: "fixed-cell",
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35, test: 42, test2: 54 },
  {
    id: 2,
    lastName: "Lannister",
    firstName: "Cersei",
    age: 42,
    test: 42,
    test2: 54,
  },
  {
    id: 3,
    lastName: "Lannister",
    firstName: "Jaime",
    age: 45,
    test: 42,
    test2: 54,
  },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16, test: 42, test2: 54 },
  {
    id: 5,
    lastName: "Targaryen",
    firstName: "Daenerys",
    age: null,
    test: 42,
    test2: 54,
  },
  {
    id: 6,
    lastName: "Melisandre",
    firstName: null,
    age: 150,
    test: 42,
    test2: 54,
  },
  {
    id: 7,
    lastName: "Clifford",
    firstName: "Ferrara",
    age: 44,
    test: 42,
    test2: 54,
  },
  {
    id: 8,
    lastName: "Frances",
    firstName: "Rossini",
    age: 36,
    test: 42,
    test2: 54,
  },
  {
    id: 9,
    lastName: "Roxie",
    firstName: "Harvey",
    age: 65,
    test: 42,
    test2: 54,
  },
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}
