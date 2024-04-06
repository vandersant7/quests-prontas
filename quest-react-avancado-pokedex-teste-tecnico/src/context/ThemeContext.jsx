import { createContext, useState} from "react";
import { lightTheme, darkTheme } from '../globalStyles/theme'

export const ThemeContext = createContext(null)

export const ThemeProvider = ({ children }) => {
    const [selectTheme, setSelectTheme] = useState(localStorage.getItem('theme' || lightTheme))

    const updateTheme = theme === 'lightTheme' ? 'darkTheme' : 'lightTheme'
    setSelectTheme(updateTheme)
    localStorage.setItem('theme', updateTheme)

    const [ theme, setTheme ] = useState(lightTheme)
    const [ changeButton, setChangeButton ] = useState('light')

    const toggleTheme = () => {
      if (theme === lightTheme) {
        setTheme(darkTheme);
        setChangeButton('dark')
      } else {
        setTheme(lightTheme);
        setChangeButton('light')
      }
    }
    
    
    return (
        <ThemeContext.Provider value={{theme, changeButton, toggleTheme}}>
            { children }
        </ThemeContext.Provider>
    )
}