import CheckIcon from "./assets/icons/check.svg?react";
import PencilIcon from "./assets/icons/pencil.svg?react";
import PlusIcon from "./assets/icons/plus.svg?react";
import SpinnerIcon from "./assets/icons/spinner.svg?react";
import TrashIcon from "./assets/icons/trash.svg?react";
import XIcon from "./assets/icons/x.svg?react";
import Badge from "./components/badge";
import Button from "./components/button";
import ButtonIcon from "./components/button-icon";
import Icon from "./components/icon";
import Text from "./components/Text";

export default function App() {
	return (
		<>
			<Text as="p" variant="body-md-bold">
				Texto de Exemplo
			</Text>

			<Text as="p" variant="body-md">
				Novo
			</Text>

			<Text as="p" variant="body-sm-bold">
				Novo 2
			</Text>
			<div className="space-y-4">
				<Icon animate className="size-11 fill-green-base" svg={TrashIcon} />
				<Icon animate className="size-11 fill-green-base" svg={PencilIcon} />
				<Icon className="size-11 fill-green-base" svg={PlusIcon} />
				<Icon className="size-11 fill-green-base" svg={SpinnerIcon} />
				<Icon className="size-11 fill-pink-dark" svg={XIcon} />
				<Icon className="size-11 fill-pink-dark" svg={CheckIcon} />
			</div>
			<div className="p-4">
				<Badge variant="secondary">5</Badge>
				<Badge variant="primary">2 de 5</Badge>
			</div>
			<div>
				<Button icon={PlusIcon}>Nova tarefa</Button>
			</div>
			<div>
				<ButtonIcon icon={TrashIcon} />
				<ButtonIcon icon={TrashIcon} variant="secondary" />
				<ButtonIcon icon={TrashIcon} variant="tertiary" />
			</div>
		</>
	);
}
