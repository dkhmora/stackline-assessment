import { useMemo } from "react";
import { type MRT_ColumnDef } from "material-react-table";
import { ProductSale } from "../types";
import Table from "./DataTable";

export default function SalesTableCard({ sales }: { sales: ProductSale[] }) {
  const columns = useMemo<MRT_ColumnDef<ProductSale>[]>(
    () => [
      {
        accessorKey: "weekEnding", //access nested data with dot notation
        header: "Week Ending",
        size: 150,
      },
      {
        accessorKey: "retailSales",
        header: "Retail Sales",
        size: 150,
      },
      {
        accessorKey: "wholesaleSales", //normal accessorKey
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
        header: "Rretailer Margin",
        size: 150,
      },
    ],
    []
  );

  return (
    <div className="h-full w-full shadow-md bg-white rounded">
      <Table columns={columns} data={sales} />
    </div>
  );
}
