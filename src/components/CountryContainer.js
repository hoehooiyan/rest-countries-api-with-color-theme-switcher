import React from 'react'
import styled from 'styled-components'

const StyledCountryWrapper = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  max-width: var(--xl);
  padding: 0 1.6rem;
  width: 100%;

  @media screen and (min-width: 600px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  @media screen and (min-width: 650px) {
    justify-content: center;
  }

  @media screen and (min-width: 900px) {
    justify-content: space-around;
  }

  @media screen and (min-width: 992px) {
    padding: 0 4rem;
  }

  @media screen and (min-width: 1280px) {
    justify-content: space-between;
    margin-top: 4.8rem;
    padding: 0 8rem;
  }
`

const CountryContainer = ({ children }) => (
  <StyledCountryWrapper>{children}</StyledCountryWrapper>
)

export default CountryContainer
