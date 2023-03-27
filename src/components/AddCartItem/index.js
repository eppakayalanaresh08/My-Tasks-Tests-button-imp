import './index.css'

const AddCartItem = props => {
  const {eachItemList} = props
  const {onTagsElement, onTextElement} = eachItemList
  return (
    <li className="button-list">
      <p className="on-text-element">{onTextElement}</p>
      <p className="button-Element-text">{onTagsElement}</p>
    </li>
  )
}

export default AddCartItem
