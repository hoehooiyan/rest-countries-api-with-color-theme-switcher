import styled from 'styled-components'

import typography from '../../styles/Typography'

export const CountryDetail = styled.main`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  margin: 0 2.7rem 4.4rem 2.8rem;
`
export const Flag = styled.img`
  border: 1px solid red;
  height: 22.9rem;
  width: 32rem;
`

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 6rem;
`

export const Name = styled.h2`
  color: ${props => props.theme.text};
  font-size: 2.2rem;
  font-weight: ${typography.fontWeight.extraBold};
  margin: 4.4rem 0 2.3rem;
`

export const SecondaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 4.1rem;
`

export const Group = styled.ul`
  display: flex;
  flex-direction: column;

  &:first-child {
    margin-bottom: 4.5rem;
  }
`

export const Item = styled.li`
  font-weight: ${typography.fontWeight.semiBold};
  list-style: none;

  &:not(:last-child) {
    margin-bottom: 1.5rem;
  }
`

export const ActualData = styled.span`
  font-weight: ${typography.fontWeight.light};
`

export const TertiaryContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.h3`
  font-size: ${typography.fontSize.detailPage};
  font-weight: ${typography.fontWeight.semiBold};
  margin-bottom: 1.7rem;
`

export const BorderCountries = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(3, 1fr);
`

export const SingleCountry = styled.button`
  background-color: ${props => props.theme.element};
  border: none;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.11);
  font-family: ${typography.primaryFont};
  font-size: 1.2rem;
  font-weight: ${typography.fontWeight.light};
  padding: 0.6rem 1.5rem;

  /* &:not(:last-child) {
    margin-right: 1rem;
  } */
`
