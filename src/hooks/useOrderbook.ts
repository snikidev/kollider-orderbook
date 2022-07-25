import { useState, useEffect } from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";

const useOrderbook = () => {
  const [orderbookBids, setOrderbookBids] = useState({ bids: [], asks: [] });
  const { sendJsonMessage, lastJsonMessage, readyState } = useWebSocket(
    // @ts-ignore
    process.env.REACT_APP_WS_API_URL
  );

  const connectionStatus = {
    [ReadyState.CONNECTING]: "Connecting",
    [ReadyState.OPEN]: "Open",
    [ReadyState.CLOSING]: "Closing",
    [ReadyState.CLOSED]: "Closed",
    [ReadyState.UNINSTANTIATED]: "Uninstantiated",
  }[readyState];

  useEffect(() => {
    if (lastJsonMessage !== null) {
      // @ts-ignore
      const { data } = lastJsonMessage;
      if (typeof data !== "string") {
        const { bids, asks } = data;
        console.log(data);
        const formattedBids = Object.keys(bids).map((key) => [
          bids[key],
          parseInt(key),
        ]);
        const formattedAsks = Object.keys(asks).map((key) => [
          asks[key],
          parseInt(key),
        ]);
        setOrderbookBids((prev) => ({
          // @ts-ignore
          bids: prev.bids.concat(formattedBids),
          // @ts-ignore
          asks: prev.asks.concat(formattedAsks),
        }));
      }
    }
  }, [lastJsonMessage, setOrderbookBids]);

  useEffect(() => {
    if (sendJsonMessage) {
      sendJsonMessage({
        type: "subscribe",
        // @ts-ignore
        channels: ["orderbook_level2"],
        // TODO: make those passable as props
        // @ts-ignore
        symbols: ["BTCUSD.PERP"],
      });
    }
  }, []);

  return orderbookBids;
};

export default useOrderbook;
