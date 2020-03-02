import React, { useState, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'

import '../../icon/fontawesome'
import restApi from '../../apis/api'

// Styles
import GlobalStyles from '../../styles/GlobalStyles'
import colors from '../../styles/Colors'
import * as Styled from './styles'

// Components
import Header from '../header'
import SearchBar from '../searchBar'
import FilterRegion from '../filterRegion'
import Country from '../country'

const App = () => {
  // Implement local storage to persist user selected theme
  const localData = localStorage.getItem('isLightMode')
  const [isLightMode, setIsLightMode] = useState(
    localData === 'true' ? true : false
  )

  // Save all countries in the array
  const [countries, setCountries] = useState([])

  // Call the api the app starts
  useEffect(() => {
    restApi('/all')
      .then(response => {
        const { data } = response
        setCountries(data)
      })
      .catch(error => console.error(error))
  }, [])

  // Let user toggle between light & dark mode
  const toggleTheme = e => {
    setIsLightMode(!isLightMode)
    localStorage.setItem('isLightMode', !isLightMode)
  }

  // Destructure dark & light mode from colors
  const { darkMode, lightMode } = colors

  return (
    <ThemeProvider theme={isLightMode ? lightMode : darkMode}>
      <div>
        <GlobalStyles />
        {isLightMode ? (
          <Header
            icon='moon'
            toggleText='Dark Mode'
            toggleTheme={toggleTheme}
          />
        ) : (
          <Header
            icon='sun'
            toggleText='Light Mode'
            toggleTheme={toggleTheme}
          />
        )}
        <SearchBar />
        <FilterRegion />
        <Styled.Countries>
          {countries.map(country => {
            return (
              <Country
                key={country.name}
                flag={country.flag}
                name={country.name}
                population={country.population}
                region={country.region}
                capital={country.capital}
              />
            )
          })}
        </Styled.Countries>
      </div>
    </ThemeProvider>
  )
}

export default App
