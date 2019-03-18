(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{104:function(e,t,o){var n,r,i;r=[t],void 0===(i="function"==typeof(n=function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=(e.arePathsEqual=function(e,t){if(e===t)return!0;if(!Array.isArray(e)||!Array.isArray(t))return!1;if(e.length!==t.length)return!1;for(var n=0;n<e.length;++n)if(e[n]!==t[n]){if(!o(e[n])||!o(t[n]))return!1;if(t[n].lat!==e[n].lat||t[n].lng!==e[n].lng)return!1}return!0},function(e){return null!==e&&"object"===(void 0===e?"undefined":t(e))&&e.hasOwnProperty("lat")&&e.hasOwnProperty("lng")})})?n.apply(t,r):n)||(e.exports=i)},113:function(e,t,o){"use strict";o.r(t);var n=o(0),r=o.n(n),i=o(34);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function c(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var f={height:"400px",width:"100%"},d=function(e){function t(){var e,o,n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,n=s(t).call(this),e=!n||"object"!==a(n)&&"function"!=typeof n?p(o):n,c(p(p(e)),"onMarkerClick",function(t,o,n){e.setState(function(e){return{selectedPlace:t,activeMarker:o,showingInfoWindow:!0}})}),c(p(p(e)),"onClose",function(){e.state.showingInfoWindow&&e.setState({showingInfoWindow:!1,activeMarker:null})}),c(p(p(e)),"onMarkerMounted",function(t){e.onMarkerClick(t.props,t.marker,t)}),c(p(p(e)),"handleMapIdle",function(){e.setState({mapLoaded:!0})}),e.state={showingInfoWindow:!1,activeMarker:{},selectedPlace:{},mapLoaded:!1},e.handleMapIdle=e.handleMapIdle.bind(p(p(e))),e.onMarkerClick=e.onMarkerClick.bind(p(p(e))),e.onClose=e.onClose.bind(p(p(e))),e}var o,d,h;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,n["Component"]),o=t,(d=[{key:"render",value:function(){return r.a.createElement(i.Map,{google:this.props.google,style:f,initialCenter:{lat:-27.53412,lng:153.27063},zoom:this.props.zoom,onIdle:this.handleMapIdle},this.state.mapLoaded&&r.a.createElement(i.Marker,{ref:this.onMarkerMounted,onClick:this.onMarkerClick}),r.a.createElement(i.InfoWindow,{marker:this.state.activeMarker,visible:this.state.showingInfoWindow,onClose:this.onClose},r.a.createElement("div",null,r.a.createElement("div",null,"Cleve-Tooth Denture Clinic"),r.a.createElement("div",null,"100 Princess St, Cleveland QLD 4163"),r.a.createElement("div",null,"Ph: 0431 771 088"))))}}])&&l(o.prototype,d),h&&l(o,h),t}();t.default=Object(i.GoogleApiWrapper)({apiKey:"AIzaSyDyhhLFhaI7oKOojSNJOi2e9lVf8PiYoTk"})(d)},175:function(e,t,o){var n,r,i;r=[t,o(0),o(15),o(176),o(178)],void 0===(i="function"==typeof(n=function(e,t,o,n,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.wrapper=void 0;var i=l(t),a=(l(o),l(r));function l(e){return e&&e.__esModule?e:{default:e}}var s=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),u=function(e){return JSON.stringify(e)},p=function(e){var t=(e=e||{}).apiKey,o=e.libraries||["places"],r=e.version||"3",i=e.language||"en",l=e.url,s=e.client;return(0,n.ScriptCache)({google:(0,a.default)({apiKey:t,language:i,libraries:o,version:r,url:l,client:s})})},c=function(e){return i.default.createElement("div",null,"Loading...")},f=e.wrapper=function(e){return function(t){var o=function(o){function n(t,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,t,o)),i="function"==typeof e?e(t):e;return r.initialize(i),r.state={loaded:!1,map:null,google:null,options:i},r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,o),s(n,[{key:"componentWillReceiveProps",value:function(t){if("function"==typeof e){var o,n,r=this.state.options,i="function"==typeof e?e(t):e;(o=i)!==(n=r)&&u(o)!==u(n)&&(this.initialize(i),this.setState({options:i,loaded:!1,google:null}))}}},{key:"initialize",value:function(e){this.unregisterLoadHandler&&(this.unregisterLoadHandler(),this.unregisterLoadHandler=null);var t=e.createCache||p;this.scriptCache=t(e),this.unregisterLoadHandler=this.scriptCache.google.onLoad(this.onLoad.bind(this)),this.LoadingContainer=e.LoadingContainer||c}},{key:"onLoad",value:function(e,t){this._gapi=window.google,this.setState({loaded:!0,google:this._gapi})}},{key:"render",value:function(){var e=this.LoadingContainer;if(!this.state.loaded)return i.default.createElement(e,null);var o=Object.assign({},this.props,{loaded:this.state.loaded,google:window.google});return i.default.createElement("div",null,i.default.createElement(t,o),i.default.createElement("div",{ref:"map"}))}}]),n}(i.default.Component);return o}};e.default=f})?n.apply(t,r):n)||(e.exports=i)},176:function(e,t,o){var n,r,i;r=[t,o(177)],void 0===(i="function"==typeof(n=function(e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o,n=0,r=void 0!==t&&t._scriptMap||new Map,i=e.ScriptCache=((o=t)._scriptMap=o._scriptMap||r,function(e){var i={_onLoad:function(e){return function(t){var o=!0,n=r.get(e);return n&&n.promise.then(function(){return o&&(n.error?t(n.error):t(null,n)),n}),function(){o=!1}}},_scriptTag:function(e,i){if(!r.has(e)){if("undefined"==typeof document)return null;var a=document.createElement("script"),l=new Promise(function(l,s){var u=document.getElementsByTagName("body")[0];a.type="text/javascript",a.async=!1;var p="loaderCB"+n+++Date.now(),c=function(t){return function(o){var n=r.get(e);"loaded"===t?(n.resolved=!0,l(i)):"error"===t&&(n.errored=!0,s(o)),n.loaded=!0,f()}},f=function(){o[p]&&"function"==typeof o[p]&&(o[p]=null,delete o[p])};return a.onload=c("loaded"),a.onerror=c("error"),a.onreadystatechange=function(){c(a.readyState)},i.match(/callback=CALLBACK_NAME/)?(i=i.replace(/(callback=)[^\&]+/,"$1"+p),t[p]=a.onload):a.addEventListener("load",a.onload),a.addEventListener("error",a.onerror),a.src=i,u.appendChild(a),a}),s={loaded:!1,error:!1,promise:l,tag:a};r.set(e,s)}return r.get(e)}};return Object.keys(e).forEach(function(o){var n=e[o],r=t._scriptMap.has(o)?t._scriptMap.get(o).tag:i._scriptTag(o,n);i[o]={tag:r,onLoad:i._onLoad(o)}}),i});e.default=i})?n.apply(t,r):n)||(e.exports=i)},177:function(e,t,o){(function(o){var n,r,i,a;a=function(e){"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};e.exports="object"===("undefined"==typeof self?"undefined":t(self))&&self.self===self&&self||"object"===(void 0===o?"undefined":t(o))&&o.global===o&&o||void 0},r=[e],void 0===(i="function"==typeof(n=a)?n.apply(t,r):n)||(e.exports=i)}).call(this,o(68))},178:function(e,t,o){var n,r,i;r=[t],void 0===(i="function"==typeof(n=function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=e.GoogleApi=function(e){if(!(e=e||{}).hasOwnProperty("apiKey"))throw new Error("You must pass an apiKey to use GoogleApi");var t=e.apiKey,o=e.libraries||["places"],n=e.client,r=e.url||"https://maps.googleapis.com/maps/api/js",i=e.version||"3.31",a=("undefined"!=typeof window&&window.google,e.language),l=e.region||null;return function(){var e=r,s={key:t,callback:"CALLBACK_NAME",libraries:o.join(","),client:n,v:i,channel:null,language:a,region:l},u=Object.keys(s).filter(function(e){return!!s[e]}).map(function(e){return e+"="+s[e]}).join("&");return e+"?"+u}()};e.default=t})?n.apply(t,r):n)||(e.exports=i)},179:function(e,t,o){var n,r,i;r=[t,o(0),o(4),o(33)],void 0===(i="function"==typeof(n=function(e,t,o,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Marker=void 0;var r=a(t),i=a(o);function a(e){return e&&e.__esModule?e:{default:e}}var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},s=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),u=["click","dblclick","dragend","mousedown","mouseout","mouseover","mouseup","recenter"],p=e.Marker=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),s(t,[{key:"componentDidMount",value:function(){this.markerPromise=function(){var e={},t=new Promise(function(t,o){e.resolve=t,e.reject=o});return e.then=t.then.bind(t),e.catch=t.catch.bind(t),e.promise=t,e}(),this.renderMarker()}},{key:"componentDidUpdate",value:function(e){this.props.map===e.map&&this.props.position===e.position&&this.props.icon===e.icon||(this.marker&&this.marker.setMap(null),this.renderMarker())}},{key:"componentWillUnmount",value:function(){this.marker&&this.marker.setMap(null)}},{key:"renderMarker",value:function(){var e=this,t=this.props,o=t.map,n=t.google,r=t.position,i=t.mapCenter,a=t.icon,s=t.label,p=t.draggable,c=t.title,f=function(e,t){var o={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(o[n]=e[n]);return o}(t,["map","google","position","mapCenter","icon","label","draggable","title"]);if(!n)return null;var d=r||i;d instanceof n.maps.LatLng||(d=new n.maps.LatLng(d.lat,d.lng));var h=l({map:o,position:d,icon:a,label:s,title:c,draggable:p},f);this.marker=new n.maps.Marker(h),u.forEach(function(t){e.marker.addListener(t,e.handleEvent(t))}),this.markerPromise.resolve(this.marker)}},{key:"getMarker",value:function(){return this.markerPromise}},{key:"handleEvent",value:function(e){var t=this;return function(o){var r="on"+(0,n.camelize)(e);t.props[r]&&t.props[r](t.props,t.marker,o)}}},{key:"render",value:function(){return null}}]),t}(r.default.Component);p.propTypes={position:i.default.object,map:i.default.object},u.forEach(function(e){return p.propTypes[e]=i.default.func}),p.defaultProps={name:"Marker"},e.default=p})?n.apply(t,r):n)||(e.exports=i)},180:function(e,t,o){var n,r,i;r=[t,o(0),o(4),o(15),o(227)],void 0===(i="function"==typeof(n=function(e,t,o,n,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.InfoWindow=void 0;var i=s(t),a=s(o),l=(s(n),s(r));function s(e){return e&&e.__esModule?e:{default:e}}var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},p=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),c=e.InfoWindow=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),p(t,[{key:"componentDidMount",value:function(){this.renderInfoWindow()}},{key:"componentDidUpdate",value:function(e){var t=this.props,o=t.google,n=t.map;o&&n&&(n!==e.map&&this.renderInfoWindow(),this.props.position!==e.position&&this.updatePosition(),this.props.children!==e.children&&this.updateContent(),this.props.visible===e.visible&&this.props.marker===e.marker&&this.props.position===e.position||(this.props.visible?this.openWindow():this.closeWindow()))}},{key:"renderInfoWindow",value:function(){var e=this.props,t=(e.map,e.google),o=(e.mapCenter,function(e,t){var o={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(o[n]=e[n]);return o}(e,["map","google","mapCenter"]));if(t&&t.maps){var n=this.infowindow=new t.maps.InfoWindow(u({content:""},o));t.maps.event.addListener(n,"closeclick",this.onClose.bind(this)),t.maps.event.addListener(n,"domready",this.onOpen.bind(this))}}},{key:"onOpen",value:function(){this.props.onOpen&&this.props.onOpen()}},{key:"onClose",value:function(){this.props.onClose&&this.props.onClose()}},{key:"openWindow",value:function(){this.infowindow.open(this.props.map,this.props.marker)}},{key:"updatePosition",value:function(){var e=this.props.position;e instanceof google.maps.LatLng||(e=e&&new google.maps.LatLng(e.lat,e.lng)),this.infowindow.setPosition(e)}},{key:"updateContent",value:function(){var e=this.renderChildren();this.infowindow.setContent(e)}},{key:"closeWindow",value:function(){this.infowindow.close()}},{key:"renderChildren",value:function(){var e=this.props.children;return l.default.renderToString(e)}},{key:"render",value:function(){return null}}]),t}(i.default.Component);c.propTypes={children:a.default.element.isRequired,map:a.default.object,marker:a.default.object,position:a.default.object,visible:a.default.bool,onClose:a.default.func,onOpen:a.default.func},c.defaultProps={visible:!1},e.default=c})?n.apply(t,r):n)||(e.exports=i)},181:function(e,t,o){var n,r,i;r=[t,o(0),o(4),o(33)],void 0===(i="function"==typeof(n=function(e,t,o,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.HeatMap=void 0;var r=a(t),i=a(o);function a(e){return e&&e.__esModule?e:{default:e}}var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},s=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),u=["click","mouseover","recenter"],p=e.HeatMap=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),s(t,[{key:"componentDidMount",value:function(){this.heatMapPromise=function(){var e={},t=new Promise(function(t,o){e.resolve=t,e.reject=o});return e.then=t.then.bind(t),e.catch=t.catch.bind(t),e.promise=t,e}(),this.renderHeatMap()}},{key:"componentDidUpdate",value:function(e){this.props.map===e.map&&this.props.position===e.position||this.heatMap&&(this.heatMap.setMap(null),this.renderHeatMap())}},{key:"componentWillUnmount",value:function(){this.heatMap&&this.heatMap.setMap(null)}},{key:"renderHeatMap",value:function(){var e=this,t=this.props,o=t.map,n=t.google,r=t.positions,i=(t.mapCenter,t.icon,t.gradient),a=t.radius,s=void 0===a?20:a,p=t.opacity,c=void 0===p?.2:p,f=function(e,t){var o={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(o[n]=e[n]);return o}(t,["map","google","positions","mapCenter","icon","gradient","radius","opacity"]);if(!n)return null;var d=r.map(function(e){return new n.maps.LatLng(e.lat,e.lng)}),h=l({map:o,gradient:i,radius:s,opacity:c,data:d},f);this.heatMap=new n.maps.visualization.HeatmapLayer(h),this.heatMap.set("radius",void 0===s?20:s),this.heatMap.set("opacity",void 0===c?.2:c),u.forEach(function(t){e.heatMap.addListener(t,e.handleEvent(t))}),this.heatMapPromise.resolve(this.heatMap)}},{key:"getHeatMap",value:function(){return this.heatMapPromise}},{key:"handleEvent",value:function(e){var t=this;return function(o){var r="on"+(0,n.camelize)(e);t.props[r]&&t.props[r](t.props,t.heatMap,o)}}},{key:"render",value:function(){return null}}]),t}(r.default.Component);p.propTypes={position:i.default.object,map:i.default.object,icon:i.default.string},u.forEach(function(e){return p.propTypes[e]=i.default.func}),p.defaultProps={name:"HeatMap"},e.default=p})?n.apply(t,r):n)||(e.exports=i)},182:function(e,t,o){var n,r,i;r=[t],void 0===(i="function"==typeof(n=function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.makeCancelable=function(e){var t=!1,o=new Promise(function(o,n){e.then(function(e){return t?n({isCanceled:!0}):o(e)}),e.catch(function(e){return n(t?{isCanceled:!0}:e)})});return{promise:o,cancel:function(){t=!0}}}})?n.apply(t,r):n)||(e.exports=i)},183:function(e,t,o){var n,r,i;r=[t,o(0),o(4),o(104),o(33)],void 0===(i="function"==typeof(n=function(e,t,o,n,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Polyline=void 0;var i=l(t),a=l(o);function l(e){return e&&e.__esModule?e:{default:e}}var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},u=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),p=["click","mouseout","mouseover"],c=e.Polyline=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),u(t,[{key:"componentDidMount",value:function(){this.polylinePromise=function(){var e={},t=new Promise(function(t,o){e.resolve=t,e.reject=o});return e.then=t.then.bind(t),e.catch=t.catch.bind(t),e.promise=t,e}(),this.renderPolyline()}},{key:"componentDidUpdate",value:function(e){this.props.map===e.map&&(0,n.arePathsEqual)(this.props.path,e.path)||(this.polyline&&this.polyline.setMap(null),this.renderPolyline())}},{key:"componentWillUnmount",value:function(){this.polyline&&this.polyline.setMap(null)}},{key:"renderPolyline",value:function(){var e=this,t=this.props,o=t.map,n=t.google,r=t.path,i=t.strokeColor,a=t.strokeOpacity,l=t.strokeWeight,u=function(e,t){var o={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(o[n]=e[n]);return o}(t,["map","google","path","strokeColor","strokeOpacity","strokeWeight"]);if(!n)return null;var c=s({map:o,path:r,strokeColor:i,strokeOpacity:a,strokeWeight:l},u);this.polyline=new n.maps.Polyline(c),p.forEach(function(t){e.polyline.addListener(t,e.handleEvent(t))}),this.polylinePromise.resolve(this.polyline)}},{key:"getPolyline",value:function(){return this.polylinePromise}},{key:"handleEvent",value:function(e){var t=this;return function(o){var n="on"+(0,r.camelize)(e);t.props[n]&&t.props[n](t.props,t.polyline,o)}}},{key:"render",value:function(){return null}}]),t}(i.default.Component);c.propTypes={path:a.default.array,strokeColor:a.default.string,strokeOpacity:a.default.number,strokeWeight:a.default.number},p.forEach(function(e){return c.propTypes[e]=a.default.func}),c.defaultProps={name:"Polyline"},e.default=c})?n.apply(t,r):n)||(e.exports=i)},184:function(e,t,o){var n,r,i;r=[t,o(0),o(4),o(104),o(33)],void 0===(i="function"==typeof(n=function(e,t,o,n,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Polygon=void 0;var i=l(t),a=l(o);function l(e){return e&&e.__esModule?e:{default:e}}var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},u=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),p=["click","mouseout","mouseover"],c=e.Polygon=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),u(t,[{key:"componentDidMount",value:function(){this.polygonPromise=function(){var e={},t=new Promise(function(t,o){e.resolve=t,e.reject=o});return e.then=t.then.bind(t),e.catch=t.catch.bind(t),e.promise=t,e}(),this.renderPolygon()}},{key:"componentDidUpdate",value:function(e){this.props.map===e.map&&(0,n.arePathsEqual)(this.props.paths,e.paths)||(this.polygon&&this.polygon.setMap(null),this.renderPolygon())}},{key:"componentWillUnmount",value:function(){this.polygon&&this.polygon.setMap(null)}},{key:"renderPolygon",value:function(){var e=this,t=this.props,o=t.map,n=t.google,r=t.paths,i=t.strokeColor,a=t.strokeOpacity,l=t.strokeWeight,u=t.fillColor,c=t.fillOpacity,f=function(e,t){var o={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(o[n]=e[n]);return o}(t,["map","google","paths","strokeColor","strokeOpacity","strokeWeight","fillColor","fillOpacity"]);if(!n)return null;var d=s({map:o,paths:r,strokeColor:i,strokeOpacity:a,strokeWeight:l,fillColor:u,fillOpacity:c},f);this.polygon=new n.maps.Polygon(d),p.forEach(function(t){e.polygon.addListener(t,e.handleEvent(t))}),this.polygonPromise.resolve(this.polygon)}},{key:"getPolygon",value:function(){return this.polygonPromise}},{key:"handleEvent",value:function(e){var t=this;return function(o){var n="on"+(0,r.camelize)(e);t.props[n]&&t.props[n](t.props,t.polygon,o)}}},{key:"render",value:function(){return null}}]),t}(i.default.Component);c.propTypes={paths:a.default.array,strokeColor:a.default.string,strokeOpacity:a.default.number,strokeWeight:a.default.number,fillColor:a.default.string,fillOpacity:a.default.number},p.forEach(function(e){return c.propTypes[e]=a.default.func}),c.defaultProps={name:"Polygon"},e.default=c})?n.apply(t,r):n)||(e.exports=i)},275:function(e,t,o){__NEXT_REGISTER_PAGE("/components/mapview/components/mapview/MapView",function(){return e.exports=o(113),{page:e.exports.default}})},33:function(e,t,o){var n,r,i;r=[t],void 0===(i="function"==typeof(n=function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.camelize=function(e){return e.split(" ").map(function(e){return e.charAt(0).toUpperCase()+e.slice(1)}).join("")}})?n.apply(t,r):n)||(e.exports=i)},34:function(e,t,o){var n,r,i;r=[t,o(175),o(179),o(180),o(181),o(184),o(183),o(0),o(4),o(15),o(33),o(182)],void 0===(i="function"==typeof(n=function(e,t,o,n,r,i,a,l,s,u,p,c){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Map=e.Polyline=e.Polygon=e.HeatMap=e.InfoWindow=e.Marker=e.GoogleApiWrapper=void 0,Object.defineProperty(e,"GoogleApiWrapper",{enumerable:!0,get:function(){return t.wrapper}}),Object.defineProperty(e,"Marker",{enumerable:!0,get:function(){return o.Marker}}),Object.defineProperty(e,"InfoWindow",{enumerable:!0,get:function(){return n.InfoWindow}}),Object.defineProperty(e,"HeatMap",{enumerable:!0,get:function(){return r.HeatMap}}),Object.defineProperty(e,"Polygon",{enumerable:!0,get:function(){return i.Polygon}}),Object.defineProperty(e,"Polyline",{enumerable:!0,get:function(){return a.Polyline}});var f=y(l),d=y(s),h=y(u);function y(e){return e&&e.__esModule?e:{default:e}}var m=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),v={container:{position:"absolute",width:"100%",height:"100%"},map:{position:"absolute",left:0,right:0,bottom:0,top:0}},b=["ready","click","dragend","recenter","bounds_changed","center_changed","dblclick","dragstart","heading_change","idle","maptypeid_changed","mousemove","mouseout","mouseover","projection_changed","resize","rightclick","tilesloaded","tilt_changed","zoom_changed"],g=e.Map=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var o=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));if(!e.hasOwnProperty("google"))throw new Error("You must include a `google` prop");return o.listeners={},o.state={currentLocation:{lat:o.props.initialCenter.lat,lng:o.props.initialCenter.lng}},o}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),m(t,[{key:"componentDidMount",value:function(){var e=this;this.props.centerAroundCurrentLocation&&navigator&&navigator.geolocation&&(this.geoPromise=(0,c.makeCancelable)(new Promise(function(e,t){navigator.geolocation.getCurrentPosition(e,t)})),this.geoPromise.promise.then(function(t){var o=t.coords;e.setState({currentLocation:{lat:o.latitude,lng:o.longitude}})}).catch(function(e){return e})),this.loadMap()}},{key:"componentDidUpdate",value:function(e,t){e.google!==this.props.google&&this.loadMap(),this.props.visible!==e.visible&&this.restyleMap(),this.props.zoom!==e.zoom&&this.map.setZoom(this.props.zoom),this.props.center!==e.center&&this.setState({currentLocation:this.props.center}),t.currentLocation!==this.state.currentLocation&&this.recenterMap(),this.props.bounds!==e.bounds&&this.map.fitBounds(this.props.bounds)}},{key:"componentWillUnmount",value:function(){var e=this,t=this.props.google;this.geoPromise&&this.geoPromise.cancel(),Object.keys(this.listeners).forEach(function(o){t.maps.event.removeListener(e.listeners[o])})}},{key:"loadMap",value:function(){var e=this;if(this.props&&this.props.google){var t=this.props.google,o=t.maps,n=this.refs.map,r=h.default.findDOMNode(n),i=this.state.currentLocation,a=new o.LatLng(i.lat,i.lng),l=this.props.google.maps.MapTypeId||{},s=String(this.props.mapType).toUpperCase(),u=Object.assign({},{mapTypeId:l[s],center:a,zoom:this.props.zoom,maxZoom:this.props.maxZoom,minZoom:this.props.minZoom,clickableIcons:!!this.props.clickableIcons,disableDefaultUI:this.props.disableDefaultUI,zoomControl:this.props.zoomControl,mapTypeControl:this.props.mapTypeControl,scaleControl:this.props.scaleControl,streetViewControl:this.props.streetViewControl,panControl:this.props.panControl,rotateControl:this.props.rotateControl,fullscreenControl:this.props.fullscreenControl,scrollwheel:this.props.scrollwheel,draggable:this.props.draggable,keyboardShortcuts:this.props.keyboardShortcuts,disableDoubleClickZoom:this.props.disableDoubleClickZoom,noClear:this.props.noClear,styles:this.props.styles,gestureHandling:this.props.gestureHandling});Object.keys(u).forEach(function(e){null===u[e]&&delete u[e]}),this.map=new o.Map(r,u),b.forEach(function(t){e.listeners[t]=e.map.addListener(t,e.handleEvent(t))}),o.event.trigger(this.map,"ready"),this.forceUpdate()}}},{key:"handleEvent",value:function(e){var t=this,o=void 0,n="on"+(0,p.camelize)(e);return function(e){o&&(clearTimeout(o),o=null),o=setTimeout(function(){t.props[n]&&t.props[n](t.props,t.map,e)},0)}}},{key:"recenterMap",value:function(){var e=this.map,t=this.props.google;if(t){var o=t.maps;if(e){var n=this.state.currentLocation;n instanceof t.maps.LatLng||(n=new t.maps.LatLng(n.lat,n.lng)),e.setCenter(n),o.event.trigger(e,"recenter")}}}},{key:"restyleMap",value:function(){if(this.map){var e=this.props.google;e.maps.event.trigger(this.map,"resize")}}},{key:"renderChildren",value:function(){var e=this,t=this.props.children;if(t)return f.default.Children.map(t,function(t){if(t)return f.default.cloneElement(t,{map:e.map,google:e.props.google,mapCenter:e.state.currentLocation})})}},{key:"render",value:function(){var e=Object.assign({},v.map,this.props.style,{display:this.props.visible?"inherit":"none"}),t=Object.assign({},v.container,this.props.containerStyle);return f.default.createElement("div",{style:t,className:this.props.className},f.default.createElement("div",{style:e,ref:"map"},"Loading map..."),this.renderChildren())}}]),t}(f.default.Component);g.propTypes={google:d.default.object,zoom:d.default.number,centerAroundCurrentLocation:d.default.bool,center:d.default.object,initialCenter:d.default.object,className:d.default.string,style:d.default.object,containerStyle:d.default.object,visible:d.default.bool,mapType:d.default.string,maxZoom:d.default.number,minZoom:d.default.number,clickableIcons:d.default.bool,disableDefaultUI:d.default.bool,zoomControl:d.default.bool,mapTypeControl:d.default.bool,scaleControl:d.default.bool,streetViewControl:d.default.bool,panControl:d.default.bool,rotateControl:d.default.bool,fullscreenControl:d.default.bool,scrollwheel:d.default.bool,draggable:d.default.bool,keyboardShortcuts:d.default.bool,disableDoubleClickZoom:d.default.bool,noClear:d.default.bool,styles:d.default.array,gestureHandling:d.default.string,bounds:d.default.object},b.forEach(function(e){return g.propTypes[(0,p.camelize)(e)]=d.default.func}),g.defaultProps={zoom:14,initialCenter:{lat:37.774929,lng:-122.419416},center:{},centerAroundCurrentLocation:!1,style:{},containerStyle:{},visible:!0},e.default=g})?n.apply(t,r):n)||(e.exports=i)}},[[275,1,0]]]);