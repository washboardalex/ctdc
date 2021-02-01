import ContactForm from './components/contactform/ContactForm';

import styles from './ContactCard.module.scss';



const ContactCard = () => { 
    const { contactContainerHeight, contactContainerDimensions } = styles;

    return (
		<div className={`row ${contactContainerHeight} ${contactContainerDimensions}`}>
			<ContactForm />
		</div>
    );
};

export default ContactCard;
