import { Typography, TypographyProps, useMediaQuery } from '@mui/material';
import React, { FC } from 'react';
import { theme } from '../../lib/theme';

interface ICommonHeading {
	heading: React.ReactNode;
	args?: TypographyProps;
}

const CommonHeading: FC<ICommonHeading> = ({ heading, args }) => {
	const isDesktopScreen = useMediaQuery(theme.breakpoints.up('lg'));
	const isTabletScreen = useMediaQuery(theme.breakpoints.up('md'));
	const isMobileScreen = useMediaQuery(theme.breakpoints.down('sm'));

	const defaultSx = {
		color: 'var(--text-white)',
		fontSize: isDesktopScreen
			? '70px'
			: isTabletScreen
			? '55px'
			: isMobileScreen
			? '35px'
			: '45px',
		fontWeight: 500,
		lineHeight: isDesktopScreen
			? '70px'
			: isTabletScreen
			? '55px'
			: isMobileScreen
			? '35px'
			: '45px',
		fontFamily: 'Tungstun, Oswald, sans-serif',
		textShadow: '0 0 5px #030e21',
	};

	const mergedSx = args && args.sx ? { ...defaultSx, ...args.sx } : defaultSx;

	const typographyProps = { ...args, sx: mergedSx };

	return <Typography {...typographyProps}>{heading}</Typography>;
};

export default CommonHeading;
