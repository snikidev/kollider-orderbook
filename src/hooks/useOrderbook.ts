import { useState, useEffect } from "react";
import useWebSocket from "react-use-websocket";

export enum CurrencyPair {
  BTCUSD = "BTCUSD.PERP",
  ETHUSD = "ETHUSD.PERP",
}

const useOrderbook = (currencyPair: CurrencyPair) => {
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
  }, [lastJsonMessage, setOrderbookData, currencyPair]);

  useEffect(() => {
    setOrderbookData({ bids: {}, asks: {} });
    if (sendJsonMessage) {
      sendJsonMessage({
        type: "subscribe",
        // @ts-ignore
        channels: ["orderbook_level2"],
        // @ts-ignore
        symbols: [currencyPair],
      });
    }
  }, [sendJsonMessage, currencyPair]);

  return orderbookData;
};

export default useOrderbook;
