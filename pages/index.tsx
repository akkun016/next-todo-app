import styles from "../styles/Home.module.css"
import { TaskListsProps } from "./types"
import AddTask from "./components/AddTask"
import TaskLists from "./components/TaskLists"
import { GetServerSideProps, NextPage } from "next"

const Home: NextPage<TaskListsProps> = ({ tasks }) => {
  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
      <h1 className={styles.heading}>TodoApp</h1>
      <AddTask />
      <TaskLists tasks={tasks}/>
      </div>
    </main>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("http://localhost:3001/tasks");
  const tasks = await res.json();
  return { props: { tasks } }
}