import styles from "./List.module.css"
import { DeleteTask } from "../api/tasks"
import { Task } from "@/src/pages/type/types";

interface TaskProps {
  task: Task;
}

const List = ({task}: TaskProps) => {
  const deleteClick = async () => {
    await DeleteTask(task.id);
  }

  return (
    <li className={styles.list}>
      <span>{task.text}</span>
      <button className={styles.delete} onClick={deleteClick}>削除</button>
    </li>
  )
}

export default List
