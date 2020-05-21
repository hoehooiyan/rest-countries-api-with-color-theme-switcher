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
  const [userInput, setUserInput] = useState('')
  const [searchedCountries, setSearchedCountries] = useState([])
  const [regionSelection, setRegionSelection] = useState('')
  const [filteredCountries, setFilteredCountries] = useState([])
  // const [currentPage, setCurrentPage] = useState(1)
  // const [pagination, setPagination] = useState({
  //   itemPerPage: 8,
  //   currentPage: 1,
  //   firstPage: 1,
  //   lastPage: 0,
  //   totalPage: 0,
  // })

  // const indexOfLastCountry = pagination.currentPage * pagination.itemPerPage
  // const indexOfFirstCountry = indexOfLastCountry - pagination.itemPerPage

  /**
   * @reference: Pagination in React
   * https://codepen.io/PiotrBerebecki/pen/pEYPbY?editors=0010
   */
  // const countryPerPage = 8
  // const totalPages = Math.ceil(countries.length / countryPerPage)
  // const isFirst = 1
  // const isLast = totalPages

  // logic for displaying current countries
  // const indexOfLastCountry = pagination.currentPage * pagination.itemPerPage
  // const indexOfFirstCountry = indexOfLastCountry - pagination.itemPerPage
  // const currentCountries = countries.slice(
  //   indexOfFirstCountry,
  //   indexOfLastCountry
  // )

  const renderit = (arr) => {
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

  // const handleNextPage = () => {
  //   setPagination(pagination.currentPage + 1)
  // }

  // const handlePreviousPage = () => {
  //   setPagination(pagination.currentPage - 1)
  // }

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

  // make an api call to get all the countries data
  useEffect(() => {
    api('/all')
      .then((response) => {
        const { data } = response
        setCountries(data)
        setSearchedCountries(data)
        setFilteredCountries(data)
      })
      .catch((error) => console.error(error))
  }, [])

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
            ? renderit(searchedCountries)
            : regionSelection
            ? renderit(filteredCountries)
            : renderit(countries)}
        </CountryContainer>

        {/* {countries.length !== 0 && (
          <StyledPaginationContainer>
            <ShowCurrent
              current={pagination.currentPage}
              total={pagination.totalPage}
            />
            <StyledNavigateButton>
              {pagination.currentPage === pagination.firstPage ? null : (
                <PreviousPage handlePreviousPage={handlePreviousPage} />
              )}
              {pagination.currentPage === pagination.lastPage ? null : (
                <NextPage handleNextPage={handleNextPage} />
              )}
            </StyledNavigateButton>
          </StyledPaginationContainer>
        )} */}
      </StyledOuterContainer>
    </Layout>
  )
}

export default Home
