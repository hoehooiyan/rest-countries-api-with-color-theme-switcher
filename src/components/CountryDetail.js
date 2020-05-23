import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Layout from './Layout'
import BackButton from './BackButton'
import addComma from '../utils/addComma'
import api from '../api'

const StyledCountryDetail = styled.main`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.text};
  padding: 0 1.6rem;
  margin: 0 auto;
  max-width: var(--xl);
  width: 100%;

  @media screen and (min-width: 480px) {
    padding: 0 4rem;
  }

  @media screen and (min-width: 992px) {
    padding: 0 8rem;
  }
`

const StyledButtonWrapper = styled.div`
  /**
    there is an extra margin-bottom defined in header component 
    original margin-top for the button is 40px
    original margin-top - margin-bottom in header
    = 40px - 24px
    = 16px
  */
  margin: 1.6rem 0 6.4rem;
`

const StyledDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 992px) {
    flex-direction: row;
    justify-content: space-between;
    height: 401px;
    width: 100%;
  }
`

const StyledFlag = styled.div`
  margin-bottom: 4.4rem;
  height: 229px;
  width: 100%;

  @media screen and (min-width: 500px) {
    height: 250px;
  }

  @media screen and (min-width: 550px) {
    height: 300px;
  }

  @media screen and (min-width: 600px) {
    height: 320px;
  }

  @media screen and (min-width: 768px) {
    height: 380px;
  }

  @media screen and (min-width: 992px) {
    height: 350px;
    width: 50%;
  }

  @media screen and (min-width: 1440px) {
    height: 401px;
    margin-right: 144px;
    max-width: 560px;
    width: 100%;
  }

  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
`

const StyledMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 6rem;

  @media screen and (min-width: 992px) {
    width: 40%;
  }

  @media screen and (min-width: 1440px) {
    justify-content: center;
    margin-bottom: 0;
    width: 100%;
  }
`

const StyledName = styled.h2`
  color: ${(props) => props.theme.text};
  font-size: var(--xlFont);
  font-weight: var(--extra);
  margin: 0 0 2.3rem;

  @media screen and (min-width: 1440px) {
    font-size: 32px;
  }
`

const StyledSecondaryContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

const StyledGroup = styled.ul`
  display: flex;
  flex-direction: column;

  &.first-group {
    margin-bottom: 4.4rem;

    @media screen and (min-width: 1440px) {
      width: 50%;
    }
  }

  &.second-group {
    margin-bottom: 4.5rem;

    @media screen and (min-width: 1440px) {
      width: 50%;
    }
  }
`

const StyledItem = styled.li`
  display: flex;
  font-size: var(--smFont);
  font-weight: var(--semi);
  list-style: none;

  @media screen and (min-width: 768px) {
    font-size: var(--mdFont);
  }

  &:not(:last-child) {
    margin-bottom: 1.5rem;
  }
`

const StyledActualData = styled.span`
  display: flex;
  flex-wrap: wrap;
  font-weight: var(--light);

  .language,
  .currency {
    &:not(:last-child) {
      &::after {
        content: ', ';
        margin-right: 0.5rem;
      }
    }
  }
`

const StyledTertiaryContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledTitle = styled.h3`
  font-size: var(--mdFont);
  font-weight: var(--semi);
  margin-bottom: 1.7rem;

  @media screen and (min-width: 768px) {
    font-size: var(--lgFont);
  }
`

const StyledBorderCountries = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const StyledSingleCountry = styled(Link)`
  align-self: center;
  background-color: ${(props) => props.theme.element};
  border: none;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  color: ${(props) => props.theme.text};
  cursor: pointer;
  font-family: var(--font);
  font-size: var(--smFont);
  font-weight: var(--light);
  margin-bottom: 1rem;
  padding: 0.6rem 1.6rem;
  text-align: center;
  text-decoration: none;
  transition: var(--hoverEffect);

  @media screen and (min-width: 768px) {
    font-size: var(--mdFont);
  }

  &:not(:last-child) {
    margin-right: 1rem;
  }

  &:hover {
    transform: var(--hover);
  }
`

