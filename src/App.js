import { BrowserRouter, Link, Outlet, useRoutes } from "react-router-dom";
import Homepage from "./pages/homepage";
import Cart from "./components/cart/cart";
import Validation from "./components/validation";

function App() {
	const routes = useRoutes([
		{ path: "/", element: <Homepage /> },
		{ path: "/cart", element: <Cart /> },
		{ path: "/cart/checkout", element: <Validation /> },
	]);

	return routes;
}

export default App;
