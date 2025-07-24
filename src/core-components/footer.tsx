import { NavLink } from "react-router";
import Text from "../components/Text";

export default function Footer() {
	return (
		<>
			<nav className="flex items-center justify-center gap-4">
				<NavLink to="/">
					<Text className="text-gray-300" variant="body-md">
						Tarefas
					</Text>
				</NavLink>
				<NavLink to="/componentes">
					<Text className="text-gray-300" variant="body-md">
						Componentes
					</Text>
				</NavLink>
			</nav>
			)
		</>
	);
}
