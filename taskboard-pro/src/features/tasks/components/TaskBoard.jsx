import { useState } from "react"
import { TaskForm } from "./TaskForm"
import { TaskList } from "./TaskList"

export function TaskBoard() {
  const [taskText, setTaskText] = useState("")
  const [tasks, setTasks] = useState([])

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
    <section>
      <h2>Gestión de tareas</h2>

      <TaskForm
        taskText={taskText}
        onTaskTextChange={handleTaskTextChange}
        onAddTask={handleAddTask}
      />

      <TaskList tasks={tasks} />
    </section>
  )
}