import MapView from './components/mapview/MapView';

import Fade from 'react-reveal/Fade';

import styles from './MapContainer.module.scss';

const MapContainer = () => {
    return (
        <div id="locationsection" className="row">
            <Fade top>
            <div className="d-block d-lg-none col-12">
                <div className={`${styles.mapHeadingContainerPhonescreen}`}>
                    <div style={{marginBottom:'20px'}} className="row">
                        <div className="col-12">
                            <div className={`${styles.mapHeadingWrapper}`}>
                                <h1  className={`${styles.mapHeading}`}>LOCATION</h1>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className={`${styles.mapAddressPadding}`}>
                                <p className={`${styles.mapAddressText}`}>100 Princess Street </p>
                                <p className={`${styles.mapAddressText}`}>Cleveland QLD 4163</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
            </Fade>
            <div id="default" className="col-lg-8 col-md-12">
                <div className={`${styles.mapContainer}`}>
                    <MapView />
                </div>
            </div>
            <div className="d-none d-lg-block col-4">
                <div className={`${styles.mapHeadingContainer}`}>
                    <div className={`${styles.mapHeadingWrapper}`}>
                        <h1 className={`${styles.mapHeading}`}>LOCATION</h1>
                    </div>
                    <div className={`${styles.mapAddressPadding}`}>
                        <p className={`${styles.mapAddressText}`}>100 Princess Street</p>
                        <p className={`${styles.mapAddressText}`}>Cleveland QLD 4163</p>
                    </div>
                </div>
            </div>    
        </div>    
    );
}

export default MapContainer;