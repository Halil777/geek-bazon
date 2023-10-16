import { FC, useRef } from "react";
import { Grid, GridColumn, GridToolbar } from "@progress/kendo-react-grid";
import { ExcelExport } from "@progress/kendo-react-excel-export";
import products from "./products.json";

const Stock: FC = () => {
  const _export = useRef(null);
  const excelExport = () => {
    if (_export.current !== null) {
      _export.current.save();
    }
  };

  return (
    <div>
      <ExcelExport data={products} ref={_export}>
        <Grid
          data={products}
          style={{
            height: "420px",
          }}
        >
          <GridToolbar>
            <button
              title="Export Excel"
              className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary"
              onClick={excelExport}
            >
              Export to Excel
            </button>
          </GridToolbar>
          <GridColumn field="ProductID" title="Product ID" width="50px" />
          <GridColumn field="ProductName" title="Product Name" width="350px" />
          <GridColumn field="UnitPrice" title="Price" />
          <GridColumn field="UnitsInStock" title="In stock" />
          <GridColumn field="Discontinued" title="Discontinued" />
        </Grid>
      </ExcelExport>
      ;
    </div>
  );
};

export default Stock;
