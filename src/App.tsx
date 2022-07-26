import { useState, useRef } from "react";
import { Option } from "react-dropdown";
import { BTCIcon, DepthChart, Dropdown, EtherIcon } from "./components";
import { useOrderbook, CurrencyPair } from "./hooks";
import { prepareData } from "./utils";

function App() {
  const [selectedPair, setSelectedPair] = useState<CurrencyPair>(
    CurrencyPair.BTCUSD
  );
  const chartRef = useRef(null);
  const orderbookData = useOrderbook(selectedPair);
  const bids = prepareData(orderbookData.bids);
  const asks = prepareData(orderbookData.asks);

  const options = [
    { value: CurrencyPair.BTCUSD, label: "BTCUSD.PERP" },
    { value: CurrencyPair.ETHUSD, label: "ETHUSD.PERP" },
  ];

  const handleChange = (option: Option) => {
    setSelectedPair(option.value as CurrencyPair);
    if (chartRef.current) {
      const { chart } = chartRef.current;
      // @ts-ignore
      chart.redraw();
    }
  };

  return (
    <div className="container mx-auto px-4 py-10 space-y-16 relative">
      <img
        src="/kollider_logo_gradient.png"
        alt="Kollider logo"
        className="h-7 mx-auto"
      />
      <h1 className="text-white text-center text-xl font-semibold flex items-center justify-center">
        <span>Orderbook for</span>
        <Dropdown
          options={options}
          onChange={handleChange}
          defaultOption={selectedPair}
          Icon={selectedPair === CurrencyPair.BTCUSD ? BTCIcon : EtherIcon}
        />
      </h1>
      <DepthChart ref={chartRef} bids={bids} asks={asks} />
    </div>
  );
}

export default App;
