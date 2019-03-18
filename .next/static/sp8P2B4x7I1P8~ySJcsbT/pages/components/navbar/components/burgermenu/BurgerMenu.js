(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{11:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={pushHash:function(e){if(e=e?0===e.indexOf("#")?e:"#"+e:"",history.pushState){var t=window.location;history.pushState(null,null,e?t.pathname+t.search+e:t.pathname+t.search)}else location.hash=e},getHash:function(){return window.location.hash.replace(/^#/,"")},filterElementInContainer:function(e){return function(t){return e.contains?e!=t&&e.contains(t):!!(16&e.compareDocumentPosition(t))}},scrollOffset:function(e,t){return e===document?t.getBoundingClientRect().top+(window.scrollY||window.pageYOffset):"static"!==getComputedStyle(e).position?t.offsetTop:t.getBoundingClientRect().top+e.scrollTop}}},114:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),i=n(12);n(228);function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){s(e,t,n[t])})}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function f(e,t,n){return t&&c(e.prototype,t),n&&c(e,n),e}function p(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(e){function t(e){var n;return l(this,t),(n=p(this,d(t).call(this,e))).state={menuOpen:!1},n}return h(t,r.a.Component),f(t,[{key:"handleMenuClick",value:function(){this.setState({menuOpen:!this.state.menuOpen})}},{key:"handleLinkClick",value:function(){this.setState({menuOpen:!1})}},{key:"render",value:function(){var e=this,t={container:{position:"absolute",top:0,left:30,zIndex:"99",opacity:.9,display:"flex",alignItems:"center",background:"white",width:"100%",color:"black",fontFamily:"Lobster"},logo:{margin:"0 auto",transform:"translateX(-40px)",marginTop:"10px"},body:{display:"flex",flexDirection:"column",alignItems:"center",width:"100vw",height:"100vh",filter:this.state.menuOpen?"blur(2px)":null,transition:"filter 0.5s ease"}},n=["aboutsection","servicessection","locationsection","contactsection"],o=["About","Services","Location","Contact"].map(function(t,o){return r.a.createElement(i.Link,{activeClass:"active",key:o,to:n[o],spy:!0,smooth:!0,offset:-70,duration:700},r.a.createElement(v,{key:o,delay:"".concat(.1*o,"s"),onClick:function(){e.handleLinkClick()}},t))});return r.a.createElement("div",null,r.a.createElement("div",{style:t.container},r.a.createElement(b,{open:this.state.menuOpen,onClick:function(){return e.handleMenuClick()},color:"black"}),r.a.createElement("div",{style:t.logo},r.a.createElement("img",{src:"/static/logo3_opt.png",alt:"Tooth",height:"90",width:"90"}))),r.a.createElement(g,{open:this.state.menuOpen},o))}}]),t}(),v=function(e){function t(e){var n;return l(this,t),(n=p(this,d(t).call(this,e))).state={hover:!1},n}return h(t,r.a.Component),f(t,[{key:"handleHover",value:function(){this.setState({hover:!this.state.hover})}},{key:"render",value:function(){var e=this,t={container:{opacity:0,animation:"1s appear forwards",animationDelay:this.props.delay},menuItem:{fontFamily:"'Open Sans', sans-serif",fontSize:"1.2rem",padding:"1rem 0",margin:"0 5%",cursor:"pointer",color:this.state.hover?"gray":"#000000",transition:"color 0.2s ease-in-out",animation:"0.5s slideIn forwards",animationDelay:this.props.delay},line:{width:"90%",height:"1px",background:"gray",margin:"0 auto",animation:"0.5s shrink forwards",animationDelay:this.props.delay}};return r.a.createElement("div",{style:t.container},r.a.createElement("div",{style:t.menuItem,onMouseEnter:function(){e.handleHover()},onMouseLeave:function(){e.handleHover()},onClick:this.props.onClick},this.props.children),r.a.createElement("div",{style:t.line}))}}]),t}(),g=function(e){function t(e){var n;return l(this,t),(n=p(this,d(t).call(this,e))).state={open:!!n.props.open&&n.props.open},n}return h(t,r.a.Component),f(t,[{key:"componentWillReceiveProps",value:function(e){e.open!==this.state.open&&this.setState({open:e.open})}},{key:"render",value:function(){var e={container:{position:"absolute",top:0,left:0,height:this.state.open?"100%":0,width:"100vw",display:"flex",flexDirection:"column",background:"white",opacity:.95,color:"#fafafa",transition:"height 0.3s ease",zIndex:2},menuList:{paddingTop:"100px"}};return r.a.createElement("div",{style:e.container},this.state.open?r.a.createElement("div",{style:e.menuList},this.props.children):null)}}]),t}(),b=function(e){function t(e){var n;return l(this,t),(n=p(this,d(t).call(this,e))).state={open:!!n.props.open&&n.props.open,color:n.props.color?n.props.color:"black"},n}return h(t,r.a.Component),f(t,[{key:"componentWillReceiveProps",value:function(e){e.open!==this.state.open&&this.setState({open:e.open})}},{key:"handleClick",value:function(){this.setState({open:!this.state.open})}},{key:"render",value:function(){var e=this,t={container:{height:"32px",width:"32px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",cursor:"pointer",padding:"4px"},line:{height:"2px",width:"20px",background:this.state.color,transition:"all 0.2s ease"},lineTop:{transform:this.state.open?"rotate(45deg)":"none",transformOrigin:"top left",marginBottom:"5px"},lineMiddle:{opacity:this.state.open?0:1,transform:this.state.open?"translateX(-16px)":"none"},lineBottom:{transform:this.state.open?"translateX(-1px) rotate(-45deg)":"none",transformOrigin:"top left",marginTop:"5px"}};return r.a.createElement("div",{style:t.container,onClick:this.props.onClick?this.props.onClick:function(){e.handleClick()}},r.a.createElement("div",{style:a({},t.line,t.lineTop)}),r.a.createElement("div",{style:a({},t.line,t.lineMiddle)}),r.a.createElement("div",{style:a({},t.line,t.lineBottom)}))}}]),t}(),w=function(e){function t(){return l(this,t),p(this,d(t).apply(this,arguments))}return h(t,r.a.Component),f(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",height:"110px"}},r.a.createElement(m,null))}}]),t}();t.default=w},12:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Helpers=t.ScrollElement=t.ScrollLink=t.animateScroll=t.scrollSpy=t.Events=t.scroller=t.Element=t.Button=t.Link=void 0;var o=d(n(81)),r=d(n(85)),i=d(n(86)),a=d(n(18)),s=d(n(25)),u=d(n(23)),l=d(n(43)),c=d(n(22)),f=d(n(45)),p=d(n(87));function d(e){return e&&e.__esModule?e:{default:e}}t.Link=o.default,t.Button=r.default,t.Element=i.default,t.scroller=a.default,t.Events=s.default,t.scrollSpy=u.default,t.animateScroll=l.default,t.ScrollLink=c.default,t.ScrollElement=f.default,t.Helpers=p.default,t.default={Link:o.default,Button:r.default,Element:i.default,scroller:a.default,Events:s.default,scrollSpy:u.default,animateScroll:l.default,ScrollLink:c.default,ScrollElement:f.default,Helpers:p.default}},18:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=s(n(11)),i=s(n(43)),a=s(n(25));function s(e){return e&&e.__esModule?e:{default:e}}var u={},l=void 0;t.default={unmount:function(){u={}},register:function(e,t){u[e]=t},unregister:function(e){delete u[e]},get:function(e){return u[e]||document.getElementById(e)||document.getElementsByName(e)[0]||document.getElementsByClassName(e)[0]},setActiveLink:function(e){return l=e},getActiveLink:function(){return l},scrollTo:function(e,t){var n=this.get(e);if(n){var s=(t=o({},t,{absolute:!1})).containerId,u=t.container,l=void 0;l=s?document.getElementById(s):u&&u.nodeType?u:document,a.default.registered.begin&&a.default.registered.begin(e,n),t.absolute=!0;var c=r.default.scrollOffset(l,n)+(t.offset||0);if(!t.smooth)return l===document?window.scrollTo(0,c):l.scrollTop=c,void(a.default.registered.end&&a.default.registered.end(e,n));i.default.animateTopScroll(c,t,e,n)}else console.warn("target Element not found")}}},22:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=c(n(0)),a=(c(n(15)),c(n(11)),c(n(23))),s=c(n(18)),u=c(n(4)),l=c(n(44));function c(e){return e&&e.__esModule?e:{default:e}}var f={to:u.default.string.isRequired,containerId:u.default.string,container:u.default.object,activeClass:u.default.string,spy:u.default.bool,smooth:u.default.oneOfType([u.default.bool,u.default.string]),offset:u.default.number,delay:u.default.number,isDynamic:u.default.bool,onClick:u.default.func,duration:u.default.oneOfType([u.default.number,u.default.func]),absolute:u.default.bool,onSetActive:u.default.func,onSetInactive:u.default.func,ignoreCancelEvents:u.default.bool,hashSpy:u.default.bool};t.default=function(e,t){var n=t||s.default,u=function(t){function s(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(s.__proto__||Object.getPrototypeOf(s)).call(this,e));return c.call(t),t.state={active:!1},t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(s,i.default.PureComponent),r(s,[{key:"getScrollSpyContainer",value:function(){var e=this.props.containerId,t=this.props.container;return e&&!t?document.getElementById(e):t&&t.nodeType?t:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var e=this.getScrollSpyContainer();a.default.isMounted(e)||a.default.mount(e),this.props.hashSpy&&(l.default.isMounted()||l.default.mount(n),l.default.mapContainer(this.props.to,e)),a.default.addSpyHandler(this.spyHandler,e),this.setState({container:e})}}},{key:"componentWillUnmount",value:function(){a.default.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var t="";t=this.state&&this.state.active?((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():this.props.className;var n=o({},this.props);for(var r in f)n.hasOwnProperty(r)&&delete n[r];return n.className=t,n.onClick=this.handleClick,i.default.createElement(e,n)}}]),s}(),c=function(){var e=this;this.scrollTo=function(t,r){n.scrollTo(t,o({},e.state,r))},this.handleClick=function(t){e.props.onClick&&e.props.onClick(t),t.stopPropagation&&t.stopPropagation(),t.preventDefault&&t.preventDefault(),e.scrollTo(e.props.to,e.props)},this.spyHandler=function(t){var o=e.getScrollSpyContainer();if(!l.default.isMounted()||l.default.isInitialized()){var r=e.props.to,i=null,a=0,s=0,u=0;if(o.getBoundingClientRect)u=o.getBoundingClientRect().top;if(!i||e.props.isDynamic){if(!(i=n.get(r)))return;var c=i.getBoundingClientRect();s=(a=c.top-u+t)+c.height}var f=t-e.props.offset,p=f>=Math.floor(a)&&f<Math.floor(s),d=f<Math.floor(a)||f>=Math.floor(s),h=n.getActiveLink();d&&(r===h&&n.setActiveLink(void 0),e.props.hashSpy&&l.default.getHash()===r&&l.default.changeHash(),e.props.spy&&e.state.active&&(e.setState({active:!1}),e.props.onSetInactive&&e.props.onSetInactive(r,i))),!p||h===r&&!1!==e.state.active||(n.setActiveLink(r),e.props.hashSpy&&l.default.changeHash(r),e.props.spy&&(e.setState({active:!0}),e.props.onSetActive&&e.props.onSetActive(r,i)))}}};return u.propTypes=f,u.defaultProps={offset:0},u}},23:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r=n(82),i=(o=r)&&o.__esModule?o:{default:o},a=n(24);var s={spyCallbacks:[],spySetState:[],scrollSpyContainers:[],mount:function(e){if(e){var t=function(e){return(0,i.default)(e,66)}(function(t){s.scrollHandler(e)});s.scrollSpyContainers.push(e),(0,a.addPassiveEventListener)(e,"scroll",t)}},isMounted:function(e){return-1!==s.scrollSpyContainers.indexOf(e)},currentPositionY:function(e){if(e===document){var t=void 0!==window.pageXOffset,n="CSS1Compat"===(document.compatMode||"");return t?window.pageYOffset:n?document.documentElement.scrollTop:document.body.scrollTop}return e.scrollTop},scrollHandler:function(e){(s.scrollSpyContainers[s.scrollSpyContainers.indexOf(e)].spyCallbacks||[]).forEach(function(t){return t(s.currentPositionY(e))})},addStateHandler:function(e){s.spySetState.push(e)},addSpyHandler:function(e,t){var n=s.scrollSpyContainers[s.scrollSpyContainers.indexOf(t)];n.spyCallbacks||(n.spyCallbacks=[]),n.spyCallbacks.push(e),e(s.currentPositionY(t))},updateStates:function(){s.spySetState.forEach(function(e){return e()})},unmount:function(e,t){s.scrollSpyContainers.forEach(function(e){return e.spyCallbacks&&e.spyCallbacks.length&&e.spyCallbacks.splice(e.spyCallbacks.indexOf(t),1)}),s.spySetState&&s.spySetState.length&&s.spySetState.splice(s.spySetState.indexOf(e),1),document.removeEventListener("scroll",s.scrollHandler)},update:function(){return s.scrollSpyContainers.forEach(function(e){return s.scrollHandler(e)})}};t.default=s},24:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.addPassiveEventListener=function(e,t,n){var o=function(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("test",null,t)}catch(e){}return e}();e.addEventListener(t,n,!!o&&{passive:!0})},t.removePassiveEventListener=function(e,t,n){e.removeEventListener(t,n)}},25:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={registered:{},scrollEvent:{register:function(e,t){o.registered[e]=t},remove:function(e){o.registered[e]=null}}};t.default=o},279:function(e,t,n){__NEXT_REGISTER_PAGE("/components/navbar/components/burgermenu/BurgerMenu",function(){return e.exports=n(114),{page:e.exports.default}})},43:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=(s(n(11)),s(n(83))),i=s(n(84)),a=s(n(25));function s(e){return e&&e.__esModule?e:{default:e}}var u=function(e){return r.default[e.smooth]||r.default.defaultEasing},l=function(){if("undefined"!=typeof window)return window.requestAnimationFrame||window.webkitRequestAnimationFrame}()||function(e,t,n){window.setTimeout(e,n||1e3/60,(new Date).getTime())},c=function(e){var t=e.data.containerElement;if(t&&t!==document&&t!==document.body)return t.scrollTop;var n=void 0!==window.pageXOffset,o="CSS1Compat"===(document.compatMode||"");return n?window.pageYOffset:o?document.documentElement.scrollTop:document.body.scrollTop},f=function(e){e.data.containerElement=e?e.containerId?document.getElementById(e.containerId):e.container&&e.container.nodeType?e.container:document:null},p=function(e,t,n,o){if(t.data=t.data||{currentPositionY:0,startPositionY:0,targetPositionY:0,progress:0,duration:0,cancel:!1,target:null,containerElement:null,to:null,start:null,deltaTop:null,percent:null,delayTimeout:null},window.clearTimeout(t.data.delayTimeout),i.default.subscribe(function(){t.data.cancel=!0}),f(t),t.data.start=null,t.data.cancel=!1,t.data.startPositionY=c(t),t.data.targetPositionY=t.absolute?e:e+t.data.startPositionY,t.data.startPositionY!==t.data.targetPositionY){var r;t.data.deltaTop=Math.round(t.data.targetPositionY-t.data.startPositionY),t.data.duration=("function"==typeof(r=t.duration)?r:function(){return r})(t.data.deltaTop),t.data.duration=isNaN(parseFloat(t.data.duration))?1e3:parseFloat(t.data.duration),t.data.to=n,t.data.target=o;var s=u(t),p=function e(t,n,o){var r=n.data;if(n.ignoreCancelEvents||!r.cancel)if(r.deltaTop=Math.round(r.targetPositionY-r.startPositionY),null===r.start&&(r.start=o),r.progress=o-r.start,r.percent=r.progress>=r.duration?1:t(r.progress/r.duration),r.currentPositionY=r.startPositionY+Math.ceil(r.deltaTop*r.percent),r.containerElement&&r.containerElement!==document&&r.containerElement!==document.body?r.containerElement.scrollTop=r.currentPositionY:window.scrollTo(0,r.currentPositionY),r.percent<1){var i=e.bind(null,t,n);l.call(window,i)}else a.default.registered.end&&a.default.registered.end(r.to,r.target,r.currentPositionY);else a.default.registered.end&&a.default.registered.end(r.to,r.target,r.currentPositionY)}.bind(null,s,t);t&&t.delay>0?t.data.delayTimeout=window.setTimeout(function(){l.call(window,p)},t.delay):l.call(window,p)}else a.default.registered.end&&a.default.registered.end(t.data.to,t.data.target,t.data.currentPositionY)},d=function(e){return(e=o({},e)).data=e.data||{currentPositionY:0,startPositionY:0,targetPositionY:0,progress:0,duration:0,cancel:!1,target:null,containerElement:null,to:null,start:null,deltaTop:null,percent:null,delayTimeout:null},e.absolute=!0,e};t.default={animateTopScroll:p,getAnimationType:u,scrollToTop:function(e){p(0,d(e))},scrollToBottom:function(e){e=d(e),f(e),p(function(e){var t=e.data.containerElement;if(t&&t!==document&&t!==document.body)return Math.max(t.scrollHeight,t.offsetHeight,t.clientHeight);var n=document.body,o=document.documentElement;return Math.max(n.scrollHeight,n.offsetHeight,o.clientHeight,o.scrollHeight,o.offsetHeight)}(e),e)},scrollTo:function(e,t){p(e,d(t))},scrollMore:function(e,t){t=d(t),f(t),p(c(t)+e,t)}}},44:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n(24);var o,r=n(11),i=(o=r)&&o.__esModule?o:{default:o};var a={mountFlag:!1,initialized:!1,scroller:null,containers:{},mount:function(e){this.scroller=e,this.handleHashChange=this.handleHashChange.bind(this),window.addEventListener("hashchange",this.handleHashChange),this.initStateFromHash(),this.mountFlag=!0},mapContainer:function(e,t){this.containers[e]=t},isMounted:function(){return this.mountFlag},isInitialized:function(){return this.initialized},initStateFromHash:function(){var e=this,t=this.getHash();t?window.setTimeout(function(){e.scrollTo(t,!0),e.initialized=!0},10):this.initialized=!0},scrollTo:function(e,t){var n=this.scroller;if(n.get(e)&&(t||e!==n.getActiveLink())){var o=this.containers[e]||document;n.scrollTo(e,{container:o})}},getHash:function(){return i.default.getHash()},changeHash:function(e){this.isInitialized()&&i.default.getHash()!==e&&i.default.pushHash(e)},handleHashChange:function(){this.scrollTo(this.getHash())},unmount:function(){this.scroller=null,this.containers=null,window.removeEventListener("hashchange",this.handleHashChange)}};t.default=a},45:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=u(n(0)),a=(u(n(15)),u(n(18))),s=u(n(4));function u(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=function(t){function n(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.childBindings={domNode:null},t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,i.default.Component),r(n,[{key:"componentDidMount",value:function(){if("undefined"==typeof window)return!1;this.registerElems(this.props.name)}},{key:"componentWillReceiveProps",value:function(e){this.props.name!==e.name&&this.registerElems(e.name)}},{key:"componentWillUnmount",value:function(){if("undefined"==typeof window)return!1;a.default.unregister(this.props.name)}},{key:"registerElems",value:function(e){a.default.register(e,this.childBindings.domNode)}},{key:"render",value:function(){return i.default.createElement(e,o({},this.props,{parentBindings:this.childBindings}))}}]),n}();return t.propTypes={name:s.default.string,id:s.default.string},t}},81:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=i(n(0)),r=i(n(22));function i(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var s=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var i=arguments.length,s=Array(i),u=0;u<i;u++)s[u]=arguments[u];return n=r=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),r.render=function(){return o.default.createElement("a",r.props,r.props.children)},a(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),t}();t.default=(0,r.default)(s)},82:function(e,t,n){(function(t){var n="Expected a function",o=NaN,r="[object Symbol]",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,u=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof t&&t&&t.Object===Object&&t,f="object"==typeof self&&self&&self.Object===Object&&self,p=c||f||Function("return this")(),d=Object.prototype.toString,h=Math.max,y=Math.min,m=function(){return p.Date.now()};function v(e,t,o){var r,i,a,s,u,l,c=0,f=!1,p=!1,d=!0;if("function"!=typeof e)throw new TypeError(n);function v(t){var n=r,o=i;return r=i=void 0,c=t,s=e.apply(o,n)}function w(e){var n=e-l;return void 0===l||n>=t||n<0||p&&e-c>=a}function O(){var e=m();if(w(e))return S(e);u=setTimeout(O,function(e){var n=t-(e-l);return p?y(n,a-(e-c)):n}(e))}function S(e){return u=void 0,d&&r?v(e):(r=i=void 0,s)}function E(){var e=m(),n=w(e);if(r=arguments,i=this,l=e,n){if(void 0===u)return function(e){return c=e,u=setTimeout(O,t),f?v(e):s}(l);if(p)return u=setTimeout(O,t),v(l)}return void 0===u&&(u=setTimeout(O,t)),s}return t=b(t)||0,g(o)&&(f=!!o.leading,a=(p="maxWait"in o)?h(b(o.maxWait)||0,t):a,d="trailing"in o?!!o.trailing:d),E.cancel=function(){void 0!==u&&clearTimeout(u),c=0,r=l=i=u=void 0},E.flush=function(){return void 0===u?s:S(m())},E}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&d.call(e)==r}(e))return o;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=s.test(e);return n||u.test(e)?l(e.slice(2),n?2:8):a.test(e)?o:+e}e.exports=function(e,t,o){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(n);return g(o)&&(r="leading"in o?!!o.leading:r,i="trailing"in o?!!o.trailing:i),v(e,t,{leading:r,maxWait:t,trailing:i})}}).call(this,n(68))},83:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={defaultEasing:function(e){return e<.5?Math.pow(2*e,2)/2:1-Math.pow(2*(1-e),2)/2},linear:function(e){return e},easeInQuad:function(e){return e*e},easeOutQuad:function(e){return e*(2-e)},easeInOutQuad:function(e){return e<.5?2*e*e:(4-2*e)*e-1},easeInCubic:function(e){return e*e*e},easeOutCubic:function(e){return--e*e*e+1},easeInOutCubic:function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},easeInQuart:function(e){return e*e*e*e},easeOutQuart:function(e){return 1- --e*e*e*e},easeInOutQuart:function(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e},easeInQuint:function(e){return e*e*e*e*e},easeOutQuint:function(e){return 1+--e*e*e*e*e},easeInOutQuint:function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e}}},84:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(24),r=["mousedown","mousewheel","touchmove","keydown"];t.default={subscribe:function(e){return"undefined"!=typeof document&&r.forEach(function(t){return(0,o.addPassiveEventListener)(document,t,e)})}}},85:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=a(n(0)),i=a(n(22));function a(e){return e&&e.__esModule?e:{default:e}}var s=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.default.Component),o(t,[{key:"render",value:function(){return r.default.createElement("input",this.props,this.props.children)}}]),t}();t.default=(0,i.default)(s)},86:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=u(n(0)),a=u(n(45)),s=u(n(4));function u(e){return e&&e.__esModule?e:{default:e}}var l=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default.Component),r(t,[{key:"render",value:function(){var e=this,t=o({},this.props);return t.parentBindings&&delete t.parentBindings,i.default.createElement("div",o({},t,{ref:function(t){e.props.parentBindings.domNode=t}}),this.props.children)}}]),t}();l.propTypes={name:s.default.string,id:s.default.string},t.default=(0,a.default)(l)},87:function(e,t,n){"use strict";var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=n(0),l=(n(15),n(11),n(23)),c=n(18),f=n(4),p=n(44),d={to:f.string.isRequired,containerId:f.string,container:f.object,activeClass:f.string,spy:f.bool,smooth:f.oneOfType([f.bool,f.string]),offset:f.number,delay:f.number,isDynamic:f.bool,onClick:f.func,duration:f.oneOfType([f.number,f.func]),absolute:f.bool,onSetActive:f.func,onSetInactive:f.func,ignoreCancelEvents:f.bool,hashSpy:f.bool},h={Scroll:function(e,t){console.warn("Helpers.Scroll is deprecated since v1.7.0");var n=t||c,f=function(t){function c(e){i(this,c);var t=a(this,(c.__proto__||Object.getPrototypeOf(c)).call(this,e));return h.call(t),t.state={active:!1},t}return s(c,u.Component),r(c,[{key:"getScrollSpyContainer",value:function(){var e=this.props.containerId,t=this.props.container;return e?document.getElementById(e):t&&t.nodeType?t:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var e=this.getScrollSpyContainer();l.isMounted(e)||l.mount(e),this.props.hashSpy&&(p.isMounted()||p.mount(n),p.mapContainer(this.props.to,e)),this.props.spy&&l.addStateHandler(this.stateHandler),l.addSpyHandler(this.spyHandler,e),this.setState({container:e})}}},{key:"componentWillUnmount",value:function(){l.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var t="";t=this.state&&this.state.active?((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():this.props.className;var n=o({},this.props);for(var r in d)n.hasOwnProperty(r)&&delete n[r];return n.className=t,n.onClick=this.handleClick,u.createElement(e,n)}}]),c}(),h=function(){var e=this;this.scrollTo=function(t,r){n.scrollTo(t,o({},e.state,r))},this.handleClick=function(t){e.props.onClick&&e.props.onClick(t),t.stopPropagation&&t.stopPropagation(),t.preventDefault&&t.preventDefault(),e.scrollTo(e.props.to,e.props)},this.stateHandler=function(){n.getActiveLink()!==e.props.to&&(null!==e.state&&e.state.active&&e.props.onSetInactive&&e.props.onSetInactive(),e.setState({active:!1}))},this.spyHandler=function(t){var o=e.getScrollSpyContainer();if(!p.isMounted()||p.isInitialized()){var r=e.props.to,i=null,a=0,s=0,u=0;if(o.getBoundingClientRect)u=o.getBoundingClientRect().top;if(!i||e.props.isDynamic){if(!(i=n.get(r)))return;var c=i.getBoundingClientRect();s=(a=c.top-u+t)+c.height}var f=t-e.props.offset,d=f>=Math.floor(a)&&f<Math.floor(s),h=f<Math.floor(a)||f>=Math.floor(s),y=n.getActiveLink();return h?(r===y&&n.setActiveLink(void 0),e.props.hashSpy&&p.getHash()===r&&p.changeHash(),e.props.spy&&e.state.active&&(e.setState({active:!1}),e.props.onSetInactive&&e.props.onSetInactive()),l.updateStates()):d&&y!==r?(n.setActiveLink(r),e.props.hashSpy&&p.changeHash(r),e.props.spy&&(e.setState({active:!0}),e.props.onSetActive&&e.props.onSetActive(r)),l.updateStates()):void 0}}};return f.propTypes=d,f.defaultProps={offset:0},f},Element:function(e){console.warn("Helpers.Element is deprecated since v1.7.0");var t=function(t){function n(e){i(this,n);var t=a(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.childBindings={domNode:null},t}return s(n,u.Component),r(n,[{key:"componentDidMount",value:function(){if("undefined"==typeof window)return!1;this.registerElems(this.props.name)}},{key:"componentWillReceiveProps",value:function(e){this.props.name!==e.name&&this.registerElems(e.name)}},{key:"componentWillUnmount",value:function(){if("undefined"==typeof window)return!1;c.unregister(this.props.name)}},{key:"registerElems",value:function(e){c.register(e,this.childBindings.domNode)}},{key:"render",value:function(){return u.createElement(e,o({},this.props,{parentBindings:this.childBindings}))}}]),n}();return t.propTypes={name:f.string,id:f.string},t}};e.exports=h}},[[279,1,0,2]]]);