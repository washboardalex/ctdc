import MapView from './components/mapview/MapView';

import Fade from 'react-reveal/Fade';

import './MapContainer.scss';

class MapContainer extends React.Component {
	constructor() {
		super();
		this.state = {
			isSmallWindow: false
		}
	}

	componentDidMount() {
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
    		<div className="row map-component-container">
                {isSmallWindow &&
                    <Fade top>
                    <div className="col-12">
                        <div className="map-heading-container-phonescreen">
                            <div className="map-heading-wrapper">
                                <h1 id="locationsection" className="map-heading">LOCATION</h1>
                            </div>
                            <div className="map-address-padding">
                                <p className="map-address-text">100 Princess Street </p>
                                <p className="map-address-text">Cleveland QLD 4163</p>
                            </div>
                        </div>
                    </div>    
                    </Fade>
                }
                <div id="default" className="col-lg-8 col-md-12">
                    <MapView />
                </div>
                {!isSmallWindow &&
                    <Fade right>
                    <div className="col-4">
                        <div className="map-heading-container">
                            <div className="map-heading-wrapper">
                                <h1 id="locationsection" className="map-heading">LOCATION</h1>
                            </div>
                            <div className="map-address-padding">
                                <p className="map-address-text">100 Princess Street</p>
                                <p className="map-address-text">Cleveland QLD 4163</p>
                            </div>
                        </div>
                    </div>    
                    </Fade>
                }
                
    		</div>	
    	);
    }
} 

export default MapContainer;



// import MapView from './components/mapview/MapView';

// import Fade from 'react-reveal/Fade';

// import './MapContainer.scss';

// const MapContainer = () => {
//     return (
//         <div className="row map-component-container">
//             <Fade left>
//             <div className="col-4">
//                 <div className="map-heading-container">
//                     <div className="map-heading-wrapper">
//                         <h1 className="map-heading">LOCATION</h1>
//                     </div>
//                     <div className="map-address-padding">
//                         <p className="map-address-text">100 Princess Street</p>
//                         <p className="map-address-text">Cleveland QLD 4163</p>
//                     </div>
//                 </div>
//             </div>    
//             </Fade>
//             <div style={{paddingRight:'15px'}} id="default" className="col-8">
//                 <MapView />
//             </div>
//         </div>    
//     );
// } 

// export default MapContainer;