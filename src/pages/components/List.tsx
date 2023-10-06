import styles from "./List.module.css"
import { DeleteTask } from "../../api/tasks"
import { Task } from "@/src/type/types";
import { useRouter } from "next/navigation";

interface TaskProps {
  task: Task;
}

const List = ({task}: TaskProps) => {
  const router = useRouter();
  const deleteClick = async () => {
    await DeleteTask(task.id);
    router.refresh();
  }

  return (
    <li className={styles.list}>
      <span>{task.text}</span>
      <button className={styles.delete} onClick={deleteClick}>削除</button>
    </li>
  )
}

export default List
