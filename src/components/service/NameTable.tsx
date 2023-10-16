// NameTable.tsx
import { FC } from "react";
import {
  headerTitleName,
  nameCountContainer,
  nameItemsContainer,
  nameTableContainer,
  nameTableHeader,
} from "./style";
import { Checkbox, Divider, Typography } from "antd";
import { useSelector } from "react-redux";
import CreateSpareParts from "./CreateSpareParts";
import { RootState } from "../../redux/store";

const NameTable: FC = () => {
  const sparePartNames = useSelector(
    (state: RootState) => state.sparePartNames.names
  );

  return (
    <div style={nameTableContainer}>
      <div style={nameTableHeader}>
        <Typography style={headerTitleName}>
          Reference Book Names of Spare Parts
        </Typography>
        <CreateSpareParts />
      </div>
      <div style={nameItemsContainer}>
        <Divider />
        {sparePartNames.map((item, i) => (
          <>
            <div
              key={`spare_items_key${i}`}
              style={{
                display: "flex",
                alignItems: "center",
                paddingLeft: 20,
                gap: 30,
              }}
            >
              <Checkbox />
              <Typography>{item}</Typography>
            </div>
            <Divider />
          </>
        ))}
      </div>
      <div style={nameCountContainer}>
        <Typography style={headerTitleName}>
          Item count: {sparePartNames.length}
        </Typography>
      </div>
    </div>
  );
};

export default NameTable;
