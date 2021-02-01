import NavBar from './components/navbar/NavBar';
import LandingCard from './components/landingcard/LandingCard';
import About from './components/about/About';
import ServicesCard from './components/servicescard/ServicesCard';
import ContactCard from './components/contactcard/ContactCard';
import BookingCard from './components/bookingcard/BookingCard';
import MapContainer from './components/mapview/MapContainer';
import BackToTopButton from './components/backtotopbutton/BackToTopButton';

import { Link, Element } from 'react-scroll';

import './styles/index.module.scss';


const Index = () => (
	<div className="index-doc">
		<NavBar />
		<div className="container-fluid">
			<LandingCard/>
			<About />
			<ServicesCard />
			<MapContainer />
			<BookingCard />
			<ContactCard />
		</div>
		<BackToTopButton />
    </div>
    
);

export default Index;