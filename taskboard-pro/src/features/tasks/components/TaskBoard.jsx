import { useState } from "react"
import { TaskForm } from "./TaskForm"
import { TaskList } from "./TaskList"
import { TASK_UI_TEXT } from "../constants/task-ui.constants"
import { HTML_TAGS } from "../../../shared/constants/html-tags.constants"

export function TaskBoard() {
  const [taskText, setTaskText] = useState("")
  const [tasks, setTasks] = useState([])

  const TitleTag = HTML_TAGS.H2;
  const SectionTag = HTML_TAGS.SECTION;

  const handleTaskTextChange = (event) => {
    setTaskText(event.target.value) //Si quiero cambiar el estado desde un hijo, se hace así, se le pasa una función al hijo y el hijo la ejecuta con el nuevo valor
  }

  const handleAddTask = () => {
    if (taskText.trim() === "") {
      return
    }

    const newTask = {
      id: Date.now(),
      title: taskText,
      completed: false,
    }

    setTasks([...tasks, newTask])
    setTaskText("")
  }

  return (
    <SectionTag>
      <TitleTag>{TASK_UI_TEXT.BOARD_TITLE}</TitleTag>

      <TaskForm
        taskText={taskText}
        onTaskTextChange={handleTaskTextChange}
        onAddTask={handleAddTask}
      />

      <TaskList tasks={tasks} />
    </SectionTag>
  )
}