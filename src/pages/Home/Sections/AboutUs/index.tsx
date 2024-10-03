import { Box, Container, Grid2, useMediaQuery } from '@mui/material';
import React, { FC } from 'react';
import CommonSectionHeader from '../../../../components/CommonSectionHeader';
import CommonAnimatedImageBox, {
	ICommonAnimatedImageBox,
} from '../../../../components/CommonAnimatedImageBox';
import CommonHeading from '../../../../components/CommonHeading';
import { theme } from '../../../../lib/theme';

interface INewsList {
	heading: string;
	href: string;
}
const GridData: ICommonAnimatedImageBox[] = [
	{
		heading: 'Infosys Q1 FY25 Results - Archived Webcast',
		subHeading: '',
		description: '',
		isScroll: false,
		image: require('../../../../assets/about/quarterly-results-q1fy25-thumb.avif'),
		href: 'https://www.infosys.com/investors/reports-filings/quarterly-results/2024-2025/q1/press-meet.html',
	},
	{
		heading: 'The Future of Work 2023 Report',
		subHeading: '',
		description: '',
		isScroll: false,
		image: require('../../../../assets/about/future-work2023-thumb.avif'),
		href: 'https://www.infosys.com/services/digital-workplace-services/nextatwork.html',
	},
	{
		heading:
			'ESG is a business necessity, and offers short-term financial benefits now',
		subHeading: '',
		description: '',
		isScroll: false,
		image: require('../../../../assets/about/esg-thumb.avif'),
		href: 'https://www.infosys.com/about/esg/insights/esg-radar-report.html',
	},
	{
		heading:
			'Why are enterprises moving their applications to the cloud? – An Infosys research',
		subHeading: '',
		description: '',
		isScroll: false,
		image: require('../../../../assets/about/cloud-applications-research.avif'),
		href: 'https://www.infosys.com/services/cloud-cobalt/insights/enterprise-cloud-apps.html',
	},
];

const NewsList: INewsList[] = [
	{
		heading:
			'Infosys announces Strategic Collaboration with Sally Beauty to Bring Enterprise-scale IT Efficiencies from Hyper-automation',
		href: 'https://www.infosys.com/newsroom/press-releases/2024/collaboration-enterprise-scale-hyper-automation.html',
	},
	{
		heading:
			'Infosys and Polestar Enter Strategic Collaboration by opening Technology Hub in Bengaluru, India',
		href: 'https://www.infosys.com/newsroom/press-releases/2024/strategic-collaboration-opening-technology-hub.html',
	},
	{
		heading:
			'Infosys Foundation Enables Record-Setting Volunteering Initiative: Over 200,000 Seedballs Made for Reforestation Projects across India',
		href: 'https://www.infosys.com/newsroom/press-releases/2024/record-setting-volunteering-initiative.html',
	},
];

const AboutUs: FC = () => {
	const isDesktopScreen = useMediaQuery(theme.breakpoints.up('lg'));

	return (
		<Container sx={{ py: 8, mt: isDesktopScreen ? 0 : 10 }}>
			<CommonSectionHeader
				heading="About us"
				tagline="A global leader in next-generation digital services and consulting"
			/>
			<Grid2 container sx={{ mt: 5 }}>
				<Grid2
					size={{ xs: 12, sm: 12, md: 5 }}
					sx={{ background: 'var(--orange-light)', p: 4 }}>
					<CommonHeading
						heading="In the news"
						args={{
							sx: {
								fontFamily: 'Myriad-pro, Arial',
								fontSize: '35px',
								fontWeight: 900,
								textShadow: 'none',
								color: 'var(--text-white)',
								lineHeight: '35px',
								mb: 1.5,
							},
						}}
					/>
					{NewsList.map((newsItem, key) => (
						<Box
							key={key}
							sx={{
								cursor: 'pointer',
								borderTop: '1px solid #ca8a21',
							}}
							onClick={() => {
								window.open(newsItem.href);
							}}>
							<CommonHeading
								heading={newsItem.heading}
								args={{
									sx: {
										fontFamily: 'Myriad, Arial',
										fontSize: '18px',
										fontWeight: 600,
										textShadow: 'none',
										mb: '15px',
										lineHeight: '30px',
										pt: 2.5,
										pb: 1.5,
									},
								}}
							/>
						</Box>
					))}
					<Box sx={{ backgroundColor: 'var(--orange-dark)', py: 1, px: 5 }}>
						<CommonHeading
							heading="Launched today: Infosys Topaz - An AI-first offering to accelerate business value for global enterprises using generative AI"
							args={{
								sx: {
									fontFamily: 'Myriad, Arial',
									fontSize: '21px',
									fontWeight: 700,
									textShadow: 'none',
									lineHeight: '30px',
									pt: 2.5,
									pb: 1.5,
								},
							}}
						/>
					</Box>
				</Grid2>
				<Grid2 size={{ xs: 12, sm: 12, md: 7 }} container>
					<Grid2 container>
						{GridData.map((gridItem, key) => (
							<Grid2 size={6} key={key}>
								<CommonAnimatedImageBox
									heading={gridItem.heading}
									subHeading={gridItem.subHeading}
									description={gridItem.description}
									isScroll={gridItem.isScroll}
									image={gridItem.image}
									href={gridItem.href}
								/>
							</Grid2>
						))}
					</Grid2>
				</Grid2>
			</Grid2>
		</Container>
	);
};

export default AboutUs;
