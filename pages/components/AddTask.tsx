import styles from "./AddTask.module.css"

const AddTask = () => {
  return (
    <div className={styles.contents}>
      <input type="text" className={styles.form}></input>
      <button className={styles.btn}>submit</button>
    </div>
  )
}

export default AddTask
