import styled from 'styled-components'
// import { Link } from 'react-router-dom'

import typography from '../../styles/Typography'

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => props.theme.element};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  height: 8rem;
  padding: 0 1.7rem 0 1.6rem;
`

export const SiteTitle = styled.h1`
  color: ${props => props.theme.text};
  font-size: ${typography.fontSize.homepageItem};
  font-weight: ${typography.fontWeight.extraBold};
  text-decoration: none;
`

export const DarkModeToggler = styled.div`
  display: flex;
  align-items: center;
  color: ${props => props.theme.text};
  cursor: pointer;

  .icon {
    margin-right: 0.8rem;
  }
`

export const DarkModeText = styled.p`
  font-size: 1.2rem;
  font-weight: ${typography.fontWeight.semiBold};
`
