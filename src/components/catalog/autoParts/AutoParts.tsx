import { FC } from "react";
import AutoPartsTable from "./AutoPartsTable";

const AutoParts: FC = () => {
  const autoPartsData = [
    {
      id: 1,
      name: "Engine Oil",
      description: "High-performance synthetic oil",
      price: 29.99,
    },
    {
      id: 2,
      name: "Air Filter",
      description: "Premium air filter for improved efficiency",
      price: 12.99,
    },
    // Add more auto parts as needed
  ];
  return (
    <>
      <AutoPartsTable autoParts={autoPartsData} />
    </>
  );
};

export default AutoParts;
