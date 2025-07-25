import { cx } from "class-variance-authority";
import React from "react";
import CheckIcon from "../assets/icons/check.svg?react";
import PencilIcon from "../assets/icons/pencil.svg?react";
import TrashIcon from "../assets/icons/trash.svg?react";
import XIcon from "../assets/icons/x.svg?react";
import ButtonIcon from "../components/button-icon";
import Card from "../components/card";
import InputCheckbox from "../components/input-checkbox";
import InputText from "../components/input-text";
import Text from "../components/Text";
import useTask from "../hooks/use-task";
import { TaskState, type Task } from "../models/task";

interface TaskItemProps  {
  task: Task
}


export default function TaskItem({task}:TaskItemProps) {
	const [isEditing, setIsEditing] = React.useState(task.state === TaskState.Creating);

   const [taskTitle, setTaskTitle] = React.useState(task.title || "")
   const {updateTask, updateTaskStatus, deleteTask} = useTask()

   function handleChangeTaskTitle(event: React.ChangeEvent<HTMLInputElement>) {
    setTaskTitle(event.target.value || "")
    
   }
   
   function handleSaveTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    updateTask(task.id, {title: taskTitle} )
    setIsEditing(false)
   }

  function handleEditTask() {
    setIsEditing(true)
  }
  function handleExitEditTask() {
    if(task.state ===  TaskState.Creating) {
      deleteTask(task.id)
    }
    setIsEditing(false)
  }

  function handleChangeTaskStatus(event: React.ChangeEvent<HTMLInputElement>) {
    const checked  = event.target.checked
    updateTaskStatus(task.id, checked )
  }

  function handleDeleteTask() {
    deleteTask(task.id)
  }


	return (
    
		<Card  size="md">
			{isEditing ? (
        <form onSubmit={handleSaveTask} className="flex gap-4 items-center">
				<InputText value={taskTitle}  className="flex-1" required autoFocus onChange={handleChangeTaskTitle} />
				<div className="flex gap-1"> 
        <ButtonIcon type="button" onClick={handleExitEditTask}  icon={XIcon} variant="secondary" /> 
        <ButtonIcon type="submit" icon={CheckIcon} variant="primary" />
				</div>
        </form>
			)
	: (
				<div className="flex gap-4 items-center">
					<InputCheckbox onChange={handleChangeTaskStatus} 
          checked={task?.conclude} />
					<Text className={cx("flex-1",{
            "line-through" : task?.conclude,
          } )}>{task?.title}</Text>
					<div className="flex gap-1">
					<ButtonIcon onClick={handleDeleteTask}   icon={TrashIcon} variant="tertiary" />
					<ButtonIcon  onClick={handleEditTask}  icon={PencilIcon} variant="tertiary" />
	        </div>
				</div>
			)
}
</Card>

	)
}
