import { FC } from "react";
import { useSelector } from "react-redux";
import AutoParts from "../../components/catalog/autoParts/AutoParts";
import TiresWheels from "../../components/catalog/TiresWheels";
import ServiceCatalog from "../../components/catalog/ServiceCatalog";
import { RootState } from "../../redux/store";

const Catalog: FC = () => {
  const selectedTable = useSelector(
    (state: RootState) => state.catalog.selectedTable
  );

  return (
    <div
      style={{
        paddingTop: "90px",
      }}
    >
      {selectedTable === "first" && <AutoParts />}
      {selectedTable === "second" && <TiresWheels />}
      {selectedTable === "third" && <ServiceCatalog />}
    </div>
  );
};

export default Catalog;
