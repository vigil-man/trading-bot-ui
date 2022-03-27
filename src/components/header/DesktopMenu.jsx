import React from 'react'
import { Input, Menu, MenuMenu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { selectBotUrl } from '../../redux/config/config.selectors'
import { updateBotUrl } from '../../redux/config/config.slice'

const DesktopMenu = () => {
  const botUrl = useSelector(selectBotUrl)
  const dispatch = useDispatch()
  return (
    <Menu size='huge' pointing>
      <MenuMenu position='right'>
        <Menu.Item as={Link} to='/'>
          Overview
        </Menu.Item>
        <Menu.Item as={Link} to='/history'>
          History
        </Menu.Item>
        <Menu.Item as={Link} to='/simulation'>
          Simulation
        </Menu.Item>
        <Menu.Item as={Link} to='/graphs'>
          Graphs
        </Menu.Item>
      </MenuMenu>
      <Menu.Item position='right'>
        <Input
          label='Bot URL'
          defaultValue={botUrl}
          onChange={({ target: { value } }) => dispatch(updateBotUrl(value))}
        />
      </Menu.Item>
    </Menu>
  )
}

export default DesktopMenu
