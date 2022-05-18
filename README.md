# Features

- [All pairs trading history view](https://github.com/vigil-man/trading-bot-ui/wiki/History)
    - Overall trading statistics
    - Trading pairs table with useful stats per symbol
- [Single pair history view](https://github.com/vigil-man/trading-bot-ui/wiki/PairHistory)
    - Price graph with mapped indicator data
    - Table with all trades made and their results
- [Trading state overview](https://github.com/vigil-man/trading-bot-ui/wiki/Overview)
    - Trading state summary
    - Trading pairs state table
    - Ability to sell all bought symbols, stop trading, refresh summary
- [Trading simulation view](https://github.com/vigil-man/trading-bot-ui/wiki/Simulation)
    - Ability to choose pairs for simulation
    - Ability to start and view simulation results in form of trading history
- [Trading profit graph](https://github.com/vigil-man/trading-bot-ui/wiki/Profit)
- Multiple trading bot instances support

# Usage

Create .env file with variables described in the section below and then run
`npm start`

# Environment Variables

- REACT_APP_CORE_BASE_URL - core app URL
- REACT_APP_STRATEGY_BASE_URL - strategy app URL