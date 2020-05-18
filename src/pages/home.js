import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import Layout from '../components/Layout'
import Loader from '../components/Loader'
import SearchBar from '../components/SearchBar'
import FilterRegion from '../components/FilterRegion'
import CountryContainer from '../components/CountryContainer'
import Country from '../components/Country'
import {
  StyledPaginationContainer,
  StyledNavigateButton,
  ShowCurrent,
  NextPage,
  PreviousPage,
} from '../components/Pagination'
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
  const [currentPage, setCurrentPage] = useState(1)

  /**
   * @reference: Pagination in React
   * https://codepen.io/PiotrBerebecki/pen/pEYPbY?editors=0010
   */
  const countryPerPage = 8
  const totalPages = Math.ceil(countries.length / countryPerPage)
  const isFirst = 1
  const isLast = totalPages

  // logic for displaying current countries
  const indexOfLastCountry = currentPage * countryPerPage
  const indexOfFirstCountry = indexOfLastCountry - countryPerPage
  const currentCountries = countries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  )

  const renderCountries = currentCountries.map(
    ({ flag, name, population, region, capital }, i) => {
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
    }
  )

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1)
  }

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1)
  }

  // ?fields=flag;name;population;region;capital;nativeName;subRegion;topLevelDomain;currencies;languages;borders

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

        <CountryContainer>
          {countries.length === 0 && <Loader />}
          {countries.length !== 0 && renderCountries}
          {/* {countries.length !== 0 && console.log(countries)} */}
        </CountryContainer>

        {countries.length !== 0 && (
          <StyledPaginationContainer>
            <ShowCurrent current={currentPage} total={totalPages} />
            <StyledNavigateButton>
              {currentPage === isFirst ? null : (
                <PreviousPage handlePreviousPage={handlePreviousPage} />
              )}
              {currentPage === isLast ? null : (
                <NextPage handleNextPage={handleNextPage} />
              )}
            </StyledNavigateButton>
          </StyledPaginationContainer>
        )}
      </StyledOuterContainer>
    </Layout>
  )
}

export default Home
