import React, { Component } from 'react';

import Fade from 'react-reveal/Fade';
import ReactLoading from 'react-loading';

import styles from './ContactForm.module.scss';

class ContactForm extends Component {
	
	constructor() {
	  super();
	  this.state = { 
	  	firstName: '',
	  	lastName: '',
	  	phoneNumber: '',
	  	emailAddress: '',
	  	messageText: '',
			
			firstNameValid: true,
			phoneNumberValid: true,
			formValid: false,
			
			loadingState: 'pre-load',

			isLoading: false,
			error: false,
			submitted: false
	  }
	}

	onChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		this.setState({
			[name]: value
		}, () => { this.validateField(name, value) });
	}

	validateField = (fieldName, value) => {
	  this.setState({
      [fieldName.concat("Valid")]:(value.length > 0)
    }, 
    this.validateForm);
	}

	validateForm = () => {
	  this.setState(prevState => ({
	  	formValid: 	this.state.firstNameValid && this.state.phoneNumberValid
		}));
	}

	onSubmit = () => {

		this.validateField('firstName', this.state.firstName);
		this.validateField('phoneNumber', this.state.phoneNumber);

		const { firstName, lastName, phoneNumber, emailAddress, messageText } = this.state;
		const data = { firstName, lastName, phoneNumber, emailAddress, messageText };

		if (this.state.formValid === true) {
			
			this.setState(prevState =>({ loadingState: 'loading' }));

			fetch('/api/contact', { // '/api/contact'
	      method: 'post',
	      headers: {
	        'Accept': 'application/json, text/plain, */*',
	        'Content-Type': 'application/json'
	      },
	      body: JSON.stringify(data)
	    }).then((res) => {
	      res.status === 200 ? this.setState({ loadingState: 'submitted' }) : this.setState({loadingState: 'error'})
	    })
		}
	}

	render () {
		return (
			<div className={`${styles.contactFormBackground}`}>
				<div className={`col-12 ${styles.contactFormAlign}`}>
					<div className={`row ${styles.contactFormContainer} ${styles.contactFormContainerWidth}`}>
						<div className={`col-12 ${styles.contactFormHeading}`}>
							<h1 name="contactsection">CONTACT</h1>
						</div>
						<div className={`col-6 ${styles.alignContactInputs}`}>
							<div className={`${styles.contactInputWrapper}`}>
								<input 
									name="firstName" 
									value={this.state.firstName}
									onChange={(e) => this.onChange(e)} 
									placeholder="First Name (required)" 
									type="text" 
									className={`${styles.contactFormInput} ${this.state.firstNameValid ? '' : `${styles.contactFormErrorClass}`}`} 
								/>
							</div>
			      </div>
			      <div className={`col-6 ${styles.alignContactInputs}`}>
							<div className={`${styles.contactInputWrapper}`}>
								<input  
									name="lastName"  
									value={this.state.lastName}
									onChange={(e) => this.onChange(e)} 
									placeholder="Last Name" 
									type="text" 
									className={`${styles.contactFormInput}`} 
								/>
							</div>
			      </div>
			      <div className={`col-12 ${styles.alignContactInputs}`}>
							<div className={`${styles.contactInputWrapper}`}>
								<input 
									name="phoneNumber"
									value={this.state.phoneNumber} 
									onChange={(e) => this.onChange(e)} 
									placeholder="Phone Number (required)" 
									type="text" 
									className={`${styles.contactFormInput} ${this.state.phoneNumberValid ? '' : `${styles.contactFormErrorClass}`}`} 
								/>
							</div>
			      </div>
			      <div className={`col-12 ${styles.alignContactInputs}`}>
							<div className={`${styles.contactInputWrapper}`}>
								<input 
									name="emailAddress"
									value={this.state.emailAddress} 
									onChange={(e) => this.onChange(e)} 
									placeholder="Email" 
									type="text" 
									className={`${styles.contactFormInput}`} 
								/>
							</div>
			      </div>
			      <div className={`col-12 ${styles.alignContactInputs}`}>
							<div className={`${styles.textareaWrapper}`}>
								<textarea 
									name="messageText"
									value={this.state.messageText} 
									onChange={(e) => this.onChange(e)} 
									placeholder="Your Message" 
									type="text" 
									className={`${styles.contactFormTextarea}`} 
								>
								</textarea>
							</div>
			      </div>
			      <Fade bottom>
			      <div className={`col-12 ${styles.alignContactInputs}`}>
			      	{	(this.state.loadingState === 'pre-load') &&
				      	<button onClick={this.onSubmit} className={`${styles.contactSubmitButton}`}>
				      		SUBMIT
				      	</button>	
			      	}
			      	{(this.state.loadingState === 'loading') && 
	              <div className={`col-12 ${styles.spinnerWrapper}`}>
					        <ReactLoading type={"spin"} color={"white"} height={80} width={80} />
					      </div>
	            }
	            { (this.state.loadingState === 'submitted') &&
	            	<div className="col-12">
	            		<div className="row">
	            			<div className={`col-12 ${styles.spinnerWrapper}`}>
	            				<i style={{color:'white', fontSize:'80px'}} className="material-icons"> check_circle </i>
	            			</div>
	            			<div className={`col-12 ${styles.contactSpinnerTxt}`}>
	            				<p>Thank you for your message.</p>
	            				<p>We will contact you within 24 hours.</p> 
	            			</div>
	            		</div>
	            	</div>
	            }
	            {(this.state.loadingState === 'error') && 
	            	<div className="col-12">
	            		<div className="row">
	            			<div className={`col-12 ${styles.spinnerWrapper}`}>
	            				<i style={{color:'white', fontSize:'80px'}} className="material-icons"> error </i>
	            			</div>
	            			<div className={`col-12 ${styles.contactSpinnerTxt}`}>
	            				<p>Oops, something went wrong!</p>
	            				<p>Please call 0431 771 088.</p> 
	            			</div>
	            		</div>
	            	</div>
	            }
			      </div>
			      </Fade>
					</div>
				</div>
				<span className={`${styles.websiteBy}`}><a target="_blank" href="http://aleksandargujas.net">Website by AG Web Dev</a></span>
			</div>
		);
	}
}

export default ContactForm;