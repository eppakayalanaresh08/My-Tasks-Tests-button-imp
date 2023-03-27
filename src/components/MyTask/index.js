import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import EachTags from '../EachTags'

import AddCartItem from '../AddCartItem'

import './index.css'

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

class MyTask extends Component {
  state = {
    onTagsElement: tagsList[0].optionId,
    onTextElement: '',
    listsAddItems: [],
    isActiveTag: 'INITIAL',
  }

  onChangeTags = event => {
    this.setState({onTagsElement: event.target.value})
  }

  onChangeText = event => {
    this.setState({onTextElement: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {onTextElement, onTagsElement} = this.state
    const userDetailsUpdate = {
      id: uuidv4(),
      onTextElement,
      onTagsElement,
    }
    this.setState(prevState => ({
      listsAddItems: [...prevState.listsAddItems, userDetailsUpdate],
      onTextElement: '',
      onTagsElement: tagsList[0].optionId,
    }))
  }

  onClickEachTag = optionId => {
    this.setState(prevState => ({
      isActiveTag: prevState.isActiveTag === optionId ? 'INITIAl' : optionId,
    }))
  }

  render() {
    const {
      onTagsElement,
      onTextElement,
      listsAddItems,
      isActiveTag,
    } = this.state
    console.log(isActiveTag)

    const filterListTag =
      isActiveTag === 'INITIAL'
        ? listsAddItems
        : listsAddItems.filter(each => each.onTagsElement === isActiveTag)

    return (
      <div className="bg-container">
        <div className="left-container">
          <form onSubmit={this.onSubmitForm} className="form-container">
            <h1 className="heading-task">Create a task!</h1>
            <div className="input-container">
              <div className="task-input-container">
                <label htmlFor="Task" className="task-Element">
                  Task
                </label>
                <input
                  type="text"
                  id="Task"
                  onChange={this.onChangeText}
                  value={onTextElement}
                  className="input-tag"
                  placeholder="Enter the task here"
                />
              </div>
              <div className="task-input-container">
                <label htmlFor="Tags" className="task-Element">
                  Tags
                </label>
                <select
                  value={onTagsElement}
                  onChange={this.onChangeTags}
                  className="input-tag"
                  id="Tags"
                >
                  {tagsList.map(eachList => (
                    <option key={eachList.optionId} value={eachList.optionId}>
                      {eachList.displayText}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <button type="submit" className="button-Element">
              Add Task
            </button>
          </form>
        </div>
        <div className="right-container">
          <h1>Tags</h1>
          <ul className="lists-Objects">
            {tagsList.map(eachObject => (
              <EachTags
                eachObjectList={eachObject}
                onClickEachTag={this.onClickEachTag}
                key={eachObject.optionId}
                isActive={isActiveTag === eachObject.optionId}
              />
            ))}
          </ul>
          <h1>Tasks</h1>
          {listsAddItems.length === 0 ? (
            <div className="container-task">
              <p className="no-task">No Tasks Added Yet</p>
            </div>
          ) : (
            <ul className="lists-adds">
              {filterListTag.map(eachItem => (
                <AddCartItem eachItemList={eachItem} key={eachItem.id} />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default MyTask
