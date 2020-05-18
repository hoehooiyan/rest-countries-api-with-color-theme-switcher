import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

export const StyledPaginationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 4rem auto 0;
  padding: 0 1.6rem;
  max-width: var(--xl);

  @media screen and (min-width: 1440px) {
    margin-top: 0;
  }
`

export const StyledNavigateButton = styled.div`
  display: flex;
  justify-content: space-around;
  width: 60%;

  @media screen and (min-width: 400px) {
    width: 50%;
  }

  @media screen and (min-width: 600px) {
    width: 40%;
  }

  @media screen and (min-width: 700px) {
    width: 30%;
  }

  @media screen and (min-width: 900px) {
    width: 25%;
  }

  @media screen and (min-width: 1200px) {
    width: 15%;
  }
`

const StyledShowCurrent = styled.p`
  border-bottom: 1px dotted ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  font-weight: var(--extra);
  margin-bottom: 2rem;
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

export const StyledNotAllowedNavigation = styled(StyledNavigation)`
  cursor: not-allowed;
`

export const ShowCurrent = ({ current, total }) => {
  return (
    <StyledShowCurrent>
      Page {current} of {total}
    </StyledShowCurrent>
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

export const NextPage = ({ handleNextPage }) => {
  return (
    <StyledNavigation onClick={handleNextPage}>
      Next <FontAwesomeIcon icon='arrow-right' className='arrow-right' />
    </StyledNavigation>
  )
}
