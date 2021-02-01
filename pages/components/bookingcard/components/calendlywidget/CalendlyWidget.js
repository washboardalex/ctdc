import styles from './CalendlyWidget.module.scss';

const CalendlyWidget = () => (
    <div className={`${styles.calendlyInlineWidget}`} data-url="https://calendly.com/cleveland-tooth?hide_landing_page_details=1" style={{minWidth:'320px', height:'630px'}}></div>
);

export default CalendlyWidget;