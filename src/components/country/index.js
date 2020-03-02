import React, { useState } from 'react'

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
  // const [selectedCountry, setSelectedCountry] = useState('')

  return (
    <Styled.Country>
      {/* TODO Adjust the image size */}
      <Styled.Flag src={flag} alt={name} onClick={selectedCountry} />
      <Styled.Name>{name}</Styled.Name>
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
