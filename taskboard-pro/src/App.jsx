import { TaskBoard } from "./features/tasks/components/TaskBoard"
import { HTML_TAGS } from "./shared/constants/html-tags.constants"

const MainTag = HTML_TAGS.MAIN;
const HeadingTag = HTML_TAGS.H1;

function App() {
  return (
    <MainTag>
      <HeadingTag>TaskBoard Hooks Lab</HeadingTag>
      <TaskBoard />
    </MainTag>
  )
}

export default App