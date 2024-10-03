import { Box, Container } from '@mui/material';
import { FC, useState } from 'react';
import CommonSectionHeader from '../../../../components/CommonSectionHeader';
import CommonHeading from '../../../../components/CommonHeading';

const Careers: FC = () => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<Container sx={{ py: 8 }}>
			<CommonSectionHeader
				heading="Careers"
				tagline="Every Infoscion is the navigator of our clients’ digital transformation"
			/>
			<Box
				sx={{
					my: 8,
					height: '500px',
					display: 'flex',
					alignItems: 'center',
					position: 'relative',
					overflow: 'hidden',
					cursor: 'pointer',
				}}
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}>
				<img
					src={require('../../../../assets/careers-video-img.avif')}
					alt=""
					style={{
						height: '100%',
						width: '100%',
						objectFit: 'cover',
						objectPosition: 'right',
						transition: 'transform 0.5s ease-in-out',
						transform: isHovered ? 'scale(1.1)' : 'scale(1)',
					}}
				/>
				<CommonHeading
					heading="Life at Infosys"
					args={{
						sx: {
							fontFamily: 'Myriad, Arial',
							fontSize: '25px',
							fontWeight: 400,
							textShadow: 'none',
							color: 'var(--text-white)',
							lineHeight: '35px',
							position: 'absolute',
							bottom: 30,
							left: 30,
						},
					}}
				/>
			</Box>
		</Container>
	);
};

export default Careers;
