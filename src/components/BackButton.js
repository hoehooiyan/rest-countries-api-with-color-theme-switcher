import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.element};
  border: none;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  color: ${(props) => props.theme.text};
  cursor: pointer;
  outline: none;
  padding: 0.7rem 2.4rem;
  width: 104px;
  transition: var(--hoverEffect);

  &:hover {
    transform: var(--hover);
  }

  .icon {
    color: ${(props) => props.theme.text};
    font-size: 15px;
    margin-right: 0.85rem;
  }
`

export const StyledText = styled.p`
  align-self: center;
  font-family: var(--font);
  font-size: var(--smFont);
  font-weight: var(--light);

  @media screen and (min-width: 768px) {
    font-size: var(--mdFont);
  }
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
