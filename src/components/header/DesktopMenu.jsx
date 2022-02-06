import React from 'react'
import { Input, Menu, MenuMenu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { updateBotPort } from '../../redux/ports/posts.slice'
import { useDispatch, useSelector } from 'react-redux'
import { selectBotPort } from '../../redux/ports/ports.selectors'

const DesktopMenu = () => {
  const botPort = useSelector(selectBotPort)
  const dispatch = useDispatch()
  return (
    <Menu size="huge" pointing>
      <MenuMenu position={'right'}>
        <Menu.Item as={Link} to="/">
          Overview
        </Menu.Item>
        <Menu.Item as={Link} to="/history">
          History
        </Menu.Item>
        <Menu.Item as={Link} to="/simulation">
          Simulation
        </Menu.Item>
        <Menu.Item as={Link} to="/graphs">
          Graphs
        </Menu.Item>
      </MenuMenu>
      <Menu.Item position={'right'}>
        <Input
          label="Bot port"
          defaultValue={botPort}
          onChange={({ target: { value } }) => dispatch(updateBotPort(value))}
        />
      </Menu.Item>
    </Menu>
  )
}

export default DesktopMenu