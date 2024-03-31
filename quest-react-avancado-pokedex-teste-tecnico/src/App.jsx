import { Outlet } from 'react-router-dom'
import { Header } from './components/Header'
import { useContext } from 'react'
import { PokemonContext } from './context/PokemonContext'

function App() {
  const { theme } = useContext(PokemonContext)
  return (
    <div style={{backgroundColor: theme.background, color: theme.color}}>
      <Header />
      <Outlet />
    </div>
  )
}

export default App
