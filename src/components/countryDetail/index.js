import React from 'react'

import * as Styled from './styles'
// import addComma from '../../utils/addComma'

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
  languages
}) => {
  return (
    <Styled.CountryDetail>
      <Styled.Flag src={flag} alt={name} />
      <Styled.MainContainer>
        <Styled.Name>{name}Belgium</Styled.Name>
        <Styled.SecondaryContainer>
          <Styled.Group>
            <Styled.Item>
              Native Name:{' '}
              <Styled.ActualData>{nativeName}Belgie</Styled.ActualData>
            </Styled.Item>
            <Styled.Item>
              Population:{' '}
              <Styled.ActualData>{population}11,319,511</Styled.ActualData>
            </Styled.Item>
            <Styled.Item>
              Region: <Styled.ActualData>{region}Europe</Styled.ActualData>
            </Styled.Item>
            <Styled.Item>
              Sub Region:{' '}
              <Styled.ActualData>{subRegion}Western Europe</Styled.ActualData>
            </Styled.Item>
            <Styled.Item>
              Capital: <Styled.ActualData>{capital}Brussels</Styled.ActualData>
            </Styled.Item>
          </Styled.Group>
          <Styled.Group>
            <Styled.Item>
              Top Level Domain:{' '}
              <Styled.ActualData>{topLevelDomain}.be</Styled.ActualData>
            </Styled.Item>
            <Styled.Item>
              Currrencies:{' '}
              <Styled.ActualData>{currencies}Euro</Styled.ActualData>
            </Styled.Item>
            <Styled.Item>
              Languages:{' '}
              <Styled.ActualData>
                {languages}Dutch, French, German
              </Styled.ActualData>
            </Styled.Item>
          </Styled.Group>
        </Styled.SecondaryContainer>
        <Styled.TertiaryContainer>
          <Styled.Title>Border Countries: </Styled.Title>
          <Styled.BorderCountries>
            <Styled.SingleCountry>France</Styled.SingleCountry>
            <Styled.SingleCountry>Germany</Styled.SingleCountry>
            <Styled.SingleCountry>Netherlands</Styled.SingleCountry>
          </Styled.BorderCountries>
        </Styled.TertiaryContainer>
      </Styled.MainContainer>
    </Styled.CountryDetail>
  )
}

export default CountryDetail
