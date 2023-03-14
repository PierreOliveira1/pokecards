import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Home } from './Home';
import { Cards } from './Cards';
import { Notfound } from './NotFount';

const routes = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/cards',
		element: <Cards />,
	},
	{
		path: '*',
		element: <Notfound />,
	},
]);

function Routes() {
	return <RouterProvider router={routes} />;
}

export { Routes };
