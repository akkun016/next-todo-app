import styles from "./TaskLists.module.css"

const TaskLists = () => {
  return (
    <div>
      <ul className={styles.lists}>
        <li className={styles.list}>
          <span>散歩</span>
        </li>
        <li className={styles.list}>
          <span>散歩</span>
        </li>
        <li className={styles.list}>
          <span>散歩</span>
        </li>
      </ul>
    </div>
  )
}

export default TaskLists
