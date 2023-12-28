import React from "react";
import { ProductSale } from "../types";
import SeriesChart from "./SeriesChart";

export default function SalesChartCard({ sales }: { sales: ProductSale[] }) {
  return (
    <div className="h-full w-full shadow-md bg-white">
      <SeriesChart sales={sales} />
    </div>
  );
}
