import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from "material-react-table";
import { ProductSale } from "../types";

export default function DataTable({
  columns,
  data,
}: {
  columns: MRT_ColumnDef<ProductSale>[];
  data: ProductSale[];
}) {
  const table = useMaterialReactTable({
    columns,
    data, //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
  });

  return <MaterialReactTable table={table} />;
}
