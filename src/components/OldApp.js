import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import styled from 'styled-components'

import Header from './Header'
import SearchBar from './SearchBar'
import FilterRegion from './FilterRegion'
import Country from './Country'
import BackButton from './BackButton'
import CountryDetail from './CountryDetail'

import GlobalStyles from '../styles/globalStyles'
import colors from '../styles/colors'

import restApi from '../api'
import '../utils/fontawesome'

const StyledCountries = styled.main`
  display: flex;
  flex-wrap: wrap;
  margin: 3.2rem 5.5rem 6.5rem 5.6rem;
`

const StyledSelectedCountry = styled.div`
  margin: 0 2.7rem 4.4rem 2.8rem;
`

class App extends React.Component {
  state = {
    countries: [],
    userInput: '',
    regionSelected: '',
    countrySelected: '',
    isLightMode: true,
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
      .then((response) => {
        const { data } = response
        this.setState({
          countries: data,
        })
      })
      .catch((error) => console.error(error))
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
      isLightMode,
    } = this.state

    // Destructure dark & light mode from colors
    const { darkMode, lightMode } = colors

    // Let user type in the country name
    const searchCountry = (e) => {
      this.setState({
        userInput: e.target.value,
      })
    }

    // Region selected by user
    const selectedRegion = (e) => {
      this.setState({
        regionSelected: e.target.textContent,
      })
    }

    // A specific country selected by user
    const selectedCountry = (e) => {
      // console.log('changing state')
      this.setState(
        {
          countrySelected: e.target.nextSibling.textContent,
        },
        () => {
          console.log('new state', this.state.countrySelected)
        }
      )
    }

    // Let user toggle between light & dark mode
    const toggleTheme = () => {
      this.setState({
        isLightMode: !isLightMode,
      })
      localStorage.setItem('isLightMode', !isLightMode)
    }

    // Find which countries are match with userInput
    const filteredCountries = countries.filter((country) => {
      return country.name.toLowerCase().includes(userInput.toLowerCase())
    })

    // Return a new array with country filtered by region
    const filteredRegion = countries.filter((country) => {
      return country.region.toLowerCase().includes(regionSelected.toLowerCase())
    })

    const filteredSelectedCountry = countries.filter((country) => {
      return country.name.toLowerCase().includes(countrySelected.toLowerCase())
    })

    // Checking what countries to be displayed on screen
    const renderedCountries = (array) => {
      if (array === countries) {
        return (
          <StyledCountries>
            {countries.map((country) => {
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
          </StyledCountries>
        )
      } else if (array === filteredCountries) {
        return (
          <StyledCountries>
            {filteredCountries.map((country) => {
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
          </StyledCountries>
        )
      } else if (array === filteredRegion) {
        return (
          <StyledCountries>
            {filteredRegion.map((country) => {
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
          </StyledCountries>
        )
      } else if (array === filteredSelectedCountry) {
        return (
          <StyledSelectedCountry>
            <BackButton />
            {filteredSelectedCountry.map((country) => {
              return (
                <CountryDetail
                  key={country.name}
                  flag={country.flag}
                  name={country.name}
                  nativeName={country.nativeName}
                  population={country.population}
                  region={country.region}
                  subRegion={country.subregion}
                  capital={country.capital}
                  topLevelDomain={country.topLevelDomain}
                  currencies={country.currencies.map(
                    (currency) => currency.name
                  )}
                  languages={country.languages.map((language) => language.name)}
                  borders={country.borders}
                />
              )
            })}
          </StyledSelectedCountry>
        )
      }
    }

    return (
      <ThemeProvider theme={isLightMode ? lightMode : darkMode}>
        <div>
          <GlobalStyles />
          <Header
            icon={isLightMode ? 'moon' : 'sun'}
            toggleText='Dark Mode'
            toggleTheme={toggleTheme}
          />
          <SearchBar searchCountry={searchCountry} />
          {/* <BackButton />
          <CountryDetail /> */}
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
