import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

const StyledOuterContainer = styled.div`
  background-color: ${(props) => props.theme.element};
  box-shadow: var(--shadow);
  margin-bottom: 2.4rem;
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 100;

  @media screen and (min-width: 768px) {
    margin-bottom: 3.4rem;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 4.8rem;
  }
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

  @media screen and (min-width: 480px) {
    padding: 2.5rem 2rem;
  }

  @media screen and (min-width: 992px) {
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
  font-size: var(--smFont);
  font-weight: var(--extra);

  @media screen and (min-width: 480px) {
    font-size: var(--mdFont);
  }

  @media screen and (min-width: 768px) {
    font-size: var(--xlFont);
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
  font-size: var(--xsFont);
  font-weight: var(--semi);

  @media screen and (min-width: 480px) {
    font-size: var(--smFont);
  }

  @media screen and (min-width: 768px) {
    font-size: var(--mdFont);
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
