import styles from './CalendlyWidget.module.scss';

const CalendlyWidget = () => (
    <div className={`${styles.calendlyInlineWidget}`} data-url="https://calendly.com/cleveland-tooth?hide_landing_page_details=1" ></div>
);

export default CalendlyWidget;