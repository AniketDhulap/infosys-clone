import SearchIcon from '@mui/icons-material/Search';

import { AppBar, Box, Grid2, IconButton, useMediaQuery } from '@mui/material';
import { MENU_LIST } from '../../constants/constants';
import { IMENU_LIST } from '../../utils/interface';
import LogoComponent from '../Logo';
import './style.css';
import { COLORS, theme } from '../../lib/theme';

const MENU_ICON = require('../../assets/icons/menus.png');

const Header = () => {
	const isDesktopScreen = useMediaQuery(theme.breakpoints.up('lg'));
	return (
		<AppBar
			sx={{
				minHeight: '120px',
				boxShadow: 'none',
				position: 'fixed',
				top: 0,
				backgroundColor: 'transparent',
				display: 'flex',
				justifyContent: 'center',
				zIndex: 999,
			}}
			position="relative">
			<Grid2 container spacing={2} className="header-wrapper">
				<Grid2 size={isDesktopScreen ? 2 : 1}></Grid2>
				<Grid2 size={3}>
					<LogoComponent />
				</Grid2>
				<Grid2 size={5}>
					{isDesktopScreen && (
						<Box className="menu-list" sx={{ mx: 5 }}>
							{MENU_LIST.map((menuItem: IMENU_LIST, index) => (
								<a
									href={menuItem.href}
									key={index}
									className="menu-item"
									target="_blank"
									rel="noreferrer"
									style={{ textShadow: '0 0 5px #030e21' }}>
									{menuItem.heading}
								</a>
							))}
						</Box>
					)}
				</Grid2>
				<Grid2 size={2} className="search-hamburger-wrapper">
					<IconButton
						sx={{
							width: '45px',
							height: '45px',
							mr: 4,
						}}>
						<SearchIcon sx={{ color: 'var(--text-white)' }} />
					</IconButton>
					<IconButton
						sx={{
							width: '45px',
							height: '45px',
							mr: isDesktopScreen ? 7 : 0,
							background: COLORS.BACKGROUND_LIGHT,
						}}>
						<img src={MENU_ICON} alt="" className="menu-icon" height={24} />
					</IconButton>
				</Grid2>
			</Grid2>
		</AppBar>
	);
};

export default Header;
