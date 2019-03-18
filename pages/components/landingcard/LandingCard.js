import './LandingCard.scss';

import Fade from 'react-reveal/Fade';
import { Link, animateScroll as scroll } from 'react-scroll';

const LandingCard = () => (

	<div className="row no-gutters card-container card-container-margin">
		<div className="col-12 landing-image-container">
			<div className="phrase-container">
				<div className="banner-text">
					<p className="d-none d-md-block">Restore What is Missing, Protect What Remains</p>
					<p className="d-block d-md-none mobile-screen-banner-text">Restore What is Missing</p>
					<p className="d-block d-md-none mobile-screen-banner-text">Protect What Remains</p>
				</div>
				<Link
          activeClass="active"
          to="bookingsection"
          spy={true}
          smooth={true}
          offset={-25}
          duration= {800}
        >
					<button className="booking-button">
						Book Now
						<div className="booking-button__horizontal"></div>
						<div className="booking-button__vertical"></div>
					</button>
				</Link>
			</div>
		</div>
	</div>
	
);

export default LandingCard;