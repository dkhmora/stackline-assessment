import { useMemo } from "react";
import { type MRT_ColumnDef } from "material-react-table";
import { ProductSale } from "../types";
import DataTable from "./DataTable";

export default function SalesTableCard({ sales }: { sales: ProductSale[] }) {
  const columns = useMemo<MRT_ColumnDef<ProductSale>[]>(
    () => [
      {
        accessorKey: "weekEnding",
        header: "WEEK ENDING",
        size: 50,
        Cell: ({ cell }) => (
          <div style={{ color: "#777777" }}>{cell.getValue() as string}</div>
        ),
      },
      {
        accessorKey: "retailSales",
        header: "RETAIL SALES",
        size: 100,
        muiTableHeadCellProps: {
          align: "right",
        },
        Cell: ({ cell }) => (
          <div style={{ textAlign: "right", color: "#777777" }}>{`$${(
            cell.getValue() as number
          ).toLocaleString()}`}</div>
        ),
      },
      {
        accessorKey: "wholesaleSales",
        header: "WHOLESALE SALES",
        size: 100,
        muiTableHeadCellProps: {
          align: "right",
        },
        Cell: ({ cell }) => (
          <div style={{ textAlign: "right", color: "#777777" }}>{`$${(
            cell.getValue() as number
          ).toLocaleString()}`}</div>
        ),
      },
      {
        accessorKey: "unitsSold",
        header: "UNITS SOLD",
        size: 100,
        muiTableHeadCellProps: {
          align: "right",
        },
        Cell: ({ cell }) => (
          <div style={{ textAlign: "right", color: "#777777" }}>{`${(
            cell.getValue() as number
          ).toLocaleString()}`}</div>
        ),
      },
      {
        accessorKey: "retailerMargin",
        header: "RETAILER MARGIN",
        size: 100,
        muiTableHeadCellProps: {
          align: "right",
        },
        Cell: ({ cell }) => (
          <div style={{ textAlign: "right", color: "#777777" }}>{`$${(
            cell.getValue() as number
          ).toLocaleString()}`}</div>
        ),
      },
    ],
    []
  );

  return (
    <div className="h-full w-full shadow-md bg-white rounded">
      <DataTable columns={columns} data={sales} />
    </div>
  );
}
