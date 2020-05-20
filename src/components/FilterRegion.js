import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

export const StyledFilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: var(--normal);
  position: relative;
`

export const StyledTopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.element};
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  color: ${(props) => props.theme.text};
  cursor: pointer;
  font-weight: var(--normal);
  height: 4.8rem;
  margin: 0 15.9rem 0.4rem 1.6rem;
  padding: 1.6rem 1.9rem 1.6rem 2.4rem;
  width: 20rem;

  @media screen and (min-width: 650px) {
    margin: 0 1.6rem 0.4rem 1.6rem;
  }

  @media screen and (min-width: 992px) {
    margin-right: 4rem;
  }

  @media screen and (min-width: 1440px) {
    margin-right: 8rem;
  }

  .icon {
    font-size: 10px;
  }
`

export const StyledText = styled.p`
  @media screen and (min-width: 768px) {
    font-size: var(--mdFont);
  }
`

export const StyledDropdown = styled.div`
  background-color: ${(props) => props.theme.element};
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  margin: 0 15.9rem 0 1.6rem;
  padding: 1.6rem 2.4rem;
  width: 20rem;
  position: absolute;
  top: 5.3rem;
  z-index: 10;
`

export const StyledRegion = styled.li`
  color: ${(props) => props.theme.text};
  cursor: pointer;
  list-style: none;

  @media screen and (min-width: 768px) {
    font-size: var(--mdFont);
  }

  &:not(:last-child) {
    margin-bottom: 0.8rem;
  }
`

const FilterRegion = ({ selectedRegion }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = (e) => {
    setIsOpen(!isOpen)
  }

  return (
    <StyledFilterContainer>
      <StyledTopContainer className='toggleBox' onClick={toggleDropdown}>
        <StyledText>Filter by Region</StyledText>
        <FontAwesomeIcon
          icon={!isOpen ? 'chevron-down' : 'chevron-up'}
          className='icon'
        />
      </StyledTopContainer>
      {!isOpen ? null : (
        <StyledDropdown>
          <StyledRegion onClick={selectedRegion}>Africa</StyledRegion>
          <StyledRegion onClick={selectedRegion}>Americas</StyledRegion>
          <StyledRegion onClick={selectedRegion}>Asia</StyledRegion>
          <StyledRegion onClick={selectedRegion}>Europe</StyledRegion>
          <StyledRegion onClick={selectedRegion}>Oceania</StyledRegion>
        </StyledDropdown>
      )}
    </StyledFilterContainer>
  )
}

export default FilterRegion
