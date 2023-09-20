import React from "react";
import CatalogHeader from "./CatalogHeader";
import ClientsHeader from "./ClientsHeader";

interface DynamicHeaderProps {
  currentPage: string;
}

const DynamicHeader: React.FC<DynamicHeaderProps> = ({ currentPage }) => {
  switch (currentPage) {
    case "/":
      return <CatalogHeader />;
    case "/clients":
      return <ClientsHeader />;
    default:
      return null;
  }
};

export default DynamicHeader;
