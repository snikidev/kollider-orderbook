import { forwardRef } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import colors from "tailwindcss/colors";
import options from "./options";

interface Props {
  bids: number[][];
  asks: number[][];
}

const DepthChart = forwardRef(({ bids, asks }: Props, ref) => {
  const seriesOptions = {
    ...options,
    series: [
      {
        name: "Bids",
        data: bids,
        color: colors.green["400"],
      },
      {
        name: "Asks",
        data: asks,
        color: colors.red["400"],
      },
    ],
  };

  return (
    <HighchartsReact
      // @ts-ignore
      ref={ref}
      highcharts={Highcharts}
      options={seriesOptions}
    />
  );
});

export default DepthChart;
