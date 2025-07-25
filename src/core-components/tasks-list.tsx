import PlusIcon from "../assets/icons/plus.svg?react"
import Button from '../components/button'
import useTask from "../hooks/use-task"
import UseTasks from "../hooks/use-tasks"
import { TaskState, type Task } from "../models/task"
import TaskItem from "./task-item"


export default function TasksList() {
  const {tasks, isLoadingTask} = UseTasks()
  const {prepareTask} = useTask()
 


function handleNewTask() {
  prepareTask()
}

  return (
   <>
   <section >
    <Button className="w-full"
     icon={PlusIcon} onClick={handleNewTask}
     disabled={tasks.some((task) => task.state === TaskState.Creating) || isLoadingTask}
     >Nova Tarefa</Button>
   </section>
   <section className="space-y-2">
    {!isLoadingTask && tasks.map((task) => (
    <TaskItem key={task.id} task={task} />
     ))}
     {isLoadingTask && <>
      <TaskItem task={ {} as Task} loading />
      <TaskItem task={ {} as Task} loading />
      <TaskItem task={ {} as Task}  loading />
      <TaskItem task={ {} as Task} loading />
      </>
       }
        </section>
   </>
  )
}
