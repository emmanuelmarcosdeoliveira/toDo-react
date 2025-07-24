/** biome-ignore-all lint/nursery/useSortedClasses: <explanation> */
import CheckIcon from "../assets/icons/check.svg?react";
import PencilIcon from "../assets/icons/pencil.svg?react";
import PlusIcon from "../assets/icons/plus.svg?react";
import SpinnerIcon from "../assets/icons/spinner.svg?react";
import TrashIcon from "../assets/icons/trash.svg?react";
import XIcon from "../assets/icons/x.svg?react";
import Badge from "../components/badge";
import Button from "../components/button";
import ButtonIcon from "../components/button-icon";
import Card from "../components/card";
import Container from "../components/container";
import Icon from "../components/icon";
import InputCheckbox from "../components/input-checkbox";
import InputText from "../components/input-text";
import Skeleton from "../components/skeleton";
import Text from "../components/Text";

export default function PageComponents() {
	return (
		<Container>
			<Text as="p"> Manu</Text>
			<div className="space-y-4">
				<Icon animate className="fill-green-base size-11" svg={TrashIcon} />
				<Icon animate className="fill-green-base size-11" svg={PencilIcon} />
				<Icon className="fill-green-base size-11" svg={PlusIcon} />
				<Icon className="fill-green-base size-11" svg={SpinnerIcon} />
				<Icon className="fill-pink-dark size-11" svg={XIcon} />
				<Icon className="fill-pink-dark size-11" svg={CheckIcon} />
			</div>
			<div className="flex gap-1">
				<Badge variant="secondary">5</Badge>
				<Badge variant="primary">2 de 5</Badge>
				<Badge loading variant="primary">
					2 de 5
				</Badge>
			</div>
			<div>
				<Button icon={PlusIcon}>Nova tarefa</Button>
			</div>
			<div className="flex items-center">
				<ButtonIcon icon={TrashIcon} />
				<ButtonIcon icon={TrashIcon} variant="secondary" />
				<ButtonIcon icon={TrashIcon} variant="tertiary" />
				<ButtonIcon icon={TrashIcon} loading variant="tertiary" />
			</div>
			<div>
				<InputText />
			</div>
			<div className="flex gap-2">
				<InputCheckbox />
				<InputCheckbox loading />
			</div>
			<div>
				<Card size="md">Olá Mundo</Card>
			</div>
			<div className="space-y-2">
				<Skeleton className="h-3" />
				<Skeleton className="h-3" />
				<Skeleton className="H-3 w-96" />
			</div>
		</Container>
	);
}
