import { useState, useEffect } from "react";
import useWebSocket from "react-use-websocket";

const useOrderbook = () => {
  const [orderbookData, setOrderbookData] = useState({ bids: {}, asks: {} });
  const { sendJsonMessage, lastJsonMessage } = useWebSocket(
    // @ts-ignore
    process.env.REACT_APP_WS_API_URL
  );

  useEffect(() => {
    if (lastJsonMessage !== null) {
      // @ts-ignore
      const { data } = lastJsonMessage;
      if (typeof data !== "string") {
        const { bids, asks } = data;
        setOrderbookData((prev) => ({
          bids: {
            ...prev.bids,
            ...bids,
          },
          asks: {
            ...prev.asks,
            ...asks,
          },
        }));
      }
    }
  }, [lastJsonMessage, setOrderbookData]);

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
  }, [sendJsonMessage]);

  return orderbookData;
};

export default useOrderbook;
