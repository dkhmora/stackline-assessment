import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { SeriesData } from "../types";
import { memo } from "react";

interface SeriesChartProps {
  series: SeriesData[];
  title?: Highcharts.TitleOptions;
  subtitle?: Highcharts.SubtitleOptions;
  yAxis?: Highcharts.YAxisOptions;
  xAxis?: Highcharts.XAxisOptions;
  plotOptions?: Highcharts.PlotOptions;
  legend?: Highcharts.LegendOptions;
}

export default memo(function SeriesChart({
  series,
  title,
  subtitle,
  yAxis,
  xAxis,
  plotOptions,
  legend,
}: SeriesChartProps) {
  const options = {
    title: {
      ...title,
    },
    subtitle: {
      ...subtitle,
    },
    yAxis: {
      title: {
        text: "Sales Amount",
      },
      gridLineWidth: 0,
      ...yAxis,
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
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
});
