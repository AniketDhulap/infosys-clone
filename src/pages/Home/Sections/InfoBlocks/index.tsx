import { Grid2, useMediaQuery } from '@mui/material';
import { Box } from '@mui/system';
import { FC } from 'react';
import ButtonComponent from '../../../../components/ButtonComponent/ButtonComponent';
import CommonHeading from '../../../../components/CommonHeading';
import { theme } from '../../../../lib/theme';

interface IInfoBlockMoreInfo {
	heading: string;
	info: string;
	buttonText: string;
	buttonHref: string;
}

interface IInfoBlock {
	id: string;
	heading: string;
	meta: string;
	buttonText: string;
	buttonAction?: () => void;
	backgroundColor: string;
	moreInfo: IInfoBlockMoreInfo[];
	image: string;
}

interface IInfoGrid {
	infoItem: IInfoBlock;
	isLeft?: boolean;
}

const InfoBlockData: IInfoBlock[] = [
	{
		id: 'capabilities',
		heading: 'Digital Core Capabilities',
		meta: 'Build vital capabilities to deliver digital outcomes.',
		buttonText: 'Explore',
		image: require('../../../../assets/info/digital-capabilities-lead.png'),
		buttonAction: () => {},
		backgroundColor: 'var(--orange-dark)',
		moreInfo: [
			{
				heading: 'Case studies',
				info: "Pfizer's journey towards increased productivity, powered by AI",
				buttonText: 'View',
				buttonHref:
					'https://www.infosys.com/navigate-your-next/digital-capabilities/insight/intelligent-automation.html',
			},
			{
				heading: '',
				info: 'A government that contributes to the joy of parenting',
				buttonText: 'View',
				buttonHref:
					'https://www.infosys.com/navigate-your-next/digital-capabilities/accelerate/born-smart.html',
			},
		],
	},
	{
		id: 'model',
		heading: 'Digital Operating Model',
		meta: 'For the AI-first Enterprise',
		buttonText: 'Explore',
		image: require('../../../../assets/info/digital-operating-models-lead.png'),
		buttonAction: () => {},
		backgroundColor: 'var(--blue-dark)',
		moreInfo: [
			{
				heading: 'Client Speak',
				info: 'A transformation story of BASF Agricultural Solutions to achieve faster time-to-market using DevOps and DataOps',
				buttonText: 'View',
				buttonHref:
					'https://www.infosys.com/services/agile-devops/case-studies/basf-agriculture-solutions.html',
			},
			{
				heading: 'Client Testimonial',
				info: 'NN Life Insurance Company Partners with Infosys for its Cloud and Agile Transformation',
				buttonText: 'View',
				buttonHref:
					'https://www.infosys.com/industries/insurance/case-studies/cloud-agile-transformation.html',
			},
		],
	},
	{
		id: 'transformations',
		heading: 'Empowering Talent Transformations',
		meta: 'Embrace the talent revolution to remain relevant in the future.',
		buttonText: 'Explore',
		image: require('../../../../assets/info/talent-transformations-lead.png'),
		buttonAction: () => {},
		backgroundColor: 'var(--pink-dark)',
		moreInfo: [
			{
				heading: 'Insights',
				info: "Pfizer's journey towards increased productivity, powered by AI",
				buttonText: 'View',
				buttonHref:
					'https://www.infosys.com/iki/perspectives/digital-field-workforce-management.html',
			},
			{
				heading: '',
				info: 'Developing talent for our digital future',
				buttonText: 'View',
				buttonHref:
					'https://www.infosys.com/insights/human-potential/impactful-organization.html',
			},
		],
	},
];

