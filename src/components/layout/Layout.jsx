import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

export default function Layout() {
  const { pathname } = useLocation()
  const home = pathname === '/'

  return (
    <div className="site-layout flex min-h-svh flex-col bg-bg text-fg">
      <Header />
      <main className={`relative z-0 flex-1 ${home ? '' : 'pt-20'}`}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
