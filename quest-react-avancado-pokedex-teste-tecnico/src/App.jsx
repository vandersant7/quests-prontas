import { Outlet } from 'react-router-dom'
import { Navigation } from './components/Navigation'

function App() {
  return (
    <>
    <h1>Navbar</h1>
      <Navigation />
      <Outlet />
      <h2>Footer</h2>
    </>
  )
}

export default App
