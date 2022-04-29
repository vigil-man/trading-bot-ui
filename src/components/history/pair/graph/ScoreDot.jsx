import { Dot } from 'recharts'
import { NEUTRAL_SCORE, TradingActionColor } from '../../../../constant'

const ScoreDot = (props) => {
  const { payload: { tradingAction } } = props

  const getCustomDot = (tradingAction) =>
    <Dot
      {...props}
      strokeWidth={5} stroke={TradingActionColor[tradingAction]} r={1}
    />

  return (
    tradingAction && tradingAction !== NEUTRAL_SCORE ? getCustomDot(tradingAction) : null
  )
}

export default ScoreDot
