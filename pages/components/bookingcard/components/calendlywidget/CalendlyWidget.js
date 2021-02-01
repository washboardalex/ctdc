import styles from './CalendlyWidget.module.scss';

const CalendlyWidget = () => (
	<div className={`${styles.calendlyInlineWidget}`} data-url="https://calendly.com/cleveland-tooth/60min?hide_gdpr_banner=1"></div>
);

export default CalendlyWidget;