const InfoGrid: FC<IInfoGrid> = ({ infoItem, isLeft }) => {
	const isDesktopScreen = useMediaQuery(theme.breakpoints.up('lg'));

	return (
		<Grid2
			size={{ xs: 12, sm: 12, md: !isLeft ? 3.5 : 4 }}
			sx={{
				position: 'relative',
				display: 'flex',
				justifyContent: isDesktopScreen ? 'left' : 'center',
				alignItems: isDesktopScreen ? 'flex-start' : 'center',
				mt: '5%',
				pl: isDesktopScreen && isLeft ? 0 : 4,
			}}>
			<Box>
				<CommonHeading
					heading={infoItem.heading}
					args={{ sx: { textShadow: 'none' } }}
				/>

				<CommonHeading
					heading={infoItem.meta}
					args={{
						sx: {
							mt: -1,
							mb: -0.5,
							fontFamily: 'Myriad, Arial',
							fontSize: '20px',
							fontWeight: 400,
							textShadow: 'none',
							fontStyle: 'italic',
						},
					}}
				/>

				<ButtonComponent
					buttonText={infoItem.buttonText}
					buttonProps={{ sx: { mt: 3 } }}
				/>
				{isDesktopScreen && (
					<Grid2 container>
						{infoItem.moreInfo.map((moreInfoItem, key) => (
							<Grid2 key={key} size={4.5} sx={{ pr: 1.5 }}>
								<CommonHeading
									heading={moreInfoItem.heading}
									args={{
										sx: {
											fontFamily: 'Myriad, Arial',
											fontSize: '14px',
											fontWeight: 300,
											textShadow: 'none',
											letterSpacing: '1.5px',
											textTransform: 'uppercase',
											height: '65px',
											mt: 1,
										},
									}}
								/>
								<CommonHeading
									heading={moreInfoItem.info}
									args={{
										sx: {
											fontFamily: 'Myriad-pro, Arial',
											fontSize: '25px',
											fontWeight: 700,
											textShadow: 'none',
											letterSpacing: '1.5px',
											mb: '15px',
											lineHeight: '30px',
										},
									}}
								/>
								<a
									href={moreInfoItem.buttonHref}
									className="menu-item"
									target="_blank"
									rel="noreferrer"
									style={{
										textTransform: 'uppercase',
									}}>
									{moreInfoItem.buttonText}
								</a>
							</Grid2>
						))}
					</Grid2>
				)}
			</Box>
		</Grid2>
	);
};

const InfoImageGrid: FC<IInfoGrid> = ({ infoItem, isLeft }) => {
	const isDesktopScreen = useMediaQuery(theme.breakpoints.up('lg'));

	return (
		<Grid2
			size={{ xs: 12, sm: 12, md: 6 }}
			sx={{
				position: 'relative',
				display: 'flex',
				justifyContent: 'left',
				alignItems: 'center',
			}}>
			<img
				src={infoItem.image}
				alt=""
				style={{
					height: '100%',
					width: '100%',
					objectFit: 'cover',
					objectPosition: !isLeft ? 'left' : 'right',
				}}
			/>
		</Grid2>
	);
};

const InfoBlocks: FC = () => {
	const isDesktopScreen = useMediaQuery(theme.breakpoints.up('lg'));
	return (
		<>
			{InfoBlockData.map((infoItem, index) => {
				let isLeft = (index + 1) % 2 !== 0;
				return (
					<Box
						key={index}
						sx={{
							height: isDesktopScreen ? '95vh' : '45vh',
							backgroundColor: infoItem.backgroundColor,
							position: 'relative',
						}}>
						<Grid2
							container
							spacing={2}
							sx={{
								position: 'absolute',
								top: 0,
								left: 0,
								width: '100%',
								height: '100%',
							}}>
							{isLeft ? (
								<>
									<Grid2 size={2}></Grid2>

									<InfoGrid infoItem={infoItem} isLeft={isLeft} />
									<InfoImageGrid infoItem={infoItem} isLeft={isLeft} />
								</>
							) : (
								<>
									<InfoImageGrid infoItem={infoItem} isLeft={isLeft} />
									<Grid2 size={0.5}></Grid2>
									<InfoGrid infoItem={infoItem} isLeft={isLeft} />
									<Grid2 size={2}></Grid2>
								</>
							)}
						</Grid2>
					</Box>
				);
			})}
		</>
	);
};

export default InfoBlocks;
