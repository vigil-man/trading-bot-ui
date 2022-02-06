import Headroom from 'react-headroom'
import { useLocation } from 'react-router-dom'
import DesktopMenu from './DesktopMenu'

const Header = () => {
  const location = useLocation()
  return (
    <Headroom
      upTolerance={10}
      downTolerance={10}
      style={{ zIndex: '20' }}
    >
      <DesktopMenu location={location}/>
    </Headroom>
  )
}

export default Header