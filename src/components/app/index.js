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

  // Region selected by user
  const [regionSelected, setRegionSelected] = useState('')

  // Call the api the app starts
  useEffect(() => {
    restApi('/all')
      .then(response => {
        const { data } = response
        setCountries(data)
      })
      .catch(error => console.error(error))
  }, [countries, regionSelected])

  // Save user's search term
  const [userInput, setUserInput] = useState('')

  // Let user type in the country name
  const searchCountry = e => {
    setUserInput(e.target.value)
  }

  const selectedRegion = e => {
    setRegionSelected(e.target.textContent)
  }

  // Let user toggle between light & dark mode
  const toggleTheme = () => {
    setIsLightMode(!isLightMode)
    localStorage.setItem('isLightMode', !isLightMode)
  }

  // Find which countries are match with userInput
  const filteredCountries = countries.filter(country => {
    return country.name.toLowerCase().includes(userInput.toLowerCase())
  })

  // Return a new array with country filtered by region
  const filteredRegion = countries.filter(country => {
    return country.region.toLowerCase().includes(regionSelected.toLowerCase())
  })

  // Checking what countries to be displayed on screen
  const renderedCountries = array => {
    if (array === countries) {
      return (
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
      )
    } else if (array === filteredCountries) {
      return (
        <Styled.Countries>
          {filteredCountries.map(country => {
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
      )
    } else if (array === filteredRegion) {
      return (
        <Styled.Countries>
          {filteredRegion.map(country => {
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
      )
    }
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
        <SearchBar searchCountry={searchCountry} />
        <FilterRegion selectedRegion={selectedRegion} />
        {userInput
          ? renderedCountries(filteredCountries)
          : regionSelected
          ? renderedCountries(filteredRegion)
          : renderedCountries(countries)}
      </div>
    </ThemeProvider>
  )
}

export default App
