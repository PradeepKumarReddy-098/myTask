import {Component} from 'react'
import Task from '../CreateTask'
import TaskTags from '../TaskTags'
import './index.css'

class MyTask extends Component {
  state = {
    taskList: [],
    activeTag: '',
  }

  updateNewTask = task => {
    this.setState(prevState => ({
      taskList: [...prevState.taskList, task],
    }))
  }

  changeActiveTag = tag => {
    this.setState({activeTag: tag})
  }

  render() {
    const {taskList, activeTag} = this.state
    return (
      <div className="my-task-container">
        <Task updateNewTask={this.updateNewTask} />
        <TaskTags
          taskList={taskList}
          activeTag={activeTag}
          changeTag={this.changeActiveTag}
        />
      </div>
    )
  }
}

export default MyTask
