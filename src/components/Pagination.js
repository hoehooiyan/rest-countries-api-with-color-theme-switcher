import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

const StyledShowCurrent = styled.p`
  color: ${(props) => props.theme.text};
  font-weight: var(--extra);
  margin-bottom: 1rem;
`

const StyledNavigation = styled.button`
  background-color: ${(props) => props.theme.element};
  border: none;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  color: ${(props) => props.theme.text};
  cursor: pointer;
  font-size: var(--regularFont);
  font-weight: var(--extra);
  outline: none;
  padding: 1rem;
  text-decoration: none;
`

export const ShowCurrent = ({ current, total }) => {
  return (
    <StyledShowCurrent>
      Page {current} of {total}
    </StyledShowCurrent>
  )
}

export const NextPage = ({ handleNextPage }) => {
  return (
    <StyledNavigation onClick={handleNextPage}>
      Next <FontAwesomeIcon icon='arrow-right' className='arrow-right' />
    </StyledNavigation>
  )
}

export const PreviousPage = ({ handlePreviousPage }) => {
  return (
    <StyledNavigation onClick={handlePreviousPage}>
      <FontAwesomeIcon icon='arrow-left' className='arrow-left' /> {''}
      Prev
    </StyledNavigation>
  )
}
