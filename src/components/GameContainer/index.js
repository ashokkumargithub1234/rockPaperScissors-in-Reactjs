import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import ButtonItem from '../ButtonItem'
import ResultContainer from '../ResultContainer'
import {
  AppContainer,
  GameResultsContainer,
  ResultOutput,
  ChoicesContainer,
  ItemText,
  ScoreContainer,
  ScoreText,
  Score,
  ButtonsContainer,
  PopupButton,
  PopupContent,
  ImagePop,
} from './styledComponents'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class GameContainer extends Component {
  state = {
    userChoice: {},
    opponentChoice: {},
    playingView: true,
    score: 0,
    result: '',
  }

  clickedButton = (userId, userImage) => {
    const number = Math.floor(Math.random() * choicesList.length)
    const optionId = choicesList[number].id
    // console.log(image)
    this.setState({
      userChoice: {userId, userImage},
      opponentChoice: choicesList[number],
    })
    if (userId === 'ROCK' && optionId === 'SCISSORS') {
      this.setState(prevState => ({
        playingView: false,
        score: prevState.score + 1,
        result: 'YOU WON',
      }))
    } else if (userId === 'SCISSORS' && optionId === 'ROCK') {
      this.setState(prevState => ({
        playingView: false,
        score: prevState.score - 1,
        result: 'YOU LOSE',
      }))
    } else if (userId === 'PAPER' && optionId === 'ROCK') {
      this.setState(prevState => ({
        playingView: false,
        score: prevState.score + 1,
        result: 'YOU WON',
      }))
    } else if (userId === 'PAPER' && optionId === 'SCISSORS') {
      this.setState(prevState => ({
        playingView: false,
        score: prevState.score - 1,
        result: 'YOU LOSE',
      }))
    } else if (userId === 'ROCK' && optionId === 'PAPER') {
      this.setState(prevState => ({
        playingView: false,
        score: prevState.score - 1,
        result: 'YOU LOSE',
      }))
    } else if (userId === 'SCISSORS' && optionId === 'PAPER') {
      this.setState(prevState => ({
        playingView: false,
        score: prevState.score + 1,
        result: 'YOU WON',
      }))
    } else {
      this.setState({
        playingView: false,
        result: 'IT IS DRAW',
      })
    }
  }

  playAgain = () => {
    this.setState({playingView: true})
  }

  render() {
    const {score, playingView, result, userChoice, opponentChoice} = this.state
    // console.log(userId)
    // console.log(opponentId)
    return (
      <>
        <AppContainer>
          <GameResultsContainer>
            <ChoicesContainer>
              <ItemText>
                ROCK
                <br />
                PAPER
                <br />
                SCISSORS
              </ItemText>
            </ChoicesContainer>
            <ScoreContainer>
              <ScoreText>Score</ScoreText>
              <Score>{score}</Score>
            </ScoreContainer>
          </GameResultsContainer>
          <ResultOutput>
            {playingView ? (
              <ButtonsContainer>
                {choicesList.map(eachList => (
                  <ButtonItem
                    key={eachList.id}
                    eachItem={eachList}
                    activeButton={this.clickedButton}
                  />
                ))}
              </ButtonsContainer>
            ) : (
              <ResultContainer
                result={result}
                userChoice={userChoice}
                opponentChoice={opponentChoice}
                playAgain={this.playAgain}
              />
            )}
          </ResultOutput>

          <Popup
            modal
            trigger={<PopupButton type="button">RULES</PopupButton>}
            position="top left"
          >
            {close => (
              <PopupContent>
                <PopupButton type="button" onClick={() => close()}>
                  <RiCloseLine size="30" color="#616e7c" />
                </PopupButton>
                <ImagePop
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                />
              </PopupContent>
            )}
          </Popup>
        </AppContainer>
      </>
    )
  }
}
export default GameContainer
