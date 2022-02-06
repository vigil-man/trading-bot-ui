import { Dot } from 'recharts'
import { Constants, ScoreTypesColorMap } from '../../../constants'

const ScoreDot = (props) => {
  const { payload: { indicatorRecords } } = props

  //TODO: Support multiple score types
  const scoreType = indicatorRecords?.[0]?.scoreType

  const getCustomDot = (scoreType) => <Dot {...props} strokeWidth={5} stroke={ScoreTypesColorMap[scoreType]} r={1}/>

  return (
    scoreType && scoreType !== Constants.neutralScore ? getCustomDot(scoreType) : null
  )
}

export default ScoreDot