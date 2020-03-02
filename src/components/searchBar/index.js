import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import * as Styled from './styles'

const SearchBar = () => {
  return (
    <Styled.SearchBar>
      {/* <button> */}
        <FontAwesomeIcon icon='search' className='icon' />
      {/* </button> */}
      <Styled.Input placeholder='Search for a country...' />
    </Styled.SearchBar>
  )
}

export default SearchBar
