import { GetServerSideProps } from "next"
import styles from "../styles/Home.module.css"
import { TaskListsProps } from "../type/types"
import AddTask from "./components/AddTask"
import TaskLists from "./components/TaskLists"
import Head from "next/head"

const Home = ({tasks}: TaskListsProps) => {
  return (
    <>
      <Head>
        <title>TodoApp</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.wrapper}>
          <h1 className={styles.heading}>TodoApp</h1>
          <AddTask />
          <TaskLists tasks={ tasks } />
        </div>
      </main>
    </>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps<TaskListsProps> = async () => {
  const res = await fetch("http://localhost:3001/tasks");
  const tasks = await res.json();
  return { props: { tasks } }
}
