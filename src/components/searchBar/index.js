import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import * as Styled from './styles'

const SearchBar = ({ searchCountry }) => {
  const handleSubmit = e => {
    e.preventDefault()
  }

  return (
    <Styled.SearchBar onSubmit={handleSubmit}>
      <FontAwesomeIcon icon='search' className='icon' />
      <Styled.Input
        placeholder='Search for a country...'
        onChange={searchCountry}
      />
    </Styled.SearchBar>
  )
}

export default SearchBar
