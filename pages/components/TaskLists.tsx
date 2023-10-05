import { Task, TaskListsProps } from "../api/types"
import styles from "./TaskLists.module.css"

const TaskLists = ({ tasks }: TaskListsProps) => {
  return (
    <div>
      <ul className={styles.lists}>
        {tasks.map((task: Task) => (
          <li className={styles.list} key={task.id}>
            <span>{task.text}</span>
            <button className={styles.delete}>削除</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TaskLists
