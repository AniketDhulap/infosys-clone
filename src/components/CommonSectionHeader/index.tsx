import { Box, Container, useMediaQuery } from '@mui/material';
import React, { FC } from 'react';
import CommonHeading from '../CommonHeading';
import { theme } from '../../lib/theme';

interface ICommonSectionHeader {
	heading: string;
	tagline: string;
}

const verticleLineImg = require('../../assets/vertical-line.png');

const CommonSectionHeader: FC<ICommonSectionHeader> = ({
	heading,
	tagline,
}) => {
	const isDesktopScreen = useMediaQuery(theme.breakpoints.up('lg'));

	return (
		<Box
			sx={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				flexDirection: 'column',
			}}>
			<img src={verticleLineImg} alt="" />
			<CommonHeading
				heading={heading}
				args={{
					sx: { textShadow: 'none', color: 'var(--text-black)', my: 1.5 },
				}}
			/>
			<CommonHeading
				heading={tagline}
				args={{
					sx: {
						fontFamily: 'Myriad, Arial',
						fontSize: '40px',
						fontWeight: 100,
						textShadow: 'none',
						color: 'var(--text-gray)',
						lineHeight: '40px',
						textAlign: 'center',
						width: isDesktopScreen ? '60%' : '95%',
					},
				}}
			/>
		</Box>
	);
};

export default CommonSectionHeader;
