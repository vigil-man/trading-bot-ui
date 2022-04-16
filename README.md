# Features

- [All pairs trading history view](https://github.com/vigil-man/trading-bot-ui/wiki/History)
    - Overall trading statistics
    - Trading pairs table with useful stats per symbol
- [Single pair history view](https://github.com/vigil-man/trading-bot-ui/wiki/PairHistory)
    - Price graph with mapped indicator data
    - Table with all trades made and their results
- [Trading activity overview](https://github.com/vigil-man/trading-bot-ui/wiki/Overview)
    - Pairs activity state summary
    - Pairs activity table with state for each symbol
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

- REACT_APP_CORE_PORT - port of core app
- REACT_APP_STRATEGY_PORT - port of strategy app