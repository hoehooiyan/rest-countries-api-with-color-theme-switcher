import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import * as Styled from './styles'

const Header = ({ icon, toggleText, toggleTheme }) => {
  
  return (
    <Styled.Header>
      <Styled.SiteTitle>Where in the world?</Styled.SiteTitle>
      <Styled.DarkModeToggler onClick={toggleTheme}>
        <FontAwesomeIcon icon={icon} className='icon' />
        <Styled.DarkModeText>{toggleText}</Styled.DarkModeText>
      </Styled.DarkModeToggler>
    </Styled.Header>
  )
}

export default Header
