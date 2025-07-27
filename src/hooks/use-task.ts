import React from "react";
import useLocalStorage from "use-local-storage";
import { delay } from "../helpers/utils";
import { TASKS_KEY, TaskState, type Task } from "../models/task";

export default function useTask() {
  const [tasks, setTasks] = useLocalStorage<Task[]>(TASKS_KEY, [])
  const [isUpdateTask, setIsUpdateTask] = React.useState(false)
  const [isDeletingTask, setIsDeletingTask] = React.useState(false)
 
 
  function prepareTask(){
    setTasks([...tasks, {
      id: Math.random().toString(36).substring(2, 9), 
      title: "",  
      state: TaskState.Creating, 

    }] )

  }

async function updateTask(id: string, payload: {title: Task["title"]}) {
  setIsUpdateTask(true)
  await delay(1000)

  setTasks(
    tasks.map((task) => task.id === id ? {...task, state: TaskState.Created, ...payload } : task)
  )
  setIsUpdateTask(false)
}

function updateTaskStatus(id: string, conclude: boolean ) {
  setTasks(tasks.map((task) => task.id === id? {...task, conclude} : task  ))
}

  async function deleteTask(id: string) {
    setIsDeletingTask(true)
    await delay(1000)
    setTasks(tasks.filter((task) => task.id !== id ))
    setIsDeletingTask(false)
  }


  return {
    prepareTask, 
    updateTask, 
    updateTaskStatus, 
    deleteTask, 
   isUpdateTask, 
   isDeletingTask
  }

}
