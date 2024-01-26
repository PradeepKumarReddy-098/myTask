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

const TaskTags = props => {
  const {activeTag, taskList, changeTag} = props
  let filteredTasks = taskList
  if (activeTag !== '') {
    filteredTasks = taskList.filter(task => task.taskTag === activeTag)
  }
  const changeActiveTag = e => {
    if (activeTag === e.target.value) {
      changeTag('')
    } else {
      changeTag(e.target.value)
    }
  }
  return (
    <div className="tags-and-task-container">
      <h1 className="heading">Tags</h1>
      <ul className="container-tag">
        {tagsList.map(tag => (
          <li key={tag.optionId}>
            <button
              type="button"
              className={
                activeTag === tag.displayText
                  ? 'active-tag-button'
                  : 'tag-button'
              }
              key={tag.optionId}
              value={tag.displayText}
              onClick={changeActiveTag}
            >
              {tag.displayText}
            </button>
          </li>
        ))}
      </ul>
      <h1 className="heading">Tasks</h1>
      {filteredTasks.length <= 0 ? (
        <div className="no-task-container">
          <p className="no-task">No Tasks Added Yet</p>
        </div>
      ) : (
        <ul className="tasks-container">
          {filteredTasks.map(task => (
            <li className="task-item" key={task.id}>
              <p className="name">{task.taskName}</p>
              <p className="a">{task.taskTag}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default TaskTags
