import styles from './About.module.scss';

const About = () => (
	<React.Fragment>
	<div className="row">
		<div className={`col-12 ${styles.aboutUsHeadContainer}`}>
			<div className={`${styles.aboutUsHeading}`}>
				<h1 id="aboutsection">ABOUT US</h1>
			</div>
		</div>
		<div className={`col-12 ${styles.aboutUsSectionContainer}`}>
			<div className="row">
				<div className={`col-12 ${styles.aboutUsComponent}`}>
					<div className="row">
						<div className={`col-12 ${styles.subComponentHeading}`}>
							<h3>Our Staff</h3>
						</div>
					</div>
					<div className={`row ${styles.staffCardWrapper}`}>
						<div className={`col-12 ${styles.staffCard2ndOrder}`}>
							<div style={{height:'100%'}} className={`${styles.staffCard}`}>
								<div style={{height:'100%'}} className="row">
									<div className="col-lg-5 col-md-12">	
										<div style={{height:'100%'}} className={`${styles.staffCircleContainer}`}>
											<div className={`${styles.staffCircle} ${styles.imgAna}`}>
										</div>
										</div>
									</div>
									<div style={{height:'100%'}} className={`col-lg-7 col-md-12 ${styles.staffTextContainer}`}>
										<div style={{paddingTop:'20px', paddingLeft:'20px', marginRight:'20px'}} >
											<h5>Ana Gujas - Owner and Prosthetist</h5>
											<p className={`${styles.staffCardPText}`}>Our Prosthetist, Ana Gujas, has forty years experience in the health industry. She has an Advanced Diploma in Dental Prosthetics and is a registered practitioner with the Dental Board of Australia.</p>
											<p className={`${styles.staffCardPText}`}>She currently works as the Prosthetist for the Aboriginal and Torres Strait Islander Community Health Service in Woolloongabba and is owner-operator for Cleve-Tooth Denture Clinic.</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className={`col-12 ${styles.staffCard2ndOrder}`}>
							<div className={`${styles.staffCard}`}>
								<div style={{height:'100%'}} className="row">
									<div style={{height:'100%'}} className="col-lg-5 col-md-12">	
										<div className={`${styles.staffCircleContainer}`}>
											<div className={`${styles.staffCircle} ${styles.imgAlex}`}>
										</div>
										</div>
									</div>
									<div style={{height:'100%'}} className={`col-lg-7 col-md-12 ${styles.staffTextContainer}`}>
										<div style={{paddingTop:'20px', paddingLeft:'20px', marginRight:'20px'}} >
											<h5>Alex Gujas - Admin and Finance</h5>
											<p className={`${styles.staffCardPText}`}> Alex handles scheduling, invoices, administration and compliance. If Ana is not available using our usual contact information, please call 0450 260 650 and Alex will be happy to assist.</p>
											<p className={`${styles.staffCardPText}`}>He has been working at this family run business since its founding in 2006.</p>
										</div>
									</div>
								</div>
							</div>
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