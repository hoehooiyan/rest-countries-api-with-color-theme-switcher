import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.element};
  border: none;
  box-shadow: 0 0 7px rgba(0, 0, 0, 2.9);
  color: ${(props) => props.theme.text};
  cursor: pointer;
  margin: 4rem 0 6.4rem 0;
  outline: none;
  padding: 0.7rem 2.4rem 0.6rem 2.45rem;

  .icon {
    color: ${(props) => props.theme.text};
    font-size: 15px;
    margin-right: 0.85rem;
  }
`

export const StyledText = styled.p`
  align-self: center;
  font-family: var(--font);
  font-weight: var(--light);
`

const BackButton = ({ handleClick }) => {
  return (
    <StyledButton onClick={handleClick}>
      <FontAwesomeIcon icon='arrow-left' className='icon' />
      <StyledText>Back</StyledText>
    </StyledButton>
  )
}

export default BackButton
