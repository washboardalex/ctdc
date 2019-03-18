import './About.scss';
import Fade from 'react-reveal/Fade';

const About = () => (
	<React.Fragment>
	<div style={{marginTop:'40px'}} className="row">
		<div className="col-12 about-us-head-container">
			<div className="about-us-heading">
				<h1 id="aboutsection">ABOUT US</h1>
			</div>
		</div>
		<div className="col-12 about-us-section-container">
			<div className="row">
				<div className="col-12 about-us-component">
					<div className="row">
						<div className="col-12 sub-component-heading">
							<h3>Our Staff</h3>
						</div>
					</div>
					<div className="row staff-card-wrapper">
						<div className="col-12 staff-card-2nd-order">
							<Fade top>
							<div style={{height:'100%'}} className="staff-card">
								<div style={{height:'100%'}} className="row">
									<div className="col-lg-5 col-md-12">	
										<div style={{height:'100%'}} className="staff-circle-container">
											<div className="staff-circle img-ana">
										</div>
										</div>
									</div>
									<div style={{height:'100%'}} className="col-lg-7 col-md-12 staff-text-container">
										<div style={{paddingTop:'20px', paddingLeft:'20px', marginRight:'20px'}} >
											<h5>Ana Gujas - Owner and Prosthetist</h5>
											<p className="staff-card-p-text">Our Prosthetist, Ana Gujas, has forty years experience in the health industry. She has an Advanced Diploma in Dental Prosthetics and is a registered practitioner with the Dental Board of Australia.</p>
											<p className="staff-card-p-text">She currently works as the Prosthetist for the Aboriginal and Torres Strait Islander Community Health Service in Woolloongabba and is owner-operator for Cleve-Tooth Denture Clinic.</p>
										</div>
									</div>
								</div>
							</div>
							</Fade>
						</div>
						<div className="col-12 staff-card-2nd-order">
							<Fade bottom>
							<div className="staff-card">
								<div style={{height:'100%'}} className="row">
									<div style={{height:'100%'}} className="col-lg-5 col-md-12">	
										<div className="staff-circle-container">
											<div className="staff-circle img-alex">
										</div>
										</div>
									</div>
									<div style={{height:'100%'}} className="col-lg-7 col-md-12 staff-text-container">
										<div style={{paddingTop:'20px', paddingLeft:'20px', marginRight:'20px'}} >
											<h5>Alex Gujas - Admin and Finance</h5>
											<p className="staff-card-p-text"> Alex handles scheduling, invoices, administration and compliance. If Ana is not available using our usual contact information, please call 0450 260 650 and Alex will be happy to assist.</p>
											<p className="staff-card-p-text">He has been working at this family run business since its founding in 2006.</p>
										</div>
									</div>
								</div>
							</div>
							</Fade>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div className="row">
		<div className="landing-break-image"></div>
	</div>
	</React.Fragment>
)

export default About;