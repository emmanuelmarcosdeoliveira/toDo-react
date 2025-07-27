import Badge from "../components/badge";
import Text from "../components/Text";

import UseTasks from "../hooks/use-tasks";

export default function TasksSummary() {
	const {createdTasksCount, concludeTasksCount, isLoadingTask} = UseTasks()
  
  return (

		<>
			<div className="flex gap-2 items-center">
				<Text className="!text-gray-300" variant="body-sm-bold">
					Tarefas Criadas
				</Text>
				<Badge loading={isLoadingTask} variant="secondary">{createdTasksCount}</Badge>
			</div>

			<div className="flex gap-2 items-center">
				<Text className="!text-gray-300" variant="body-sm-bold">
					Concluídas
				</Text>
				<Badge loading={isLoadingTask} variant="primary">{concludeTasksCount} de {createdTasksCount}</Badge>
			</div>
		</>
	);
}
