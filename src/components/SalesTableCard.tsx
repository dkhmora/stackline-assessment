import { memo, useMemo } from "react";
import { type MRT_ColumnDef } from "material-react-table";
import { ProductSale } from "../types";
import DataTable from "./DataTable";

export default memo(function SalesTableCard({
  sales,
}: {
  sales: ProductSale[];
}) {
  const columns = useMemo<MRT_ColumnDef<ProductSale>[]>(
    () => [
      {
        accessorKey: "weekEnding",
        header: "Week Ending",
        size: 150,
      },
      {
        accessorKey: "retailSales",
        header: "Retail Sales",
        size: 150,
      },
      {
        accessorKey: "wholesaleSales",
        header: "Wholesale Sales",
        size: 200,
      },
      {
        accessorKey: "unitsSold",
        header: "Units Sold",
        size: 150,
      },
      {
        accessorKey: "retailerMargin",
        header: "Retailer Margin",
        size: 150,
      },
    ],
    []
  );

  return (
    <div className="h-full w-full shadow-md bg-white rounded">
      <DataTable columns={columns} data={sales} />
    </div>
  );
});
