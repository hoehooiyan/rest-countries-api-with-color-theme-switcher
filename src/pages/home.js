import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import Layout from '../components/Layout'
import Loader from '../components/Loader'
import SearchBar from '../components/SearchBar'
import FilterRegion from '../components/FilterRegion'
import CountryContainer from '../components/CountryContainer'
import Country from '../components/Country'
import api from '../api'

const StyledOuterContainer = styled.div`
  width: 100%;
`

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: var(--xl);

  @media screen and (min-width: 650px) {
    flex-direction: row;
    justify-content: space-between;
    margin: 0 auto;
  }
`

const Home = () => {
  const [countries, setCountries] = useState([])
  const [userInput, setUserInput] = useState('')
  const [searchedCountries, setSearchedCountries] = useState([])
  const [regionSelection, setRegionSelection] = useState('')
  const [filteredCountries, setFilteredCountries] = useState([])

  // make an api call to get all the countries data
  useEffect(() => {
    api('/all')
      .then((response) => {
        const { data } = response
        setCountries(data)
        // setSearchedCountries(data)
        // setFilteredCountries(data)
      })
      .catch((error) => console.error(error))
  }, [])

  const renderCountries = (arr) => {
    return arr.map((item, i) => {
      const { flag, name, population, region, capital } = item
      return (
        <Country
          key={i}
          flag={flag}
          name={name}
          population={population}
          region={region}
          capital={capital}
        />
      )
    })
  }

  /**
   * after getting the user input
   * start the filtering process
   */
  const searchCountry = (e) => {
    setUserInput(e.target.value.toLowerCase())
  }

  useEffect(() => {
    if (userInput !== '' && countries.length !== 0) {
      setSearchedCountries(
        countries.filter(({ name }) => {
          return name.toLowerCase().includes(userInput)
        })
      )
    }
  }, [countries, userInput])

  /**
   * detect the region selected by the user
   * display according to the selected region
   */
  const filterCountry = (e) => {
    setRegionSelection(e.target.textContent.toLowerCase())
  }

  useEffect(() => {
    if (regionSelection !== '' && countries.length !== 0) {
      setFilteredCountries(
        countries.filter(({ region }) => {
          return region.toLowerCase() === regionSelection
        })
      )
    }
  }, [countries, regionSelection])

  return (
    <Layout>
      <StyledOuterContainer>
        <StyledContainer>
          <SearchBar searchCountry={searchCountry} />
          <FilterRegion selectedRegion={filterCountry} />
        </StyledContainer>

        <CountryContainer>
          {countries.length === 0 && <Loader />}
          {countries.length !== 0 && userInput
            ? renderCountries(searchedCountries)
            : regionSelection
            ? renderCountries(filteredCountries)
            : renderCountries(countries)}
        </CountryContainer>
      </StyledOuterContainer>
    </Layout>
  )
}

export default Home
