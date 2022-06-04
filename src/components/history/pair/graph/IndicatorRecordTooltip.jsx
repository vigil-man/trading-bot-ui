import { DefaultTooltipContent } from 'recharts/lib/component/DefaultTooltipContent'

const IndicatorRecordTooltip = props => {
  const getOutputsView = outputs =>
    <dl>
      {outputs.map(
        output => <dd key={output.name}>{output.name}: {output.value}</dd>
      )}
    </dl>

  const getStrategyPayload = ({ strategyName, tradingAction, value, outputs }) =>
    [
      {
        name: 'Indicator name',
        value: strategyName
      },
      {
        name: 'Action',
        value: tradingAction
      },
      {
        name: 'Value',
        value: value
      },
      {
        name: 'Outputs',
        value: getOutputsView(outputs)
      },
      ...props.payload
    ]

  if (props.active && props.payload && props.payload.length) {
    const payload = props.payload[0].payload
    const newPayload = payload.strategyName
      ? getStrategyPayload(payload)
      : [...props.payload]
    if (payload.openPrice) {
      newPayload.push(
        {
          name: 'Price',
          value: payload.openPrice
        }
      )
    }
    return <DefaultTooltipContent {...props} payload={newPayload} />
  }
  return null
}

export default IndicatorRecordTooltip
