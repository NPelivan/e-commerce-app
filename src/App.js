import { BrowserRouter, Link, Outlet, useRoutes } from "react-router-dom";
import Homepage from "./pages/homepage";

function App() {
	const routes = useRoutes([{ path: "/", element: <Homepage /> }]);

	return routes;
}

export default App;
