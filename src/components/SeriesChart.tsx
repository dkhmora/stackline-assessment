import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { SeriesData } from "../types";
import "../highcharts.css";
import accessibilityModule from "highcharts/modules/accessibility";
accessibilityModule(Highcharts);

interface SeriesChartProps {
  series: SeriesData[];
  title?: Highcharts.TitleOptions;
  subtitle?: Highcharts.SubtitleOptions;
  yAxis?: Highcharts.YAxisOptions;
  xAxis?: Highcharts.XAxisOptions;
  plotOptions?: Highcharts.PlotOptions;
  legend?: Highcharts.LegendOptions;
  additionalChartProps?: Highcharts.Options;
}

export default function SeriesChart({
  series,
  title,
  subtitle,
  yAxis,
  xAxis,
  plotOptions,
  legend,
  additionalChartProps,
}: SeriesChartProps) {
  const options = {
    chart: {
      height: "500px",
    },
    title: {
      ...title,
    },
    subtitle: {
      ...subtitle,
    },
    yAxis: {
      gridLineWidth: 0,
      labels: {
        style: {
          color: "#aeb2c7",
        },
      },
      ...yAxis,
    },
    xAxis: {
      type: "datetime",
      dateTimeLabelFormats: {
        // don't display the dummy year
        month: "%b",
        year: "%b",
      },
      title: {
        text: "Date",
      },
      labels: {
        style: {
          color: "#aeb2c7",
        },
      },
      ...xAxis,
    },
    legend: {
      layout: "vertical",
      align: "right",
      verticalAlign: "middle",
      ...legend,
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
      ...plotOptions,
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
    ...additionalChartProps,
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
}
