import { useContext } from 'react'
import { PokemonContext } from '../../context/PokemonContext'
import ReactSwitch from 'react-switch'
import { themes } from '../../globalStyles/theme'

export const ThemeTogglerButton = () => {
  const { theme, setTheme } = useContext(PokemonContext)

  const handleToggleTheme = () => {
    setTheme(theme === themes.light ? themes.dark : themes.light)
  }

  return <ReactSwitch 
  onChange={handleToggleTheme} 
  checked={theme === themes.dark} 
  onColor='#333'
  offColor='#ccc'
  checkedIcon={false}
  uncheckedIcon={false}
  />
  
}
