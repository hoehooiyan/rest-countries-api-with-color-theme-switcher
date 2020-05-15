import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

const StyledOuterContainer = styled.div`
  background-color: ${(props) => props.theme.element};
  box-shadow: var(--shadow);
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 100;
`

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.element};
  margin: 0 auto;
  max-width: var(--xl);
  width: 100%;
  padding: 3rem 1.6rem;

  @media screen and (min-width: 768px) {
    padding: 2.5rem 4rem;
  }

  @media screen and (min-width: 1440px) {
    padding: 2.5rem 8rem;
  }

  .linkStyle {
    text-decoration: none;
  }
`

const StyledSiteTitle = styled.h1`
  color: ${(props) => props.theme.text};
  font-size: var(--smallFont);
  font-weight: var(--extra);

  @media screen and (min-width: 768px) {
    font-size: 2.4rem;
  }
`

const StyledModeToggler = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.text};
  cursor: pointer;

  .icon {
    margin-right: 0.8rem;
  }
`

export const StyledModeText = styled.p`
  font-size: 1.2rem;
  font-weight: var(--semi);

  @media screen and (min-width: 768px) {
    font-size: 1.6rem;
  }
`

const Header = ({ icon, toggleText, toggleTheme }) => {
  return (
    <StyledOuterContainer>
      <StyledHeader>
        <Link exact='true' to='/' className='linkStyle'>
          <StyledSiteTitle>Where in the world?</StyledSiteTitle>
        </Link>
        <StyledModeToggler onClick={toggleTheme}>
          <FontAwesomeIcon icon={icon} className='icon' />
          <StyledModeText>{toggleText}</StyledModeText>
        </StyledModeToggler>
      </StyledHeader>
    </StyledOuterContainer>
  )
}

export default Header
