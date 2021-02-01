import MapView from './components/mapview/MapView';

import Fade from 'react-reveal/Fade';

import './MapContainer.module.scss';

const MapContainer = () => {
    return (
        <div id="locationsection" className="row">
            <Fade top>
            <div className="d-block d-lg-none col-12">
                <div className="map-heading-container-phonescreen">
                    <div style={{marginBottom:'20px'}} className="row">
                        <div className="col-12">
                            <div className="map-heading-wrapper">
                                <h1  className="map-heading">LOCATION</h1>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="map-address-padding">
                                <p className="map-address-text">100 Princess Street </p>
                                <p className="map-address-text">Cleveland QLD 4163</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
            </Fade>
            <div id="default" className="col-lg-8 col-md-12">
                <div className="map-container">
                    <MapView />
                </div>
            </div>
            <div className="d-none d-lg-block col-4">
                <div className="map-heading-container">
                    <div className="map-heading-wrapper">
                        <h1 className="map-heading">LOCATION</h1>
                    </div>
                    <div className="map-address-padding">
                        <p className="map-address-text">100 Princess Street</p>
                        <p className="map-address-text">Cleveland QLD 4163</p>
                    </div>
                </div>
            </div>    
        </div>    
    );
}

export default MapContainer;