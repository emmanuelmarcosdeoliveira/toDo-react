import React from "react"
import useLocalStorage from "use-local-storage"
import { delay } from "../helpers/utils"
import { TASKS_KEY, TaskState, type Task } from "../models/task"



export default function UseTasks() {
 const [tasksData] = useLocalStorage<Task[]>(TASKS_KEY, [])
 const [tasks, setTasks]  = React.useState<Task[]>([])
 const [isLoadingTask, setIsLoadingTask]  = React.useState(true) 

 async function fetchTasks() {
  if(isLoadingTask) {
    await delay(2000)
    setIsLoadingTask(false)
  }
  setTasks(tasksData)
 }


 React.useEffect(() => {
  fetchTasks()
 },[tasksData])  

  return {
    tasks,
    createdTasksCount: tasks.filter((task) => task.state === TaskState.Created ).length, 
    concludeTasksCount: tasks.filter((task) => task.conclude).length,
    isLoadingTask
  } 

}
