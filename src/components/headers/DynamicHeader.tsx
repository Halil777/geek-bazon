import React from "react";
import CatalogHeader from "./CatalogHeader";
import ClientsHeader from "./ClientsHeader";
import SalesHeader from "./SalesHeader";
import ReferenceHeader from "./ReferenceHeader";
import ReturnHeader from "./ReturnHeader";

interface DynamicHeaderProps {
  currentPage: string;
}

const DynamicHeader: React.FC<DynamicHeaderProps> = ({ currentPage }) => {
  switch (currentPage) {
    case "/":
      return <CatalogHeader />;
    case "/clients":
      return <ClientsHeader />;
    case "/sales":
      return <SalesHeader />;
    case "/references":
      return <ReferenceHeader />;
    case "/returns":
      return <ReturnHeader />;
    default:
      return null;
  }
};

export default DynamicHeader;
