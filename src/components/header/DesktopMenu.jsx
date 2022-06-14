import React from 'react'
import { Grid, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const DesktopMenu = () =>
  <Grid centered padded>
    <Menu size='huge' pointing>
      <Menu.Item as={Link} to='/'>
        Overview
      </Menu.Item>
      <Menu.Item as={Link} to='/history'>
        Trading history
      </Menu.Item>
      <Menu.Item as={Link} to='/simulation'>
        Simulation
      </Menu.Item>
      <Menu.Item as={Link} to='/stats'>
        Historical stats
      </Menu.Item>
      <Menu.Item as={Link} to='/graphs'>
        Graphs
      </Menu.Item>
    </Menu>
  </Grid>

export default DesktopMenu
