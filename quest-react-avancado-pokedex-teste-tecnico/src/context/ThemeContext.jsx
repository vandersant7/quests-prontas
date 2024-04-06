import { createContext, useState, useEffect } from 'react'
import { lightTheme, darkTheme } from '../globalStyles/theme'

export const ThemeContext = createContext(null)

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme)
  const [changeButton, setChangeButton] = useState('light')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setTheme(savedTheme === 'dark' ? darkTheme : lightTheme)
      setChangeButton(savedTheme)
    }
  },[])

  const toggleTheme = () => {
    const newTheme = theme === lightTheme ? 'dark' : 'light'
    localStorage.setItem('theme', newTheme)
    setTheme(newTheme === 'dark' ? darkTheme : lightTheme)
    setChangeButton(newTheme)
    // if (theme === lightTheme) {
    //   setTheme(darkTheme)
    //   setChangeButton('dark')
    // } else {
    //   setTheme(lightTheme)
    //   setChangeButton('light')
    // }
  }

  return (
    <ThemeContext.Provider value={{ theme, changeButton, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
