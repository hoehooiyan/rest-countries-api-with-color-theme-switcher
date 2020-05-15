import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import Layout from '../components/Layout'
import SearchBar from '../components/SearchBar'
import FilterRegion from '../components/FilterRegion'
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

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;

    margin: 0 auto;
  }
`

const StyledCountriesWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Home = () => {
  const [countries, setCountries] = useState([])

  // make an api call to get all the countries data
  useEffect(() => {
    api('/all')
      .then((response) => {
        const { data } = response
        setCountries(data)
      })
      .catch((error) => console.error(error))
  }, [])

  return (
    <Layout>
      <StyledOuterContainer>
        <StyledContainer>
          <SearchBar />
          <FilterRegion />
        </StyledContainer>
      </StyledOuterContainer>

      <StyledCountriesWrapper>
        {countries.length === 0 && <p>Loading results...</p>}
        {countries.length !== 0 &&
          countries.map((country, i) => {
            return (
              <Country
                key={i}
                flag={country.flag}
                name={country.name}
                population={country.population}
                region={country.region}
                capital={country.capital}
              />
            )
          })}
      </StyledCountriesWrapper>
    </Layout>
  )
}

export default Home
