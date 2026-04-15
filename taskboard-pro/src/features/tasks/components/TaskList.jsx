import { TASK_UI_TEXT } from "../constants/task-ui.constants"

const TitleTag = H3;
const SectionTag = SECTION;
const ParagraphTag = P;
const UnorderedListTag = UL;
const ListItemTag = LI;

export function TaskList({ tasks }) {
  return (
    <SectionTag>
      <TitleTag>{TASK_UI_TEXT.LIST_TITLE}</TitleTag>

      {tasks.length === 0 ? (
        <ParagraphTag>{TASK_UI_TEXT.EMPTY_MESSAGE}</ParagraphTag>
      ) : (
        <UnorderedListTag>
          {tasks.map((task) => (
            <ListItemTag key={task.id}>{task.title}</ListItemTag>
          ))}
        </UnorderedListTag>
      )}
    </SectionTag>
  )
}