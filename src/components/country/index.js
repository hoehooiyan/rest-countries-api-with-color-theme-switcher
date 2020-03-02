import React from 'react'

import * as Styled from './styles'

const Country = ({ flag, name, population, region, capital }) => {
  return (
    <Styled.Country>
      <Styled.Flag src={flag} alt={name} />
      <Styled.Name>{name}</Styled.Name>
      <Styled.Metadata>
        <Styled.Info>
          Population: <Styled.ActualData>{population}</Styled.ActualData>
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