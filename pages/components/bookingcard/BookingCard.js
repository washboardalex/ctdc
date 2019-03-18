import React, { Component } from 'react';

import Fade from 'react-reveal/Fade';

import CalendlyWidget from './components/calendlywidget/CalendlyWidget';



import './BookingCard.scss';

class BookingCard extends Component {

	constructor() {
		super();
		this.state = {
			isSmallWindow: false
		}
	}

	componentDidMount() {
		//Adds script tag for calendly widget
    const body = document.querySelector('body');
    const script = document.createElement('script');
    script.setAttribute('src',  'https://assets.calendly.com/assets/external/widget.js');
    script.setAttribute('type','text/javascript')
    body.appendChild(script);

    //adds window listener for reorganising text and calendly elements
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);
  }

  componentWillUnmount() {
        window.removeEventListener("resize", this.updatePredicate);
    }

  updatePredicate = () => {
      this.setState({ isSmallWindow: (window.innerWidth < 994) });
  }

	render() {
		const isSmallWindow = this.state.isSmallWindow;
		return (

			<div className="booking-card-margin">
				<div className="row">
					{isSmallWindow &&
						<Fade top>
						<div className="col-12">
							<div className="row">
								<div className="booking-card-head-container col-12">
									<h1 id="bookingsection" className="booking-heading">BOOK NOW</h1>
								</div>
								<div className="col-12 booking-text">
									<p>We have provided an online booking form to make your booking process as convenient as possible - if you prefer to book over the phone or via email, please do not hesitate to contact us on 0450 260 650, or send an email to cleveland.tooth@gmail.com. </p>
								</div>
								<div className="col-12 booking-text">
									<p>Aside from the home clinic, Ana also works at the Aboriginal and Torres Strait Islander Health Service - this means that during the week she is often unavailable.  If none of the times below work for you, please let us know and we will do our best to find an appointment time that is mutually suitable.</p>
								</div>
							</div>		
						</div>
						</Fade>
					}
					<div className="col-lg-6 col-md-12">
						<div className="row no-pad no-gutters booking-card-container">
							<div className="col-12 calendly-container">
									<CalendlyWidget />
							</div>
						</div>
					</div>
					{!isSmallWindow &&
						<Fade right>
						<div className="col-6">
							<div className="row">
								<div className="booking-card-head-container col-12">
									<h1 id="bookingsection" className="booking-heading">BOOK NOW</h1>
								</div>
								<div className="col-12 booking-text">
									<p>We have provided an online booking form to make your booking process as convenient as possible - if you prefer to book over the phone or via email, please do not hesitate to contact us on 0450 260 650, or send an email to cleveland.tooth@gmail.com. </p>
								</div>
								<div className="col-12 booking-text">
									<p>Aside from the home clinic, Ana also works at the Aboriginal and Torres Strait Islander Health Service - this means that during the week she is often unavailable.  If none of the times below work for you, please let us know and we will do our best to find an appointment time that is mutually suitable.</p>
								</div>
							</div>		
						</div>
						</Fade>
					}
				</div>
			</div>
		);
	}
}
	

export default BookingCard;