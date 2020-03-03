import React from 'react'
import { ThemeProvider } from 'styled-components'
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import '../../utils/fontawesome'
import restApi from '../../apis'

// Styles
import GlobalStyles from '../../styles/GlobalStyles'
import colors from '../../styles/Colors'
import * as Styled from './styles'

// Components
import Header from '../header'
import SearchBar from '../searchBar'
import FilterRegion from '../filterRegion'
import Country from '../country'
import BackButton from '../backButton'
import CountryDetail from '../countryDetail'
class App extends React.Component {
  state = {
    countries: [],
    userInput: '',
    regionSelected: '',
    countrySelected: '',
    isLightMode: true
  }

  componentDidMount() {
    // Implement local storage to persist user selected theme
    const localData = localStorage.getItem('isLightMode')

    // Check if the localStorage is available
    localData === 'true'
      ? this.setState({ isLightMode: true })
      : this.setState({ isLightMode: false })

    // Call the api to get all country data
    restApi('/all')
      .then(response => {
        const { data } = response
        this.setState({
          countries: data
        })
      })
      .catch(error => console.error(error))
  }

  componentDidUpdate() {
    console.log(this.state)
  }

  render() {
    // Destructure states
    const {
      countries,
      userInput,
      regionSelected,
      countrySelected,
      isLightMode
    } = this.state

    // Destructure dark & light mode from colors
    const { darkMode, lightMode } = colors

    // Let user type in the country name
    const searchCountry = e => {
      this.setState({
        userInput: e.target.value
      })
    }

    // Region selected by user
    const selectedRegion = e => {
      this.setState({
        regionSelected: e.target.textContent
      })
    }

    // A specific country selected by user
    const selectedCountry = e => {
      // console.log('changing state')
      this.setState(
        {
          countrySelected: e.target.nextSibling.textContent
        },
        () => {
          console.log('new state', this.state.countrySelected)
        }
      )
    }

    // Let user toggle between light & dark mode
    const toggleTheme = () => {
      this.setState({
        isLightMode: !isLightMode
      })
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

    const filteredSelectedCountry = countries.filter(country => {
      return country.name.toLowerCase().includes(countrySelected.toLowerCase())
    })

    // Checking what countries to be displayed on screen
    const renderedCountries = array => {
      if (array === countries) {
        return (
          <Styled.Countries>
            {countries.map(country => {
              return (
                <Country
                  selectedCountry={selectedCountry}
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
                  selectedCountry={selectedCountry}
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
                  selectedCountry={selectedCountry}
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
      } else if (array === filteredSelectedCountry) {
        return (
          <Styled.Countries>
            {filteredSelectedCountry.map(country => {
              return (
                <Country
                  selectedCountry={selectedCountry}
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
          <BackButton />
          <CountryDetail />
          <FilterRegion selectedRegion={selectedRegion} />
          {userInput
            ? renderedCountries(filteredCountries)
            : regionSelected
            ? renderedCountries(filteredRegion)
            : countrySelected
            ? renderedCountries(filteredSelectedCountry)
            : renderedCountries(countries)}
        </div>
      </ThemeProvider>
    )
  }
}
export default App
