import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import * as Styled from './styles'

const SearchBar = () => {
  return (
    <Styled.SearchBar>
      <FontAwesomeIcon icon='search' className='icon' />
      <Styled.Input placeholder='Search for a country...' />
    </Styled.SearchBar>
  )
}

export default SearchBar
