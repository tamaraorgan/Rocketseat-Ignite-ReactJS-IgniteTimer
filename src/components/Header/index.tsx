import { NavLink } from 'react-router-dom'
import { Scroll, Timer } from 'phosphor-react'

import Logo from '../../assets/ignite-logo.svg'

import { HeaderContainer } from './styles'

function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} alt='' />
      <nav>
        <NavLink to='/' title='Timer'>
          <Timer size={22} />
        </NavLink>
        <NavLink to='/history' title='Histórico'>
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}

export { Header }
