import { Outlet } from 'react-router-dom'
import { LayoutContiner } from './styles'
import { Header } from '../../components/Header'

export function DefaultLayout() {
  return (
    <LayoutContiner>
      <Header />
      <Outlet />
    </LayoutContiner>
  )
}
