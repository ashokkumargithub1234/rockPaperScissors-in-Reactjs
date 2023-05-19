import {ListItem, Button, Image} from './styledComponents'

const ButtonItem = props => {
  const {eachItem, activeButton} = props
  const {imageUrl, id} = eachItem
  const buttonName = id.toLowerCase()
  const onClickedItem = () => {
    activeButton(id, imageUrl)
  }
  console.log(buttonName)
  return (
    <ListItem>
      <Button
        type="button"
        onClick={onClickedItem}
        data-testid={`${buttonName}Button`}
      >
        <Image src={imageUrl} alt={id} />
      </Button>
    </ListItem>
  )
}
export default ButtonItem
