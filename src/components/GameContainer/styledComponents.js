import styled from 'styled-components/macro'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  padding-bottom: 30px;
  background-color: #223a5f;
  min-height: 100vh;
  @media screen and (min-width: 768px) {
    padding: 50px;
  }
`
export const GameResultsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid #ffffff;
  border-radius: 8px;
  padding: 16px;
  width: 100%;
  max-width: 500px;
  @media screen and (min-width: 768px) {
    width: 85%;
    max-width: 1100px;
  }
`
export const ResultOutput = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
`
export const ChoicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 16px;
  padding-right: 16px;
`
export const ItemText = styled.h1`
  font-size: 16px;
  font-weight: bold;
  font-family: 'Bree Serif';
  color: #ffffff;
  margin: 0;
`
export const ScoreContainer = styled(ChoicesContainer)`
  align-items: center;
  background-color: #ffffff;
  border-radius: 5px;
  border: none;
  outline: none;
  margin-right: 16px;
`
export const ScoreText = styled.p`
  color: #223a5f;
  margin-top: 8px;
  font-size: 16px;
  font-weight: bold;
  font-family: 'Bree Serif';
`
export const Score = styled.p`
  font-size: 26px;
  color: #223a5f;
  font-family: 'Roboto';
  font-weight: 500;
  margin-top: 4px;
  margin-bottom: 8px;
`
export const ButtonsContainer = styled.div`
  margin-top: 72px;
  max-width: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 0;
  @media screen and (min-width: 768px) {
    max-width: 500px;
  }
`
export const PopupButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  background-color: #ffffff;
  border-radius: 5px;
  font-size: 18px;
  color: #223a5f;
  font-family: 'Roboto';
  font-weight: 500;
  padding: 8px;
  align-self: flex-end;
`
export const PopupContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  padding: 4px;
`
export const ImagePop = styled.img`
  width: 200px;
  height: 200px;
  margin: 16px;
  margin-top: 0;
`
