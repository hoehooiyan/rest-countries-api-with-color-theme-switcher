import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import addComma from '../utils/addComma'
import LoadingImg from '../images/loading.gif'

const StyledCountry = styled(Link)`
  display: flex;
  align-self: center;
  flex-direction: column;
  background-color: ${(props) => props.theme.element};
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  color: ${(props) => props.theme.text};
  cursor: pointer;
  margin-top: 4rem;
  text-decoration: none;
  transition: var(--hoverEffect);
  width: 264px;

  @media screen and (min-width: 600px) {
    align-self: stretch;
  }

  @media screen and (min-width: 650px) {
    &:nth-child(odd) {
      margin-right: 6rem;
    }
  }

  @media screen and (min-width: 850px) {
    &:nth-child(odd) {
      margin-right: 8rem;
    }
  }

  @media screen and (min-width: 900px) {
    &:nth-child(odd) {
      margin-right: 0;
    }
  }

  @media screen and (min-width: 1280px) {
    margin-top: 0;
    margin-bottom: 7.5rem;
  }

  &:hover {
    transform: var(--hover);
  }
`

const StyledImgContainer = styled.div`
  background-image: url(${LoadingImg});
  background-position: center;
  background-size: contain;
  border-top-left-radius: var(--radius);
  border-top-right-radius: var(--radius);
  height: 160px;
  width: 100%;
`

const StyledFlag = styled.img`
  border-top-left-radius: var(--radius);
  border-top-right-radius: var(--radius);
  object-fit: cover;
  height: 160px;
  width: 100%;
`

const StyledName = styled.h2`
  font-size: var(--lgFont);
  font-weight: var(--extra);
  margin: 2.5rem 2.4rem 1.9rem 2.4rem;
`
const StyledMetadata = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 6.7rem;
  margin: 0 2.4rem 4.1rem 2.4rem;
`

const StyledInfo = styled.p`
  font-weight: var(--semi);
`

const StyledActualData = styled.span`
  font-weight: var(--light);
`

const Country = ({ flag, name, population, region, capital }) => {
  const linkTo = name.replace(/\s+/g, '-').toLowerCase()

  return (
    <StyledCountry to={`/${linkTo}`}>
      <StyledImgContainer>
        <StyledFlag src={flag} alt={name} />
      </StyledImgContainer>
      <StyledName classs='country-name'>{name}</StyledName>
      <StyledMetadata>
        <StyledInfo>
          Population:
          <StyledActualData> {addComma(population)}</StyledActualData>
        </StyledInfo>
        <StyledInfo>
          Region: <StyledActualData>{region}</StyledActualData>
        </StyledInfo>
        <StyledInfo>
          Capital: <StyledActualData>{capital}</StyledActualData>
        </StyledInfo>
      </StyledMetadata>
    </StyledCountry>
  )
}

export default Country
