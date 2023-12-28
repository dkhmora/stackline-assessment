import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { ProductSale } from "../types";

type SeriesData = {
  name: "Wholesale Data" | "Retail Data";
  color: string;
  type: string;
  data: [number, number][];
};

export default function SeriesChart({ sales }: { sales: ProductSale[] }) {
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

  const options = {
    title: {
      text: "Monthly Sales Data, 2017",
    },
    subtitle: {
      text: "Source: Nutribullet",
    },
    yAxis: {
      title: {
        text: "Sales Amount",
      },
      gridLineWidth: 0,
    },
    xAxis: {
      type: "datetime",
      dateTimeLabelFormats: {
        // don't display the dummy year
        month: "%e. %b",
        year: "%b",
      },
      title: {
        text: "Date",
      },
    },
    legend: {
      layout: "vertical",
      align: "right",
      verticalAlign: "middle",
    },
    plotOptions: {
      series: {
        label: {
          connectorAllowed: false,
        },
        // don't show markers on the line
        marker: {
          enabled: false,
        },
      },
    },
    series,
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            legend: {
              layout: "horizontal",
              align: "center",
              verticalAlign: "bottom",
            },
          },
        },
      ],
    },
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
}
