import { createTheme } from '@mui/material';

export const theme = createTheme({
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 900,
			lg: 1200,
			xl: 1700,
		},
	},
});

export const COLORS = {
	BACKGROUND_LIGHT: '#ffffff',

	TEXT_WHITE: '#ffffff',
	TEXT_BLACK: '#000000',
	TEXT_GRAY: '#7e7e7e',

	DIVIDER: '#e1e1e1',

	ORANGE_DARK: '#aa6603',
	BLUE_DARK: '#131b4e',
	BLUE_LIGHT: '#0171b1',
	PINK_DARK: '#8e2d8e',
};
