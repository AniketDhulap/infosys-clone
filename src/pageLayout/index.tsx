import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

import Header from '../components/Header';
import './pageLayout.css';
import Footer from '../components/Footer';

const PageLayout = () => {
	return (
		<Box>
			<Header />

			<Box component="main">
				<Outlet />
			</Box>

			<Footer />
		</Box>
	);
};

export default PageLayout;
