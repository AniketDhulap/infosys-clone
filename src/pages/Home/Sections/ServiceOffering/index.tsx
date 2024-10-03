import { Container, Grid2, IconButton, useMediaQuery } from '@mui/material';
import React, { FC } from 'react';
import AddIcon from '@mui/icons-material/Add';

import CommonHeading from '../../../../components/CommonHeading';
import { theme } from '../../../../lib/theme';

interface IServiceOfferingData {
	heading: string;
	buttonAction: () => void;
}
const ServiceOfferingData: IServiceOfferingData[] = [
	{
		heading: 'Service offerings',
		buttonAction: () => {},
	},
	{
		heading: 'Explore industries',
		buttonAction: () => {},
	},
	{
		heading: 'Our platforms',
		buttonAction: () => {},
	},
	{
		heading: 'Navigate your next',
		buttonAction: () => {},
	},
];

const ServiceOffering: FC = () => {
	const isDesktopScreen = useMediaQuery(theme.breakpoints.up('lg'));
	return (
		<Container>
			<Grid2 container sx={{ mb: 8 }}>
				{ServiceOfferingData.map((ServiceOfferingDataItem, key) => (
					<Grid2
						size={{ xs: 6, sm: 6, md: 3 }}
						key={key}
						sx={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							flexDirection: 'column',
							cursor: 'pointer',
							mb: isDesktopScreen ? 0 : 4,
						}}>
						<CommonHeading
							heading={ServiceOfferingDataItem.heading}
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
									width: '40%',
									textAlign: 'center',
								},
							}}
						/>
						<IconButton
							sx={{
								color: 'var(--text-white)',
								backgroundColor: 'var(--text-black)',
								height: '30px',
								width: '30px',
								mt: 1,
							}}>
							<AddIcon />
						</IconButton>
					</Grid2>
				))}
			</Grid2>
		</Container>
	);
};

export default ServiceOffering;
