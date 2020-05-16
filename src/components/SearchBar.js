import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

export const StyledSearchBar = styled.form`
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  margin: 0 1.6rem 4rem;
  position: relative;

  @media screen and (min-width: 480px) {
    width: 343px;
  }

  @media screen and (min-width: 600px) {
    margin-bottom: 2rem;
  }

  @media screen and (min-width: 850px) {
    margin-bottom: 0;
  }

  @media screen and (min-width: 992px) {
    margin-left: 4rem;
    width: 480px;
  }

  @media screen and (min-width: 1440px) {
    margin-left: 8rem;
  }

  .icon {
    color: ${(props) => props.theme.input};
    font-size: 15.56px;
    position: absolute;
    left: 3.2rem;
    top: 1.6rem;
  }
`

export const StyledInput = styled.input`
  background-color: ${(props) => props.theme.element};
  border: none;
  border-radius: var(--radius);
  color: ${(props) => props.theme.input};
  font-family: var(--font);
  font-size: var(--smFont);
  height: 4.8rem;
  outline: none;
  padding: 1.6rem 3.2rem 1.6rem 7.4rem; // !FIXME
  width: 100%;

  @media screen and (min-width: 768px) {
    font-size: var(--mdFont);
  }

  ::placeholder {
    color: ${(props) => props.theme.input};

    @media screen and (min-width: 768px) {
      font-size: var(--mdFont);
    }
  }
`

const SearchBar = ({ searchCountry }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <StyledSearchBar onSubmit={handleSubmit}>
      <FontAwesomeIcon icon='search' className='icon' />
      <StyledInput
        placeholder='Search for a country...'
        onChange={searchCountry}
      />
    </StyledSearchBar>
  )
}

export default SearchBar
