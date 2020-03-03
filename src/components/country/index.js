import React from 'react'

import * as Styled from './styles'
import addComma from '../../utils/addComma'

const Country = ({
  selectedCountry,
  flag,
  name,
  population,
  region,
  capital
}) => {
  return (
    <Styled.Country onClick={selectedCountry}>
      {/* TODO Adjust the image size */}
      <Styled.Flag src={flag} alt={name} />
      <Styled.Name id='country-name'>{name}</Styled.Name>
      <Styled.Metadata>
        <Styled.Info>
          Population:
          <Styled.ActualData> {addComma(population)}</Styled.ActualData>
        </Styled.Info>
        <Styled.Info>
          Region: <Styled.ActualData>{region}</Styled.ActualData>
        </Styled.Info>
        <Styled.Info>
          Capital: <Styled.ActualData>{capital}</Styled.ActualData>
        </Styled.Info>
      </Styled.Metadata>
    </Styled.Country>
  )
}

export default Country
