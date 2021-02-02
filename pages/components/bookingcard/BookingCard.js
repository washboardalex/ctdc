import React, { Component } from 'react';

import Fade from 'react-reveal/Fade';

import CalendlyWidget from './components/calendlywidget/CalendlyWidget';



import styles from './BookingCard.module.scss';
import styles2 from '../landingcard/LandingCard.module.scss';

class BookingCard extends Component {

	componentDidMount() {
		//Adds script tag for calendly widget
    const body = document.querySelector('body');
    const script = document.createElement('script');
    script.setAttribute('src',  'https://assets.calendly.com/assets/external/widget.js');
    script.setAttribute('type','text/javascript')
    body.appendChild(script);
  }

	render() {
		return (
			<div className={`${styles.bookingCardMargin}`}>
				<div id="bookingsection" className="row">
					<Fade top>
					<div style={{marginBottom:'20px'}} className="d-block d-lg-none col-12">
						<div className="row">
							<div className={`${styles.bookingCardHeadContainer} col-12`}>
								<h1 className={`${styles.bookingHeading}`}>BOOK NOW</h1>
							</div>
							<div className={`col-12 ${styles.bookingText}`}>
								<p>We have provided an online booking form to make your booking process as easy as possible. If you prefer to book over the phone or via email, please do not hesitate to contact us on 0450 260 650, or send an email to cleveland.tooth@gmail.com. </p>
							</div>
							<div className={`col-12 ${styles.bookingText}`}>
								<p>Aside from the home clinic, Ana also works at the Aboriginal and Torres Strait Islander Health Service - this means that during the week she is often unavailable.  If none of the times available work for you, please let us know and we will do our best to find an appointment time that is mutually suitable.</p>
							</div>
						</div>		
					</div>
					</Fade>
					<div className="col-lg-6 col-md-12">
                        <iframe src="https://bookings.nookal.com/bookings/company/VBMMX/VMTRS" width="800" height="600" style={{border: '0px solid #CCCCCC', height: 700, borderRadius: '3px', width: '100%'}}></iframe>
					</div>
					<div className="d-none d-lg-block col-lg-6 col-md-12">
						<div className="row">
							<div className={`${styles.bookingCardHeadContainer} col-12`}>
								<h1 className={`${styles.bookingHeading}`}>BOOK NOW</h1>
							</div>
							<div className={`col-12 ${styles.bookingText}`}>
								<p>We have provided an online booking form to make your booking process as easy as possible. If you prefer to book over the phone or via email, please do not hesitate to contact us on 0450 260 650, or send an email to cleveland.tooth@gmail.com. </p>
							</div>
							<div className={`col-12 ${styles.bookingText}`}>
								<p>Aside from the home clinic, Ana also works at the Aboriginal and Torres Strait Islander Health Service - this means that during the week she is often unavailable.  If none of the times available work for you, please let us know and we will do our best to find an appointment time that is mutually suitable.</p>
							</div>
                            <div style={{display:'flex', justifyContent: 'center', alignItems: 'center', width: '100%'}}>
                                <button className={`${styles2.bookingButton}`} onClick={() => window.open('https://bookings.nookal.com/bookings/company/VBMMX','_blank')}>
                                    Book Online
                                    <div className={`${styles2.bookingButton__horizontal}`}></div>
                                    <div className={`${styles2.bookingButton__vertical}`}></div>
                                </button>
                                
                            </div>
						</div>		
					</div>
				</div>
			</div>
		);
	}
}
	

export default BookingCard;