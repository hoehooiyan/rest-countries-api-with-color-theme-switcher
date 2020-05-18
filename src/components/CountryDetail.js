import React from 'react'
import styled from 'styled-components'
import addComma from '../utils/addComma'

export const StyledCountryDetail = styled.main`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.text};
  /* margin: 0 2.7rem 4.4rem 2.8rem; */
  /* margin: 0 auto 4.4rem auto; */
`
export const StyledFlag = styled.img`
  height: 22.9rem;
  width: 32rem;
`

export const StyledMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 6rem;
`

export const StyledName = styled.h2`
  color: ${(props) => props.theme.text};
  font-size: 2.2rem;
  font-weight: var(--extra);
  margin: 4.4rem 0 2.3rem;
`

export const StyledSecondaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 4.1rem;
`

export const StyledGroup = styled.ul`
  display: flex;
  flex-direction: column;

  &:first-child {
    margin-bottom: 4.5rem;
  }
`

export const StyledItem = styled.li`
  font-weight: var(--semi);
  list-style: none;

  &:not(:last-child) {
    margin-bottom: 1.5rem;
  }
`

export const StyledActualData = styled.span`
  font-weight: var(--light);
  /* 
  &.currencies {
    &::after {
      content: ',';
    }
  }

  &.languages {
    &::after {
      content: ',';
    }
  } */
`

export const StyledTertiaryContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const StyledTitle = styled.h3`
  font-size: var(--mdFont);
  font-weight: var(--semi);
  margin-bottom: 1.7rem;
`

export const StyledBorderCountries = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(3, 1fr);
`

export const StyledSingleCountry = styled.button`
  background-color: ${(props) => props.theme.element};
  border: none;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.11);
  color: ${(props) => props.theme.text};
  cursor: pointer;
  font-family: var(--font);
  font-weight: var(--light);
  padding: 0.6rem 1.5rem;

  /* &:not(:last-child) {
    margin-right: 1rem;
  } */
`

const CountryDetail = ({
  flag,
  name,
  nativeName,
  population,
  region,
  subRegion,
  capital,
  topLevelDomain,
  currencies,
  languages,
  borders,
}) => {
  return (
    <StyledCountryDetail>
      <StyledFlag src={flag} alt={name} />
      <StyledMainContainer>
        <StyledName>{name}</StyledName>
        <StyledSecondaryContainer>
          <StyledGroup>
            <StyledItem>
              Native Name: <StyledActualData>{nativeName}</StyledActualData>
            </StyledItem>
            <StyledItem>
              Population:{' '}
              <StyledActualData>{addComma(population)}</StyledActualData>
            </StyledItem>
            <StyledItem>
              Region: <StyledActualData>{region}</StyledActualData>
            </StyledItem>
            <StyledItem>
              Sub Region: <StyledActualData>{subRegion}</StyledActualData>
            </StyledItem>
            <StyledItem>
              Capital: <StyledActualData>{capital}</StyledActualData>
            </StyledItem>
          </StyledGroup>
          <StyledGroup>
            <StyledItem>
              Top Level Domain:{' '}
              <StyledActualData>{topLevelDomain}</StyledActualData>
            </StyledItem>
            <StyledItem>
              Currrencies:{' '}
              <StyledActualData className='currencies'>
                {currencies}
              </StyledActualData>
            </StyledItem>
            <StyledItem>
              Languages:{' '}
              <StyledActualData className='languages'>
                {languages}
              </StyledActualData>
            </StyledItem>
          </StyledGroup>
        </StyledSecondaryContainer>
        <StyledTertiaryContainer>
          <StyledTitle>Border Countries: </StyledTitle>
          <StyledBorderCountries>
            {borders.map((border) => {
              return (
                <StyledSingleCountry key={border}>{border}</StyledSingleCountry>
              )
            })}
          </StyledBorderCountries>
        </StyledTertiaryContainer>
      </StyledMainContainer>
    </StyledCountryDetail>
  )
}

export default CountryDetail