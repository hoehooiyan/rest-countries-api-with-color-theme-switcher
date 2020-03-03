import React from 'react'

import * as Styled from './styles'
import addComma from '../../utils/addComma'

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
  borders
}) => {
  return (
    <Styled.CountryDetail>
      <Styled.Flag src={flag} alt={name} />
      <Styled.MainContainer>
        <Styled.Name>{name}</Styled.Name>
        <Styled.SecondaryContainer>
          <Styled.Group>
            <Styled.Item>
              Native Name: <Styled.ActualData>{nativeName}</Styled.ActualData>
            </Styled.Item>
            <Styled.Item>
              Population:{' '}
              <Styled.ActualData>{addComma(population)}</Styled.ActualData>
            </Styled.Item>
            <Styled.Item>
              Region: <Styled.ActualData>{region}</Styled.ActualData>
            </Styled.Item>
            <Styled.Item>
              Sub Region: <Styled.ActualData>{subRegion}</Styled.ActualData>
            </Styled.Item>
            <Styled.Item>
              Capital: <Styled.ActualData>{capital}</Styled.ActualData>
            </Styled.Item>
          </Styled.Group>
          <Styled.Group>
            <Styled.Item>
              Top Level Domain:{' '}
              <Styled.ActualData>{topLevelDomain}</Styled.ActualData>
            </Styled.Item>
            <Styled.Item>
              Currrencies:{' '}
              <Styled.ActualData className='currencies'>
                {currencies}
              </Styled.ActualData>
            </Styled.Item>
            <Styled.Item>
              Languages:{' '}
              <Styled.ActualData className='languages'>
                {languages}
              </Styled.ActualData>
            </Styled.Item>
          </Styled.Group>
        </Styled.SecondaryContainer>
        <Styled.TertiaryContainer>
          <Styled.Title>Border Countries: </Styled.Title>
          <Styled.BorderCountries>
            {borders.map(border => {
              return <Styled.SingleCountry>{border}</Styled.SingleCountry>
            })}
          </Styled.BorderCountries>
        </Styled.TertiaryContainer>
      </Styled.MainContainer>
    </Styled.CountryDetail>
  )
}

export default CountryDetail
