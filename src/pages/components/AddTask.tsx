import { useState, FormEvent } from "react"
import { useRouter } from "next/navigation";
import styles from "./AddTask.module.css"
import { PostTask } from "../../api/tasks";
import { v4 as uuidv4 } from 'uuid';

const AddTask = () => {
  const router = useRouter();
  const [taskText, setTaskText] = useState("");
  const [inputExplanation, setInputExplanation] = useState("");

  const submitClick = async (e: FormEvent) => {
    e.preventDefault();
    if (taskText !== "") {
      await PostTask({id: uuidv4(), text: taskText})

      setTaskText("")
      router.refresh();
    } else {
      setInputExplanation("未入力です")
    }
  }

  return (
    <form className={styles.contents} onSubmit={submitClick}>
      <input
        className={styles.form}
        type="text"
        onChange={(e) =>
          setTaskText(e.target.value)
        }
        value={taskText}
      ></input>
      <span className={styles.text}>{inputExplanation}</span>
      <button className={styles.btn}>submit</button>
    </form>
  )
}

export default AddTask
