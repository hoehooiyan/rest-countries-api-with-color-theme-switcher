import { createContext } from 'react'

const ThemeContext = createContext({
  dark: false,
  toggle: () => {}
})

export const ThemeProvider = props => {
  return (
    <ThemeContext.Provider
      value={{
        dark,
        toggle
      }}>
      {props.children}
    </ThemeContext.Provider>
  )
}
