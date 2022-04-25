import { Checkbox, Dimmer, DimmerDimmable, Loader } from 'semantic-ui-react'

const ActionToggle = ({ clickHandler, payload, isLoading, toggled, label }) => {
  return (
    <DimmerDimmable blurring dimmed={isLoading}>
      <Dimmer active={isLoading} inverted>
        <Loader size='mini' />
      </Dimmer>
      <Checkbox
        toggle
        label={label}
        value={toggled}
        onChange={() => clickHandler(payload)}
      />
    </DimmerDimmable>
  )
}

export default ActionToggle
