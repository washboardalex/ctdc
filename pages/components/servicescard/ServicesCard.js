import styles from './ServicesCard.module.scss';

import Fade from 'react-reveal/Fade';

const ServicesCard = () => (
	<div className={`row ${styles.serviceCardContainer}`}>
		<div className={`col-12 ${styles.serviceHeadingContainer}`} >
			<h1 id="servicessection" className={`${styles.serviceHeading}`}>OUR SERVICES</h1>
		</div>
		<div className="col-12">
			<div className="row">
				<Fade left>
				<div className={`col-lg-4 col-md-6 col-sm-12 ${styles.serviceAssetContainer}`} >
					<div className={`${styles.circle} ${styles.dentureImg}`}>
					</div>		
					<div className={`${styles.serviceAssetContainer}`}>
						<h3>Dentures</h3>
					</div>
				</div>
				</Fade>
				<div className={`col-lg-4 col-md-6 col-sm-12 ${styles.serviceAssetContainer}`} >
					<div className={`${styles.circle} ${styles.repairsImg}`}>
					</div>		
					<div className={`${styles.serviceAssetContainer}`}>
						<h3>Repairs</h3>
					</div>
				</div>
				<Fade right>
				<div className={`col-lg-4 col-md-6 col-sm-12 ${styles.serviceAssetContainer}`} >
					<div className={`${styles.circle} ${styles.mouthguardImg}`}>
					</div>		
					<div className={`${styles.serviceAssetContainer}`}>
						<h3>Mouthguards</h3>
					</div>
				</div>
				</Fade>
			</div>
		</div>
	</div>
);

export default ServicesCard;