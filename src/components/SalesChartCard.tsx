import { ProductSale, SeriesData } from "../types";
import SeriesChart from "./SeriesChart";

interface SalesChartCardProps {
  chartTitle?: string;
  chartSubtitle?: string;
  sales: ProductSale[];
}

export default function SalesChartCard({
  chartTitle,
  chartSubtitle,
  sales,
}: SalesChartCardProps) {
  // Convert sales data to series data
  const series: SeriesData[] = sales.reduce(
    (acc, curr) => {
      const { wholesaleSales, retailSales, weekEnding } = curr;
      const date = new Date(weekEnding + "T00:00:00Z");
      const utcYear = date.getUTCFullYear();
      const utcMonth = date.getUTCMonth();
      const utcDate = date.getUTCDate();
      const finalDate = Date.UTC(utcYear, utcMonth, utcDate);

      acc[0].data.push([finalDate, wholesaleSales]);
      acc[1].data.push([finalDate, retailSales]);

      return acc;
    },
    [
      {
        name: "Wholesale Data",
        type: "spline",
        color: "#45a8f6",
        data: [],
      },
      {
        name: "Retail Data",
        type: "spline",
        color: "#9ba6bf",
        data: [],
      },
    ] as SeriesData[]
  );

  return (
    <div className="h-full w-full shadow-md bg-white py-4 px-8">
      <h2 className="text-2xl font-light py-2 text-gray-700 text-left mb-6">
        Retail Sales
      </h2>

      <SeriesChart
        series={series}
        title={{ text: chartTitle }}
        subtitle={{ text: chartSubtitle }}
        legend={{ enabled: false }}
      />
    </div>
  );
}
