import {
  ShowResultContainer,
  ImagesContainer,
  Text,
  Image,
  ResultText,
  PlayAgainButton,
  TextImageContainer,
} from './styledComponents'

const ResultsContainer = props => {
  const {result, userChoice, opponentChoice, playAgain} = props
  const {userImage} = userChoice
  const {imageUrl} = opponentChoice
  const onClickPlayAgainButton = () => {
    playAgain()
  }

  return (
    <ShowResultContainer>
      <ImagesContainer>
        <TextImageContainer>
          <Text>YOU</Text>
          <Image src={userImage} alt="your choice" />
        </TextImageContainer>
        <TextImageContainer>
          <Text>OPPONENT</Text>
          <Image src={imageUrl} alt="opponent choice" />
        </TextImageContainer>
      </ImagesContainer>
      <ResultText>{result}</ResultText>
      <PlayAgainButton type="button" onClick={onClickPlayAgainButton}>
        PLAY AGAIN
      </PlayAgainButton>
    </ShowResultContainer>
  )
}
export default ResultsContainer
