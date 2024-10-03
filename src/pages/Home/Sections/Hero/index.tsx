import { Box, Grid2, useMediaQuery } from '@mui/material';
import { FC } from 'react';
import Slider from 'react-slick';

import './style.css';
import { ISLIDER_LIST } from '../../../../utils/interface';
import { COLORS, theme } from '../../../../lib/theme';
import ButtonComponent from '../../../../components/ButtonComponent/ButtonComponent';
import CommonHeading from '../../../../components/CommonHeading';

const SLIDER_LIST: ISLIDER_LIST[] = [
	{
		id: 1,
		tagline:
			'Infosys and The Financial Times Unveil the ‘FT Money Machine’ Through Immersive Extended Reality Experience',
		meta: '',
		buttonHref:
			'https://www.infosys.com/newsroom/press-releases/2024/ft-money-machine.html',
		buttonText: 'Know more',
		image: require('../../../../assets/slider/ft-money-machine-lead.avif'),
	},
	{
		id: 2,
		tagline: 'Launched Infosys Aster: The AI-amplified Marketing Suite',
		meta: '',
		buttonHref:
			'https://www.infosys.com/newsroom/press-releases/2024/launched-ai-amplified-marketing-suite.html',
		buttonText: 'Know more',
		image: require('../../../../assets/slider/ai-amplified-marketing-suite-lead.webp'),
	},
	{
		id: 3,
		tagline: 'Champions Evolve.',
		meta: 'Digital-First | Cloud-First | AI-First',
		buttonHref: 'https://www.infosys.com/championsevolve.html',
		buttonText: 'Know more',
		image: require('../../../../assets/slider/iga-swiatek-leadimg.webp'),
	},
	{
		id: 4,
		tagline: 'Cloud Survey Report 2024',
		meta: '',
		buttonHref:
			'https://www.infosys.com/newsroom/press-releases/2024/reimagining-cloud-strategy-ai-first-enterprises.html',
		buttonText: 'Know more',
		image: require('../../../../assets/slider/reimagining-cloud-strategy-ai-first-enterprises-lead.avif'),
	},
];

const Hero: FC = () => {
	const isDesktopScreen = useMediaQuery(theme.breakpoints.up('lg'));

	const settings = {
		dots: true,
		infinite: false,
		speed: 250,
		slidesToShow: 1,
		slidesToScroll: 1,
		appendDots: (dots: any) => (
			<div style={{ position: 'absolute', bottom: '40px', width: '100%' }}>
				<ul style={{ margin: '0', padding: '0' }}>{dots}</ul>
			</div>
		),
		dotsClass: 'slick-dots',
	};
	return (
		<Box
			sx={{
				height: isDesktopScreen ? '100vh' : '60vh',
				background: COLORS.BLUE_DARK,
				overflow: 'hidden',
			}}
			className="slider-container">
			<Slider {...settings}>
				{SLIDER_LIST.map((sliderItem, key) => (
					<Box
						key={key}
						sx={{
							height: isDesktopScreen ? '100vh' : '60vh',
							outline: 'none',
							position: 'relative',
						}}>
						<img
							src={sliderItem.image}
							alt=""
							style={{
								height: '100%',
								width: '100%',
								objectFit: 'cover',
								objectPosition: 'right',
							}}
						/>

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
							<Grid2 size={{ xs: 12, sm: 6, md: 2 }}></Grid2>
							<Grid2
								size={{ xs: 12, sm: 12, md: 4 }}
								sx={{
									position: 'relative',
									display: 'flex',
									justifyContent: 'left',
									alignItems: 'center',
									pl: isDesktopScreen ? 0 : 2,
								}}>
								<Box>
									<CommonHeading heading={sliderItem.tagline} />
									{sliderItem.meta && (
										<CommonHeading
											heading={sliderItem.meta}
											args={{
												sx: {
													fontSize: '16px',
													fontFamily: 'Myriad-pro, Arial',
													fontWeight: 600,
													wordSpacing: 8,
													textTransform: 'uppercase',
													my: -2,
												},
											}}
										/>
									)}
									<ButtonComponent
										buttonText={sliderItem.buttonText}
										buttonProps={{ sx: { mt: 3 } }}
									/>
								</Box>
							</Grid2>
							<Grid2 size={{ xs: 12, sm: 6, md: 6 }}></Grid2>
						</Grid2>
					</Box>
				))}
			</Slider>
		</Box>
	);
};
export default Hero;
