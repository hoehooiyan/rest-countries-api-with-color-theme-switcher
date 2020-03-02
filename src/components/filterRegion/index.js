import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import * as Styled from './styles'

const FilterRegion = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Styled.FilterContainer>
      <Styled.TopContainer>
        <Styled.Text>Filter by Region</Styled.Text>
        <FontAwesomeIcon
          icon={!isOpen ? 'chevron-down' : 'chevron-up'}
          className='icon'
          onClick={toggleDropdown}
        />
      </Styled.TopContainer>
      {!isOpen ? null : (
        <Styled.Dropdown>
          <Styled.Region>Africa</Styled.Region>
          <Styled.Region>America</Styled.Region>
          <Styled.Region>Asia</Styled.Region>
          <Styled.Region>Europe</Styled.Region>
          <Styled.Region>Oceania</Styled.Region>
        </Styled.Dropdown>
      )}
    </Styled.FilterContainer>
  )
}

export default FilterRegion
