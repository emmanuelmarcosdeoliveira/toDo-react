import { BrowserRouter, Route, Routes } from "react-router";
import { ToastContainer } from "react-toastify";
import LayoutMain from "./pages/layout-main";
import PageHome from "./pages/page-home";

export default function App() {
  return (
		<BrowserRouter>
			<ToastContainer />
			<Routes>
				<Route element={<LayoutMain />}>
					<Route element={<PageHome />} index />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
