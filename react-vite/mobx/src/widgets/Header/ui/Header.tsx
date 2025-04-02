import { RoutePath } from '@/shared/const'
import { NavLink } from 'react-router'

export function Header() {
  return (
    <header>
      <NavLink to={RoutePath.home}>Home</NavLink>
      <NavLink to={RoutePath.about}>About</NavLink>
    </header>
  )
}
