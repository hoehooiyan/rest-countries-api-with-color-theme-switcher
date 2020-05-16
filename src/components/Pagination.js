import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

const StyledLink = styled(Link)`
  color: ${(props) => props.theme.text};
  text-decoration: none;
`

const StyledShowCurrent = styled.p`
  text-transform: lowercase;
`

const StyledNextPage = styled(Link)`
  background-color: ${(props) => props.theme.element};
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  color: ${(props) => props.theme.text};
  font-weight: var(--extra);
  padding: 1rem;
  text-decoration: none;

  .arrow-right {
    margin-left: 0.5rem;
  }
`

const StyledPreviousPage = styled(Link)`
  background-color: ${(props) => props.theme.element};
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  color: ${(props) => props.theme.text};
  font-weight: var(--extra);
  padding: 1rem;
  text-decoration: none;

  .arrow-left {
    margin-right: 0.5rem;
  }
`

export const ShowCurrent = ({ current, total }) => {
  return (
    <StyledShowCurrent>
      {current} of {total}
    </StyledShowCurrent>
  )
}

export const NextPage = ({ linkTo, handleNextPage }) => {
  return (
    <StyledNextPage to={`/${linkTo}`} onClick={handleNextPage}>
      Next <FontAwesomeIcon icon='arrow-right' className='arrow-right' />
    </StyledNextPage>
  )
}

export const PreviousPage = ({ linkTo, handlePreviousPage }) => {
  return (
    <StyledPreviousPage to={`/${linkTo}`} onClick={handlePreviousPage}>
      <FontAwesomeIcon icon='arrow-left' className='arrow-left' />
      Prev
    </StyledPreviousPage>
  )
}
