import Headroom from 'react-headroom'
import DesktopMenu from './DesktopMenu'

const Header = () =>
  <Headroom
    upTolerance={10}
    downTolerance={10}
    style={{ zIndex: '20' }}
  >
    <DesktopMenu />
  </Headroom>

export default Header
