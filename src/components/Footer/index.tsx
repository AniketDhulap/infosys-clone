import { Box, Container, Grid2, IconButton } from '@mui/material';
import { FC } from 'react';
import CommonHeading from '../CommonHeading';

import { ReactComponent as FacebookIcon } from '../../assets/social/facebook.svg';
import { ReactComponent as LinkedInIcon } from '../../assets/social/linkedin.svg';
import { ReactComponent as TwitterIcon } from '../../assets/social/twitter.svg';
import { ReactComponent as YoutubeIcon } from '../../assets/social/youtube.svg';

const CompanyLinks = {
	navigate: [
		{
			heading: 'Navigate your next',
			href: 'https://www.infosys.com/navigate-your-next.html',
		},
		{ heading: 'About Us', href: 'https://www.infosys.com/about.html' },
		{ heading: 'Careers', href: 'https://www.infosys.com/careers/' },
		{ heading: 'ESG', href: 'https://www.infosys.com/about/esg.html' },
		{ heading: 'Investors', href: 'https://www.infosys.com/investors.html' },
		{ heading: 'Newsroom', href: 'https://www.infosys.com/newsroom.html' },
		{ heading: 'Alumni', href: 'https://alumni.infosys.com/app-welcome' },
	],
	subsidiaries: [
		{ heading: 'EdgeVerve Systems', href: '#' },
		{ heading: 'Infosys BPM', href: '#' },
		{ heading: 'Infosys Consulting', href: '#' },
		{ heading: 'Infosys Public Services', href: '#' },
	],
	programs: [
		{ heading: 'Infosys Foundation', href: '#' },
		{ heading: 'Infosys Foundation USA', href: '#' },
		{ heading: 'Infosys Science Foundation', href: '#' },
		{ heading: 'Infosys Leadership Institute', href: '#' },
	],
	support: [
		{ heading: 'Terms of Use', href: '#' },
		{ heading: 'Privacy Statement', href: '#' },
		{ heading: 'Cookie Policy', href: '#' },
		{ heading: 'Safe Harbour Provision', href: '#' },
		{ heading: 'Site Map', href: '#' },
		{ heading: 'Modern Slavery Statement', href: '#' },
		{ heading: 'Payment Guide for Suppliers', href: '#' },
	],
};

const Footer: FC = () => {
	return (
		<Box>
			<Box sx={{ backgroundColor: '#f8f8f8', py: 6 }}>
				<Container>
					<Grid2 container spacing={4}>
						{Object.entries(CompanyLinks).map(([key, items]) => (
							<Grid2
								size={{ xs: 12, sm: 6, md: key === 'support' ? 3 : 2 }}
								key={key}>
								<CommonHeading
									heading={key.charAt(0).toUpperCase() + key.slice(1)}
									args={{
										sx: {
											fontFamily: 'Myriad-pro, Arial',
											fontSize: '22px',
											fontWeight: 900,
											textShadow: 'none',
											color: 'var(--text-black)',
											lineHeight: '35px',
											mb: 3,
										},
									}}
								/>
								{items.map((listItem, index) => (
									<a
										key={index}
										href={listItem.href}
										target="_blank"
										rel="noreferrer"
										style={{
											textTransform: 'capitalize',
											display: 'block',
											color: '#5d5d5d',
											fontWeight: 300,
											textDecoration: 'none',
											paddingBottom: 15,
										}}>
										{listItem.heading}
									</a>
								))}
							</Grid2>
						))}
						<Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
							<CommonHeading
								heading="Connect with us"
								args={{
									sx: {
										fontFamily: 'Myriad-pro, Arial',
										fontSize: '22px',
										fontWeight: 900,
										textShadow: 'none',
										color: 'var(--text-black)',
										lineHeight: '35px',
										mb: 3,
									},
								}}
							/>
							<Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
								<IconButton
									aria-label="twitter"
									href="https://twitter.com"
									target="_blank">
									<TwitterIcon style={{ width: 18, height: 18 }} />
								</IconButton>
								<IconButton
									aria-label="facebook"
									href="https://facebook.com"
									target="_blank">
									<FacebookIcon style={{ width: 18, height: 18 }} />
								</IconButton>
								<IconButton
									aria-label="linkedin"
									href="https://linkedin.com"
									target="_blank">
									<LinkedInIcon style={{ width: 18, height: 18 }} />
								</IconButton>
								<IconButton
									aria-label="instagram"
									href="https://instagram.com"
									target="_blank">
									<YoutubeIcon style={{ width: 18, height: 18 }} />
								</IconButton>
							</Box>
						</Grid2>
					</Grid2>
				</Container>
			</Box>
			<Box sx={{ backgroundColor: 'var(--text-white)', py: 3 }}>
				<Container>
					<CommonHeading
						heading="Copyright © 2024 Infosys Limited"
						args={{
							sx: {
								fontFamily: 'Myriad, Arial',
								fontSize: '18px',
								fontWeight: 300,
								textShadow: 'none',
								color: 'var(--text-gray)',
								lineHeight: '35px',
							},
						}}
					/>
				</Container>
			</Box>
		</Box>
	);
};

export default Footer;
