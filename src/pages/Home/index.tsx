import { FC } from 'react';

import Hero from './Sections/Hero';
import InfoBlocks from './Sections/InfoBlocks';
import Services from './Sections/Services';
import ServiceOffering from './Sections/ServiceOffering';
import ForwardBlock from './Sections/ForwardBlock';
import Purpose from './Sections/Purpose';
import AboutUs from './Sections/AboutUs';
import Careers from './Sections/Careers';

const Home: FC = () => {
	return (
		<>
			<Hero />
			<InfoBlocks />
			<Services />
			<ServiceOffering />
			<ForwardBlock />
			<Purpose />
			<AboutUs />
			<Careers />
		</>
	);
};
export default Home;
