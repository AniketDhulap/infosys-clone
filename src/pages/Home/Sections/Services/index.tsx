import { Container, Grid2 } from '@mui/material';
import { FC } from 'react';
import CommonAnimatedImageBox, {
	ICommonAnimatedImageBox,
} from '../../../../components/CommonAnimatedImageBox';
import CommonSectionHeader from '../../../../components/CommonSectionHeader';

const GridData: ICommonAnimatedImageBox[] = [
	{
		heading: 'Insight',
		subHeading: 'Do 100x more. Do it yourself',
		description: 'Build an analytics-driven enterprise to monetize data',
		isScroll: true,
		image: require('../../../../assets/service/insight.avif'),
		href: 'https://www.infosys.com/navigate-your-next/digital-capabilities/insight.html',
	},
	{
		heading: 'Innovate',
		subHeading: 'Bridge the physical and digital, with software and platforms',
		description:
			'Engineer digital-first products and offerings to create new revenue streams',
		isScroll: true,
		image: require('../../../../assets/service/innovate.avif'),
		href: 'https://www.infosys.com/navigate-your-next/digital-capabilities/innovate.html',
	},
	{
		heading: 'Accelerate',
		subHeading: 'Keep your core. Keep innovating',
		description: 'Find your path to non-disruptive renewal of IT landscapes',
		isScroll: true,
		image: require('../../../../assets/service/accelerate.avif'),
		href: 'https://www.infosys.com/navigate-your-next/digital-capabilities/accelerate.html',
	},
	{
		heading: 'Assure',
		subHeading: 'Digital-trust. Assured.',
		description:
			'To be the catalyst for growth by solving complex cybersecurity problems, minimizing risks and building cyber resilience for your businesses across the globe',
		isScroll: true,
		image: require('../../../../assets/service/assure.webp'),
		href: 'https://www.infosys.com/navigate-your-next/digital-capabilities/assure.html',
	},
];
const Services: FC = () => {
	return (
		<Container sx={{ py: 10 }}>
			<CommonSectionHeader
				heading="The next"
				tagline="We bring you powerful advantages to navigate your digital transformation"
			/>
			<Grid2 container sx={{ mt: 5 }}>
				<Grid2 size={{ xs: 12, sm: 12, md: 6 }}>
					<CommonAnimatedImageBox
						heading="Experience"
						subHeading="Design-led transformation. From brand to
                    experience"
						description="Create unified digital experiences
                    to enhance customer experience and build loyalty"
						isScroll={true}
						image={require('../../../../assets/service/experience.avif')}
						href="https://www.infosys.com/navigate-your-next/digital-capabilities/experience.html"
					/>
				</Grid2>
				<Grid2 size={{ xs: 12, sm: 12, md: 6 }} container>
					<Grid2 container>
						{GridData.map((gridItem, key) => (
							<Grid2 size={{ xs: 6, sm: 6, md: 6 }} key={key}>
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

export default Services;
