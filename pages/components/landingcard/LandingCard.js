import styles from './LandingCard.module.scss';

import Fade from 'react-reveal/Fade';
import { Link, animateScroll as scroll } from 'react-scroll';

const LandingCard = () => (

	<div className={`row no-gutters ${styles.cardContainer} ${styles.cardContainerMargin}`}>
		<div className={`col-12 ${styles.landingImageContainer}`}>
			<div className={`${styles.phraseContainer}`}>
				<div className={`${styles.bannerText}`}>
					<p className={`d-none d-md-block`}>Restore What is Missing, Protect What Remains</p>
					<p className={`d-block d-md-none ${styles.mobileScreenBannerText}`}>Restore What is Missing</p>
					<p className={`d-block d-md-none ${styles.mobileScreenBannerText}`}>Protect What Remains</p>
				</div>
				<Link
          activeClass="active"
          to="bookingsection"
          spy={true}
          smooth={true}
          offset={-25}
          duration= {800}
        >
					<button className={`${styles.bookingButton}`}>
						Book Now
						<div className={`${styles.bookingButton__horizontal}`}></div>
						<div className={`${styles.bookingButton__vertical}`}></div>
					</button>
				</Link>
			</div>
		</div>
	</div>
	
);

export default LandingCard;