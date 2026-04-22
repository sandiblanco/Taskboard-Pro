import { TASK_UI_TEXT } from "../constants/task-ui.constants"
import { HTML_TAGS } from "../../../shared/constants/html-tags.constants"

const TitleTag = HTML_TAGS.H3;
const SectionTag = HTML_TAGS.SECTION;
const ParagraphTag = HTML_TAGS.P;
const UnorderedListTag = HTML_TAGS.UL;
const ListItemTag = HTML_TAGS.LI;

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