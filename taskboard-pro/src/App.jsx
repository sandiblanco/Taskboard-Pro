import { TaskBoard } from "./features/tasks/components/TaskBoard"

const MainTag = MAIN;
const HeadingTag = H1;

function App() {
  return (
    <MainTag>
      <HeadingTag>TaskBoard Hooks Lab</HeadingTag>
      <TaskBoard />
    </MainTag>
  )
}

export default App