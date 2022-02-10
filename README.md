# Usage

Create .env file with properties described in the properties section below and then run
`npm start`
___

# Properties

___
These are mostly backend endpoints:

- REACT_APP_BOT_HOST - trading bot host
- REACT_APP_GRAPH_ENDPOINT - fetches graph data (price and indicators history) for trading pair
- REACT_APP_TRADING_HISTORY_ENDPOINT - fetches trading history for all pairs
- REACT_APP_TRADING_HISTORY_SIMULATION_ENDPOINT - fetches trading history for pairs involved into previous simulation
- REACT_APP_ACTIVITY_SELL_PAIR_ENDPOINT - activates sell bought pairs process
- REACT_APP_ACTIVITY_GET_SYMBOLS_ENDPOINT - fetches all trading pair symbols list
- REACT_APP_ACTIVITY_GET_SUMMARY_ENDPOINT- fetches trading activity summary
- REACT_APP_TOGGLE_TRADING_ENDPOINT - toggles trading for all pairs
- REACT_APP_SIMULATION_START_ENDPOINT - starts simulation for chosen trading pair symbols