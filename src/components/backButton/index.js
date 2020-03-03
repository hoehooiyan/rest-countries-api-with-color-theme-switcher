import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import * as Styled from './styles'

const BackButton = ({ handleClick }) => {
  return (
    <Styled.Button onClick={handleClick}>
      <FontAwesomeIcon icon='arrow-left' className='icon' />
      <Styled.Text>Back</Styled.Text>
    </Styled.Button>
  )
}

export default BackButton
