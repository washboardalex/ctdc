import './ServicesCard.scss';

import Fade from 'react-reveal/Fade';

const ServicesCard = () => (
	<div className="row service-card-container">
		<div className="col-12 service-heading-container" >
			<h1 id="servicessection" className="service-heading">OUR SERVICES</h1>
		</div>
		<div className="col-12">
			<div className="row">
				<Fade left>
				<div className="col-lg-4 col-md-6 col-sm-12 service-asset-container" >
					<div className="circle denture-img">
					</div>		
					<div className="service-asset-container">
						<h3>Dentures</h3>
					</div>
				</div>
				</Fade>
				<Fade bottom>
				<div className="col-lg-4 col-md-6 col-sm-12 service-asset-container" >
					<div className="circle repairs-img">
					</div>		
					<div className="service-asset-container">
						<h3>Repairs</h3>
					</div>
				</div>
				</Fade>
				<Fade right>
				<div className="col-lg-4 col-md-6 col-sm-12 service-asset-container" >
					<div className="circle mouthguard-img">
					</div>		
					<div className="service-asset-container">
						<h3>Mouthguards</h3>
					</div>
				</div>
				</Fade>
			</div>
		</div>
	</div>
);

export default ServicesCard;