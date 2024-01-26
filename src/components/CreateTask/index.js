import {Component} from 'react'
import {v4 as uuid} from 'uuid'
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

class Task extends Component {
  state = {
    taskName: '',
    taskTag: 'Health',
  }

  updateTaskName = e => {
    this.setState({taskName: e.target.value})
  }

  updateTaskTag = e => {
    this.setState({taskTag: e.target.value})
  }

  createNewTask = () => {
    const {updateNewTask} = this.props
    const {taskName, taskTag} = this.state
    const tag = taskTag.slice(0, 1) + taskTag.slice(1).toLocaleLowerCase()
    if (taskName !== '') {
      const newTask = {
        id: uuid(),
        taskName,
        taskTag: tag,
      }
      updateNewTask(newTask)
      this.setState({taskName: '', taskTag: 'Health'})
    }
  }

  render() {
    const {taskName, taskTag} = this.state
    return (
      <div className="create-task-container">
        <div className="task">
          <h1 className="headings">Create a task!</h1>
          <form className="form">
            <div className="input">
              <label htmlFor="task-name" className="text-label">
                Task
              </label>
              <br />
              <input
                type="text"
                placeholder="Enter the task here"
                className="text-input"
                value={taskName}
                id="task-name"
                onChange={this.updateTaskName}
              />
            </div>
            <div className="input">
              <label htmlFor="task-tag" className="text-label">
                Tags
              </label>
              <br />
              <select
                id="task-tag"
                value={taskTag}
                className="select-input"
                onChange={this.updateTaskTag}
              >
                {tagsList.map(item => (
                  <option key={item.optionId} value={item.optionId}>
                    {item.displayText}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="button"
              className="add-task-btn"
              onClick={this.createNewTask}
            >
              Add Task
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default Task
