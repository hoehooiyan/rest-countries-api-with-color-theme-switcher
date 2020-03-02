import styled from 'styled-components'

import typography from '../../styles/Typography'

export const Country = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.element};
  color: ${props => props.theme.text};
  cursor: pointer;
  width: 26.4rem;

  &:not(:last-child) {
    margin-bottom: 4rem;
  }
`

export const Flag = styled.img`
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  width: 100%;
`

export const Name = styled.h2`
  font-size: 1.8rem;
  font-weight: ${typography.fontWeight.extraBold};
  margin: 2.5rem 2.4rem 1.9rem 2.4rem;
`
export const Metadata = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 6.7rem;
  margin: 0 2.4rem 4.1rem 2.4rem;
`

export const Info = styled.p`
  font-weight: ${typography.fontWeight.semiBold};
`

export const ActualData = styled.span`
  font-weight: ${typography.fontWeight.light};
`
