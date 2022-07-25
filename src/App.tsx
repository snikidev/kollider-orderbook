import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import colors from "tailwindcss/colors";
import { useOrderbook } from "./hooks";

function App() {
  const orderbookBids = useOrderbook();
  console.log(orderbookBids);
  const options = {
    credits: {
      enabled: false,
    },
    chart: {
      type: "area",
      zoomType: "xy",
      backgroundColor: colors.slate["900"],
      borderWidth: 0,
      style: {
        "font-family": "Lato, sans-serif",
      },
    },
    title: {
      text: "",
    },
    xAxis: {
      minPadding: 0,
      maxPadding: 0,
      title: {
        text: "Price",
        style: {
          color: colors.white,
        },
      },
      labels: {
        style: {
          color: colors.white,
        },
      },
    },
    yAxis: [
      {
        minorGridLineWidth: 0,
        gridLineWidth: 0,
        title: null,
        lineWidth: 1,
        tickWidth: 1,
        tickLength: 5,
        tickPosition: "outside",
        tickColor: colors.white,
        labels: {
          style: {
            color: colors.white,
          },
          align: "right",
        },
      },
      {
        opposite: true,
        linkedTo: 0,
        lineWidth: 1,
        gridLineWidth: 0,
        title: null,
        tickWidth: 1,
        tickLength: 5,
        tickPosition: "outside",
        tickColor: colors.white,
        labels: {
          style: {
            color: colors.white,
          },
          align: "left",
        },
      },
    ],
    legend: {
      enabled: false,
    },
    plotOptions: {
      area: {
        fillOpacity: 0.2,
        lineWidth: 1,
        step: "center",
      },
    },
    tooltip: {
      headerFormat: '<span class="bg-white">Price: {point.key}</span><br/>',
      valueDecimals: 2,
      backgroundColor: colors.white,
      borderWidth: 0,
      shadow: false,
    },
    shadow: false,
    series: [
      {
        name: "Bids",
        data: orderbookBids.bids,
        color: colors.green["400"],
      },
      {
        name: "Asks",
        data: orderbookBids.asks,
        color: colors.red["400"],
      },
    ],
  };
  return (
    <div className="container mx-auto px-4 py-10 space-y-6">
      <img
        src="/kollider_logo_gradient.png"
        alt="Kollider logo"
        className="h-7 mx-auto"
      />
      <h1 className="text-white text-center text-xl font-semibold">
        Orderbook for BTC-USD
      </h1>
      <HighchartsReact highcharts={Highcharts} options={options} />;
    </div>
  );
}

export default App;
