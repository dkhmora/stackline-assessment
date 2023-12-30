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
import { SvgIconOwnProps, ThemeProvider, createTheme } from "@mui/material";

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

  return (
    <ThemeProvider
      theme={createTheme({
        palette: {
          text: {
            primary: "#111111",
          },
        },
        typography: {
          fontWeightBold: 100,
          fontWeightRegular: 100,
          fontWeightLight: 100,
          fontWeightMedium: 100,
        },
      })}
    >
      <MaterialReactTable table={table} />
    </ThemeProvider>
  );
}