const CountryDetail = ({ match, history }) => {
  const country = match.params.country.replace(/-/g, ' ')
  const [details, setDetails] = useState({
    alpha3Code: '',
    name: '',
    nativeName: '',
    population: 0,
    region: '',
    subregion: '',
    capital: '',
    topLevelDomain: [],
    currencies: [],
    languages: [],
    flag: '',
    borders: [],
  })
  const [newBorders, setNewBorders] = useState([])

  // make api call to a single country
  useEffect(() => {
    api(`/name/${country}?fullText=true`)
      .then((response) => {
        const { data } = response
        setDetails(data[0])
      })
      .catch((error) => console.error(error))
  }, [country])

  // make api call to get the full name of the border countries
  useEffect(() => {
    const arr = []
    details.borders.map((border) => {
      return api(`/alpha/${border}`).then((response) => {
        const { data } = response
        arr.push(data.name)
        setNewBorders([...arr])
      })
    })
  }, [details.borders])

  // the response when the user click through the border countries
  const handleBorder = (e) => {
    const clickedBorder = e.target.textContent
    console.log(e.target.textContent)
    api(`/name/${clickedBorder}?fullText=true`)
      .then((response) => {
        const { data } = response
        setDetails(data[0])
      })
      .catch((error) => console.error(error))
  }

  const {
    name,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    flag,
  } = details

  return (
    <Layout>
      <StyledCountryDetail>
        <StyledButtonWrapper>
          <BackButton handleClick={() => history.goBack()} />
        </StyledButtonWrapper>
        <StyledDetailWrapper>
          <StyledFlag>
            <img src={flag} alt={name} />
          </StyledFlag>
          <StyledMainContainer>
            <StyledName>{name}</StyledName>
            <StyledSecondaryContainer>
              <StyledGroup className='first-group'>
                <StyledItem>
                  Native Name:&nbsp;
                  <StyledActualData>{nativeName}</StyledActualData>
                </StyledItem>
                <StyledItem>
                  Population:&nbsp;
                  <StyledActualData>{addComma(population)}</StyledActualData>
                </StyledItem>
                <StyledItem>
                  Region:&nbsp; <StyledActualData>{region}</StyledActualData>
                </StyledItem>
                <StyledItem>
                  Sub Region:&nbsp;
                  <StyledActualData>{subregion}</StyledActualData>
                </StyledItem>
                <StyledItem>
                  Capital:&nbsp;<StyledActualData>{capital}</StyledActualData>
                </StyledItem>
              </StyledGroup>
              <StyledGroup className='second-group'>
                <StyledItem>
                  Top Level Domain:&nbsp;
                  <StyledActualData>{topLevelDomain}</StyledActualData>
                </StyledItem>
                <StyledItem>
                  Currrencies:&nbsp;
                  <StyledActualData className='currencies'>
                    {currencies.map((currency) => {
                      return (
                        <p className='currency' key={currency.name}>
                          {currency.name}
                        </p>
                      )
                    })}
                  </StyledActualData>
                </StyledItem>
                <StyledItem>
                  Languages:&nbsp;
                  <StyledActualData>
                    {languages.map((language) => {
                      return (
                        <p className='language' key={language.name}>
                          {language.name}
                        </p>
                      )
                    })}
                  </StyledActualData>
                </StyledItem>
              </StyledGroup>
            </StyledSecondaryContainer>
            {newBorders.length === 0 ? null : (
              <StyledTertiaryContainer>
                <StyledTitle>Border Countries: </StyledTitle>
                <StyledBorderCountries>
                  {newBorders.length === 0
                    ? null
                    : newBorders.map((border) => {
                        return (
                          <StyledSingleCountry
                            key={border}
                            onClick={handleBorder}
                            to={`/${border
                              .replace(/\s+/g, '-')
                              .toLowerCase()}`}>
                            {border}
                          </StyledSingleCountry>
                        )
                      })}
                </StyledBorderCountries>
              </StyledTertiaryContainer>
            )}
          </StyledMainContainer>
        </StyledDetailWrapper>
      </StyledCountryDetail>
    </Layout>
  )
}

export default CountryDetail
