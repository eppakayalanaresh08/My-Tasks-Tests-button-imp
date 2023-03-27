import './index.css'

const EachTags = props => {
  const {eachObjectList, onClickEachTag, isActive} = props
  const {displayText, optionId} = eachObjectList

  const onClickButtonTag = () => {
    onClickEachTag(optionId)
  }
  const styledActive = isActive && 'style-Button'
  return (
    <li className="list-display">
      <button
        type="button"
        className={`button-display ${styledActive}`}
        onClick={onClickButtonTag}
      >
        {displayText}
      </button>
    </li>
  )
}

export default EachTags
