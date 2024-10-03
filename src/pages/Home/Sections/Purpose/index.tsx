import { Box, Container } from '@mui/material';
import React, { FC } from 'react';
import CommonHeading from '../../../../components/CommonHeading';
import './style.css';

const Purpose: FC = () => {
	return (
		<Container sx={{ height: '300px' }}>
			<Box
				sx={{
					border: '3px solid #92d1ff',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					flexDirection: 'column',
					p: 9,
				}}
				className="our-purpose">
				<CommonHeading
					heading="Out Purpose:"
					args={{
						sx: {
							textShadow: 'none',
							color: 'var(--text-black)',
							my: 1.5,
							fontWeight: 700,
						},
					}}
				/>
				<CommonHeading
					heading="To amplify human potential and create the next opportunity for people, businesses and communities"
					args={{
						sx: {
							fontFamily: 'Myriad-pro, Arial',
							fontSize: '25px',
							fontWeight: 700,
							textShadow: 'none',
							mb: '5px',
							lineHeight: '30px',
							transition: 'opacity 0.5s ease-in-out',
							color: 'var(--text-black)',
							textAlign: 'center',
						},
					}}
				/>
			</Box>
		</Container>
	);
};

export default Purpose;
