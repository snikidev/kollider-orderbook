import DepthChart from "./components/DepthChart/DepthChart";
import { useOrderbook } from "./hooks";
import { prepareData } from "./utils";

function App() {
  const orderbookData = useOrderbook();
  const bids = prepareData(orderbookData.bids);
  const asks = prepareData(orderbookData.asks);

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
      <DepthChart bids={bids} asks={asks} />
    </div>
  );
}

export default App;
