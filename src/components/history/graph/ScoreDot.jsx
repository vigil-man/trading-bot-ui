import { Dot } from 'recharts'
import { Common, ScoreTypesColor } from '../../../constant'

const ScoreDot = (props) => {
  const { payload: { indicatorRecords } } = props

  // TODO: Support multiple score types
  const scoreType = indicatorRecords?.[0]?.scoreType

  const getCustomDot = (scoreType) => <Dot {...props} strokeWidth={5} stroke={ScoreTypesColor[scoreType]} r={1} />

  return (
    scoreType && scoreType !== Common.neutralScore ? getCustomDot(scoreType) : null
  )
}

export default ScoreDot
