import styled from 'styled-components/macro'

export const ListItem = styled.div`
  margin: 10px;
`
export const Button = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  background-color: transparent;
`
export const Image = styled.img`
  width: 120px;
  height: 120px;
  @media screen and (min-width: 768px) {
    width: 200px;
    height: 200px;
  }
`
