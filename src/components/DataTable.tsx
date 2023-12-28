import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from "material-react-table";
import { ProductSale } from "../types";
import {
  KeyboardArrowDown as KeyboardArrowDownIcon,
  UnfoldMore as UnfoldMoreIcon,
} from "@mui/icons-material";
import { SvgIconOwnProps } from "@mui/material";

export default function DataTable({
  columns,
  data,
}: {
  columns: MRT_ColumnDef<ProductSale>[];
  data: ProductSale[];
}) {
  const table = useMaterialReactTable({
    columns,
    data,
    muiTablePaperProps: {
      elevation: 0,
    },
    icons: {
      ArrowDownwardIcon: (props: SvgIconOwnProps) => (
        <KeyboardArrowDownIcon {...props} />
      ),
      SyncAltIcon: (props: SvgIconOwnProps) => (
        <UnfoldMoreIcon
          {...props}
          style={{
            transform: "scaleX(0.9) translateX(-1px)",
          }}
        />
      ),
    },
  });

  return <MaterialReactTable table={table} />;
}
