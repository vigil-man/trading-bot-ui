import { DefaultTooltipContent } from 'recharts/lib/component/DefaultTooltipContent'

const IndicatorRecordTooltip = props => {
  const getOutputsView = outputs =>
    <dl>{outputs.map(
      output => <dd key={output.name}>{output.name}: {output.value}</dd>
    )}
    </dl>

  if (props.active && props.payload && props.payload.length) {
    const payload = props.payload[0].payload
    const newPayload = payload.indicatorName
      ? [
          {
            name: 'Indicator name',
            value: payload.indicatorName
          },
          {
            name: 'Action',
            value: payload.tradingAction
          },
          {
            name: 'Outputs',
            value: getOutputsView(payload.outputs)
          },
          ...props.payload
        ]
      : [...props.payload]

    if (payload.price) {
      newPayload.push(
        {
          name: 'Price',
          value: payload.price
        }
      )
    }
    return <DefaultTooltipContent {...props} payload={newPayload} />
  }
  return null
}

export default IndicatorRecordTooltip
