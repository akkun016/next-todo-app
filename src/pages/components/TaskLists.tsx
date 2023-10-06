import { TaskListsProps } from "../../type/types"
import List from "./List"
import styles from "./TaskLists.module.css"

const TaskLists = ({ tasks }: TaskListsProps) => {
  return (
    <div>
      <ul className={styles.lists}>
        {tasks.map((task) => (
          <List key={task.id} task={task}></List>
        ))}
      </ul>
    </div>
  )
}

export default TaskLists
