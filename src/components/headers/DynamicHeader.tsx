import React from "react";
import CatalogHeader from "./CatalogHeader";
import ClientsHeader from "./ClientsHeader";
import SalesHeader from "./SalesHeader";
import ReferenceHeader from "./ReferenceHeader";
import ReturnHeader from "./ReturnHeader";
import IncomesHeader from "./IncomesHeader";
import AnalyticsHeader from "./AnalyticsHeader";

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
    case "/incomes":
      return <IncomesHeader />;
    case "/analytics":
      return <AnalyticsHeader />;
    default:
      return null;
  }
};

export default DynamicHeader;
