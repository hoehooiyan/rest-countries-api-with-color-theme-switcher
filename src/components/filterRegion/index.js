import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import * as Styled from './styles'

const FilterRegion = ({ selectedRegion }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Styled.FilterContainer>
      <Styled.TopContainer onClick={toggleDropdown} >
        <Styled.Text>Filter by Region</Styled.Text>
        <FontAwesomeIcon
          icon={!isOpen ? 'chevron-down' : 'chevron-up'}
          className='icon'
        />
      </Styled.TopContainer>
      {!isOpen ? null : (
        <Styled.Dropdown>
          <Styled.Region onClick={selectedRegion}>Africa</Styled.Region>
          <Styled.Region onClick={selectedRegion}>America</Styled.Region>
          <Styled.Region onClick={selectedRegion}>Asia</Styled.Region>
          <Styled.Region onClick={selectedRegion}>Europe</Styled.Region>
          <Styled.Region onClick={selectedRegion}>Oceania</Styled.Region>
        </Styled.Dropdown>
      )}
    </Styled.FilterContainer>
  )
}

export default FilterRegion
