import { Outlet } from 'react-router-dom'
import { Navigation } from './components/Navigation'
import { useContext } from 'react'
import { PokemonContext } from './context/PokemonContext'

function App() {
  const { theme } = useContext(PokemonContext)
  return (
    <div style={{backgroundColor: theme.background, color: theme.color}}>
      <Navigation />
      <Outlet />
    </div>
  )
}

export default App
