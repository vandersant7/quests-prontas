import { Outlet } from 'react-router-dom'
import { Header } from './components/Header'
import { ThemeContext } from './context/ThemeContext'
import { useContext } from 'react'

function App() {
  const { theme } = useContext(ThemeContext)
  return (
    <div style={{backgroundColor: theme.colors.background, color: theme.colors.color}}>
      <Header />
      <Outlet />
    </div>
  )
}

export default App
