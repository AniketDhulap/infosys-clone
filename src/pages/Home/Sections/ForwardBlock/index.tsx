import { Box, Container, useMediaQuery } from '@mui/material';
import { FC, useState } from 'react';
import ButtonComponent from '../../../../components/ButtonComponent/ButtonComponent';
import CommonHeading from '../../../../components/CommonHeading';
import { theme } from '../../../../lib/theme';

const ForwardBlock: FC = () => {
	const [isHovered, setIsHovered] = useState(false);
	const isDesktopScreen = useMediaQuery(theme.breakpoints.up('lg'));

	return (
		<Container
			sx={{
				mb: 8,
				height: '400px',
				display: 'flex',
				alignItems: 'center',
				position: 'relative',
				overflow: 'hidden',
				cursor: 'pointer',
			}}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}>
			<img
				src={require('../../../../assets/launches-new-sonic-identity-lead.avif')}
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
			<Box
				sx={{
					pl: isDesktopScreen ? 8 : 3,
					position: 'absolute',
					width: '100%',
				}}>
				<CommonHeading
					heading="Ring the Sound of Opportunity, Move 1,000+1,000 Lives Forward"
					args={{
						sx: {
							fontFamily: 'Myriad-pro, Arial',
							fontSize: '40px',
							fontWeight: 900,
							textShadow: 'none',
							color: 'var(--text-white)',
							lineHeight: '40px',
							width: isDesktopScreen ? '55%' : '90%',
						},
					}}
				/>
				<ButtonComponent
					buttonText="Read More"
					buttonProps={{ sx: { mt: 6 } }}
				/>
			</Box>
		</Container>
	);
};

export default ForwardBlock;
