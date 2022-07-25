# Kollider Orderbook

## Task

Build an orderbook component that consumes the Kollider L2 orderbook data.

Kollider Websocket Url: wss://api.kollider.xyz/v1/ws/
Kollider API docs: https://docs-api.kollider.xyz

## Overview

The goal is to build an orderbook component that consumes L2 orderbook data from the Kollider websocket API.

You can subscribe to the orderbook data through following WS command

```js
{“type”: “subscribe”, “channels”: [“orderbook_level2”], “symbol”: [<symbol>]}
```

## Bonus

Enable the user to switch between different symbols.

## The app

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), TS and TailwindCSS.
