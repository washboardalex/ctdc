import styles from './CalendlyWidget.module.scss';

const CalendlyWidget = () => (
<>
    <div class="calendly-inline-widget" data-url="https://calendly.com/cleveland-tooth?hide_landing_page_details=1&hide_gdpr_banner=1" style="min-width:320px;height:630px;"></div>
    <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js"></script>
</>
);

export default CalendlyWidget;