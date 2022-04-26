import { Button } from 'semantic-ui-react'

const ActionButton = ({ clickHandler, payload, isLoading, label }) =>
  <Button
    primary
    loading={isLoading}
    onClick={() => clickHandler(payload)}
  >
    {label}
  </Button>

export default ActionButton
