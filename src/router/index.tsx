import { createBrowserRouter } from 'react-router-dom';
import PageLayout from '../pageLayout';
import Home from '../pages/Home';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <PageLayout />,
		children: [{ path: '/', element: <Home /> }],
	},
]);
