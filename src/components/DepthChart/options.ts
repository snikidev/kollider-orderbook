import colors from "tailwindcss/colors";

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
    distance: 1,
  },
  shadow: false,
};

export default options;
