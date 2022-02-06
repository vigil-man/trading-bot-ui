import { DefaultTooltipContent } from 'recharts/lib/component/DefaultTooltipContent'

const IndicatorRecordTooltip = props => {

  const getOutputsView = (outputs) => outputs.map(output => <dd>{output.name}: {output.value}</dd>)

  const getRecordView = (record) => (
    <dl>
      <dt>Indicator: {record.indicatorName}</dt>
      <dd>Score: {record.scoreType}</dd>
      {getOutputsView(record.outputs)}
    </dl>
  )

  const populateIndicatorRecords = (indicatorRecords) => {
    return indicatorRecords.map(record => getRecordView(record))
  }

  if (props.active && props.payload && props.payload.length) {

    const payload = props.payload[0].payload

    const newPayload = [
      {
        name: 'Indicators data',
        value: populateIndicatorRecords(payload.indicatorRecords),
      },
      {
        name: 'Price',
        value: payload.price
      },
      ...props.payload
    ]
    return <DefaultTooltipContent {...props} payload={newPayload}/>
  }
  return null
}

export default IndicatorRecordTooltip