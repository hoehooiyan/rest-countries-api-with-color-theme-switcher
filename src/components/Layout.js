import React, { useEffect, useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'

import Header from './Header'
import Footer from './Footer'
import GlobalStyles from '../styles/globalStyles'
import colors from '../styles/colors'
import '../utils/fontawesome'

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
`

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  min-height: 100vh;
`

const Layout = ({ children }) => {
  const { darkMode, lightMode } = colors
  const [isLightMode, setTheme] = useState(true)

  useEffect(() => {
    // implement localStorage to persist user selected theme
    const localData = localStorage.getItem('isLightMode')

    // check if the localStorage is available
    localData === true ? setTheme(false) : setTheme(true)
  }, [])

  const toggleTheme = () => {
    setTheme(!isLightMode)
    localStorage.setItem('isLightMode', !isLightMode)
  }

  return (
    <ThemeProvider theme={isLightMode ? lightMode : darkMode}>
      <GlobalStyles />
      <StyledContainer>
        <StyledContent>
          <Header
            icon={isLightMode ? 'moon' : 'sun'}
            toggleText={isLightMode ? 'Dark Mode' : 'Light Mode'}
            toggleTheme={toggleTheme}
          />
          {children}
        </StyledContent>
        <Footer />
      </StyledContainer>
    </ThemeProvider>
  )
}

export default Layout
