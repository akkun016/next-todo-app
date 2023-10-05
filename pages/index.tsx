import styles from "../styles/Home.module.css"
import handler from "./api/tasks"
import AddTask from "./components/AddTask"
import TaskLists from "./components/TaskLists"

const Home = (tasks) => {
  console.log(tasks);

  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
      <h1 className={styles.heading}>TodoApp</h1>
      <AddTask />
      <TaskLists />
      </div>
    </main>
  )
}

export default Home

export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:3001/tasks");
  const tasks = await res.json();

  return { props: { tasks } }
}