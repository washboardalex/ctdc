(window.webpackJsonp=window.webpackJsonp||[]).push([["0835"],{"/PZL":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={defaultEasing:function(t){return t<.5?Math.pow(2*t,2)/2:1-Math.pow(2*(1-t),2)/2},linear:function(t){return t},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return t*(2-t)},easeInOutQuad:function(t){return t<.5?2*t*t:(4-2*t)*t-1},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return--t*t*t+1},easeInOutCubic:function(t){return t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return 1- --t*t*t*t},easeInOutQuart:function(t){return t<.5?8*t*t*t*t:1-8*--t*t*t*t},easeInQuint:function(t){return t*t*t*t*t},easeOutQuint:function(t){return 1+--t*t*t*t*t},easeInOutQuint:function(t){return t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t}}},"/eQG":function(t,e,n){n("v5Dd");var o=n("WEpk").Object;t.exports=function(t,e){return o.getOwnPropertyDescriptor(t,e)}},"1MIz":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/navbar/components/burgermenu/BurgerMenu",function(){var t=n("gHot");return{page:t.default||t}}])},"4mXO":function(t,e,n){t.exports=n("7TPF")},"7FV1":function(t,e,n){"use strict";var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},r=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}();function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var u=n("q1tI"),l=(n("i8i4"),n("xFC4"),n("wT0s")),c=n("zPnG"),f=n("HMZa"),p=n("Dy/p"),d={to:f.string.isRequired,containerId:f.string,container:f.object,activeClass:f.string,spy:f.bool,smooth:f.oneOfType([f.bool,f.string]),offset:f.number,delay:f.number,isDynamic:f.bool,onClick:f.func,duration:f.oneOfType([f.number,f.func]),absolute:f.bool,onSetActive:f.func,onSetInactive:f.func,ignoreCancelEvents:f.bool,hashSpy:f.bool},h={Scroll:function(t,e){console.warn("Helpers.Scroll is deprecated since v1.7.0");var n=e||c,f=function(e){function c(t){i(this,c);var e=a(this,(c.__proto__||Object.getPrototypeOf(c)).call(this,t));return h.call(e),e.state={active:!1},e}return s(c,u.Component),r(c,[{key:"getScrollSpyContainer",value:function(){var t=this.props.containerId,e=this.props.container;return t?document.getElementById(t):e&&e.nodeType?e:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var t=this.getScrollSpyContainer();l.isMounted(t)||l.mount(t),this.props.hashSpy&&(p.isMounted()||p.mount(n),p.mapContainer(this.props.to,t)),this.props.spy&&l.addStateHandler(this.stateHandler),l.addSpyHandler(this.spyHandler,t),this.setState({container:t})}}},{key:"componentWillUnmount",value:function(){l.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var e="";e=this.state&&this.state.active?((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():this.props.className;var n=o({},this.props);for(var r in d)n.hasOwnProperty(r)&&delete n[r];return n.className=e,n.onClick=this.handleClick,u.createElement(t,n)}}]),c}(),h=function(){var t=this;this.scrollTo=function(e,r){n.scrollTo(e,o({},t.state,r))},this.handleClick=function(e){t.props.onClick&&t.props.onClick(e),e.stopPropagation&&e.stopPropagation(),e.preventDefault&&e.preventDefault(),t.scrollTo(t.props.to,t.props)},this.stateHandler=function(){n.getActiveLink()!==t.props.to&&(null!==t.state&&t.state.active&&t.props.onSetInactive&&t.props.onSetInactive(),t.setState({active:!1}))},this.spyHandler=function(e){var o=t.getScrollSpyContainer();if(!p.isMounted()||p.isInitialized()){var r=t.props.to,i=null,a=0,s=0,u=0;if(o.getBoundingClientRect)u=o.getBoundingClientRect().top;if(!i||t.props.isDynamic){if(!(i=n.get(r)))return;var c=i.getBoundingClientRect();s=(a=c.top-u+e)+c.height}var f=e-t.props.offset,d=f>=Math.floor(a)&&f<Math.floor(s),h=f<Math.floor(a)||f>=Math.floor(s),v=n.getActiveLink();return h?(r===v&&n.setActiveLink(void 0),t.props.hashSpy&&p.getHash()===r&&p.changeHash(),t.props.spy&&t.state.active&&(t.setState({active:!1}),t.props.onSetInactive&&t.props.onSetInactive()),l.updateStates()):d&&v!==r?(n.setActiveLink(r),t.props.hashSpy&&p.changeHash(r),t.props.spy&&(t.setState({active:!0}),t.props.onSetActive&&t.props.onSetActive(r)),l.updateStates()):void 0}}};return f.propTypes=d,f.defaultProps={offset:0},f},Element:function(t){console.warn("Helpers.Element is deprecated since v1.7.0");var e=function(e){function n(t){i(this,n);var e=a(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,t));return e.childBindings={domNode:null},e}return s(n,u.Component),r(n,[{key:"componentDidMount",value:function(){if("undefined"==typeof window)return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(t){this.props.name!==t.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if("undefined"==typeof window)return!1;c.unregister(this.props.name)}},{key:"registerElems",value:function(t){c.register(t,this.childBindings.domNode)}},{key:"render",value:function(){return u.createElement(t,o({},this.props,{parentBindings:this.childBindings}))}}]),n}();return e.propTypes={name:f.string,id:f.string},e}};t.exports=h},"7TPF":function(t,e,n){n("AUvm"),t.exports=n("WEpk").Object.getOwnPropertySymbols},"7wkA":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),r=a(n("q1tI")),i=a(n("pUFB"));function a(t){return t&&t.__esModule?t:{default:t}}var s=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,r.default.Component),o(e,[{key:"render",value:function(){return r.default.createElement("input",this.props,this.props.children)}}]),e}();e.default=(0,i.default)(s)},"8QoP":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("QLqi"),r=["mousedown","mousewheel","touchmove","keydown"];e.default={subscribe:function(t){return"undefined"!=typeof document&&r.forEach(function(e){return(0,o.addPassiveEventListener)(document,e,t)})}}},"Dy/p":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});n("QLqi");var o,r=n("xFC4"),i=(o=r)&&o.__esModule?o:{default:o};var a={mountFlag:!1,initialized:!1,scroller:null,containers:{},mount:function(t){this.scroller=t,this.handleHashChange=this.handleHashChange.bind(this),window.addEventListener("hashchange",this.handleHashChange),this.initStateFromHash(),this.mountFlag=!0},mapContainer:function(t,e){this.containers[t]=e},isMounted:function(){return this.mountFlag},isInitialized:function(){return this.initialized},initStateFromHash:function(){var t=this,e=this.getHash();e?window.setTimeout(function(){t.scrollTo(e,!0),t.initialized=!0},10):this.initialized=!0},scrollTo:function(t,e){var n=this.scroller;if(n.get(t)&&(e||t!==n.getActiveLink())){var o=this.containers[t]||document;n.scrollTo(t,{container:o})}},getHash:function(){return i.default.getHash()},changeHash:function(t,e){this.isInitialized()&&i.default.getHash()!==t&&i.default.updateHash(t,e)},handleHashChange:function(){this.scrollTo(this.getHash())},unmount:function(){this.scroller=null,this.containers=null,window.removeEventListener("hashchange",this.handleHashChange)}};e.default=a},HMZa:function(t,e,n){t.exports=n("hrJz")()},"Jo+v":function(t,e,n){t.exports=n("/eQG")},JqHf:function(t,e,n){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},Mqbl:function(t,e,n){var o=n("JB68"),r=n("w6GO");n("zn7N")("keys",function(){return function(t){return r(o(t))}})},NEP4:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},r=(s(n("xFC4")),s(n("/PZL"))),i=s(n("8QoP")),a=s(n("QQPg"));function s(t){return t&&t.__esModule?t:{default:t}}var u=function(t){return r.default[t.smooth]||r.default.defaultEasing},l=function(){if("undefined"!=typeof window)return window.requestAnimationFrame||window.webkitRequestAnimationFrame}()||function(t,e,n){window.setTimeout(t,n||1e3/60,(new Date).getTime())},c=function(t){var e=t.data.containerElement;if(e&&e!==document&&e!==document.body)return e.scrollLeft;var n=void 0!==window.pageXOffset,o="CSS1Compat"===(document.compatMode||"");return n?window.pageXOffset:o?document.documentElement.scrollLeft:document.body.scrollLeft},f=function(t){var e=t.data.containerElement;if(e&&e!==document&&e!==document.body)return e.scrollTop;var n=void 0!==window.pageXOffset,o="CSS1Compat"===(document.compatMode||"");return n?window.pageYOffset:o?document.documentElement.scrollTop:document.body.scrollTop},p=function(t){t.data.containerElement=t?t.containerId?document.getElementById(t.containerId):t.container&&t.container.nodeType?t.container:document:null},d=function(t,e,n,o){if(e.data=e.data||{currentPosition:0,startPosition:0,targetPosition:0,progress:0,duration:0,cancel:!1,target:null,containerElement:null,to:null,start:null,delta:null,percent:null,delayTimeout:null},window.clearTimeout(e.data.delayTimeout),i.default.subscribe(function(){e.data.cancel=!0}),p(e),e.data.start=null,e.data.cancel=!1,e.data.startPosition=e.horizontal?c(e):f(e),e.data.targetPosition=e.absolute?t:t+e.data.startPosition,e.data.startPosition!==e.data.targetPosition){var r;e.data.delta=Math.round(e.data.targetPosition-e.data.startPosition),e.data.duration=("function"==typeof(r=e.duration)?r:function(){return r})(e.data.delta),e.data.duration=isNaN(parseFloat(e.data.duration))?1e3:parseFloat(e.data.duration),e.data.to=n,e.data.target=o;var s=u(e),d=function t(e,n,o){var r=n.data;if(n.ignoreCancelEvents||!r.cancel)if(r.delta=Math.round(r.targetPosition-r.startPosition),null===r.start&&(r.start=o),r.progress=o-r.start,r.percent=r.progress>=r.duration?1:e(r.progress/r.duration),r.currentPosition=r.startPosition+Math.ceil(r.delta*r.percent),r.containerElement&&r.containerElement!==document&&r.containerElement!==document.body?n.horizontal?r.containerElement.scrollLeft=r.currentPosition:r.containerElement.scrollTop=r.currentPosition:n.horizontal?window.scrollTo(r.currentPosition,0):window.scrollTo(0,r.currentPosition),r.percent<1){var i=t.bind(null,e,n);l.call(window,i)}else a.default.registered.end&&a.default.registered.end(r.to,r.target,r.currentPosition);else a.default.registered.end&&a.default.registered.end(r.to,r.target,r.currentPositionY)}.bind(null,s,e);e&&e.delay>0?e.data.delayTimeout=window.setTimeout(function(){a.default.registered.begin&&a.default.registered.begin(e.data.to,e.data.target),l.call(window,d)},e.delay):(a.default.registered.begin&&a.default.registered.begin(e.data.to,e.data.target),l.call(window,d))}else a.default.registered.end&&a.default.registered.end(e.data.to,e.data.target,e.data.currentPosition)},h=function(t){return(t=o({},t)).data=t.data||{currentPosition:0,startPosition:0,targetPosition:0,progress:0,duration:0,cancel:!1,target:null,containerElement:null,to:null,start:null,delta:null,percent:null,delayTimeout:null},t.absolute=!0,t};e.default={animateTopScroll:d,getAnimationType:u,scrollToTop:function(t){d(0,h(t))},scrollToBottom:function(t){t=h(t),p(t),d(t.horizontal?function(t){var e=t.data.containerElement;if(e&&e!==document&&e!==document.body)return e.scrollWidth-e.offsetWidth;var n=document.body,o=document.documentElement;return Math.max(n.scrollWidth,n.offsetWidth,o.clientWidth,o.scrollWidth,o.offsetWidth)}(t):function(t){var e=t.data.containerElement;if(e&&e!==document&&e!==document.body)return e.scrollHeight-e.offsetHeight;var n=document.body,o=document.documentElement;return Math.max(n.scrollHeight,n.offsetHeight,o.clientHeight,o.scrollHeight,o.offsetHeight)}(t),t)},scrollTo:function(t,e){d(t,h(e))},scrollMore:function(t,e){e=h(e),p(e);var n=e.horizontal?c(e):f(e);d(t+n,e)}}},PGca:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i(n("q1tI")),r=i(n("pUFB"));function i(t){return t&&t.__esModule?t:{default:t}}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var s=function(t){function e(){var t,n,r;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var i=arguments.length,s=Array(i),u=0;u<i;u++)s[u]=arguments[u];return n=r=a(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(s))),r.render=function(){return o.default.createElement("a",r.props,r.props.children)},a(r,n)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,o.default.Component),e}();e.default=(0,r.default)(s)},QLqi:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.addPassiveEventListener=function(t,e,n){var o=function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("test",null,e)}catch(n){}return t}();t.addEventListener(e,n,!!o&&{passive:!0})},e.removePassiveEventListener=function(t,e,n){t.removeEventListener(e,n)}},QQPg:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o={registered:{},scrollEvent:{register:function(t,e){o.registered[t]=e},remove:function(t){o.registered[t]=null}}};e.default=o},Y30y:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},r=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),i=u(n("q1tI")),a=u(n("w2Tm")),s=u(n("HMZa"));function u(t){return t&&t.__esModule?t:{default:t}}var l=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,i.default.Component),r(e,[{key:"render",value:function(){var t=this,e=o({},this.props);return e.parentBindings&&delete e.parentBindings,i.default.createElement("div",o({},e,{ref:function(e){t.props.parentBindings.domNode=e}}),this.props.children)}}]),e}();l.propTypes={name:s.default.string,id:s.default.string},e.default=(0,a.default)(l)},gHot:function(t,e,n){"use strict";n.r(e);var o=n("pbKT"),r=n.n(o),i=n("Jo+v"),a=n.n(i),s=n("4mXO"),u=n.n(s),l=n("pLtp"),c=n.n(l),f=n("vYYK");function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=c()(n);"function"==typeof u.a&&(o=o.concat(u()(n).filter(function(t){return a()(n,t).enumerable}))),o.forEach(function(e){Object(f.a)(t,e,n[e])})}return t}var d=n("0iUn"),h=n("sLSF"),v=n("Tit0"),y=n("MI3g"),m=n("a7VT"),g=n("q1tI"),b=n.n(g),w=n("oqc9");n("KIi1");function O(t){var e=function(){if("undefined"==typeof Reflect||!r.a)return!1;if(r.a.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(r()(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var n,o=Object(m.default)(t);if(e){var i=Object(m.default)(this).constructor;n=r()(o,arguments,i)}else n=o.apply(this,arguments);return Object(y.default)(this,n)}}var S=function(t){Object(v.default)(n,t);var e=O(n);function n(t){var o;return Object(d.default)(this,n),(o=e.call(this,t)).state={menuOpen:!1},o}return Object(h.default)(n,[{key:"handleMenuClick",value:function(){this.setState({menuOpen:!this.state.menuOpen})}},{key:"handleLinkClick",value:function(){this.setState({menuOpen:!1})}},{key:"render",value:function(){var t=this,e={container:{position:"absolute",top:0,left:30,zIndex:"99",opacity:.9,display:"flex",alignItems:"center",background:"white",width:"100%",color:"black",fontFamily:"Lobster"},logo:{margin:"0 auto",transform:"translateX(-40px)",marginTop:"10px"},body:{display:"flex",flexDirection:"column",alignItems:"center",width:"100vw",height:"100vh",filter:this.state.menuOpen?"blur(2px)":null,transition:"filter 0.5s ease"}},n=["aboutsection","servicessection","locationsection","contactsection"],o=["About","Services","Location","Contact"].map(function(e,o){return b.a.createElement(w.Link,{activeClass:"active",key:o,to:n[o],spy:!0,smooth:!0,offset:-70,duration:700},b.a.createElement(E,{key:o,delay:"".concat(.1*o,"s"),onClick:function(){t.handleLinkClick()}},e))});return b.a.createElement("div",null,b.a.createElement("div",{style:e.container},b.a.createElement(C,{open:this.state.menuOpen,onClick:function(){return t.handleMenuClick()},color:"black"}),b.a.createElement("div",{style:e.logo},b.a.createElement("img",{src:"/static/logo3_opt.png",alt:"Tooth",height:"90",width:"90"}))),b.a.createElement(P,{open:this.state.menuOpen},o))}}]),n}(b.a.Component),E=function(t){Object(v.default)(n,t);var e=O(n);function n(t){var o;return Object(d.default)(this,n),(o=e.call(this,t)).state={hover:!1},o}return Object(h.default)(n,[{key:"handleHover",value:function(){this.setState({hover:!this.state.hover})}},{key:"render",value:function(){var t=this,e={container:{opacity:0,animation:"1s appear forwards",animationDelay:this.props.delay},menuItem:{fontFamily:"'Open Sans', sans-serif",fontSize:"1.2rem",padding:"1rem 0",margin:"0 5%",cursor:"pointer",color:this.state.hover?"gray":"#000000",transition:"color 0.2s ease-in-out",animation:"0.5s slideIn forwards",animationDelay:this.props.delay},line:{width:"90%",height:"1px",background:"gray",margin:"0 auto",animation:"0.5s shrink forwards",animationDelay:this.props.delay}};return b.a.createElement("div",{style:e.container},b.a.createElement("div",{style:e.menuItem,onMouseEnter:function(){t.handleHover()},onMouseLeave:function(){t.handleHover()},onClick:this.props.onClick},this.props.children),b.a.createElement("div",{style:e.line}))}}]),n}(b.a.Component),P=function(t){Object(v.default)(n,t);var e=O(n);function n(t){var o;return Object(d.default)(this,n),(o=e.call(this,t)).state={open:!!o.props.open&&o.props.open},o}return Object(h.default)(n,[{key:"componentWillReceiveProps",value:function(t){t.open!==this.state.open&&this.setState({open:t.open})}},{key:"render",value:function(){var t={container:{position:"absolute",top:0,left:0,height:this.state.open?"100%":0,width:"100vw",display:"flex",flexDirection:"column",background:"white",opacity:.95,color:"#fafafa",transition:"height 0.3s ease",zIndex:2},menuList:{paddingTop:"100px"}};return b.a.createElement("div",{style:t.container},this.state.open?b.a.createElement("div",{style:t.menuList},this.props.children):null)}}]),n}(b.a.Component),C=function(t){Object(v.default)(n,t);var e=O(n);function n(t){var o;return Object(d.default)(this,n),(o=e.call(this,t)).state={open:!!o.props.open&&o.props.open,color:o.props.color?o.props.color:"black"},o}return Object(h.default)(n,[{key:"componentWillReceiveProps",value:function(t){t.open!==this.state.open&&this.setState({open:t.open})}},{key:"handleClick",value:function(){this.setState({open:!this.state.open})}},{key:"render",value:function(){var t=this,e={container:{height:"32px",width:"32px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",cursor:"pointer",padding:"4px"},line:{height:"2px",width:"20px",background:this.state.color,transition:"all 0.2s ease"},lineTop:{transform:this.state.open?"rotate(45deg)":"none",transformOrigin:"top left",marginBottom:"5px"},lineMiddle:{opacity:this.state.open?0:1,transform:this.state.open?"translateX(-16px)":"none"},lineBottom:{transform:this.state.open?"translateX(-1px) rotate(-45deg)":"none",transformOrigin:"top left",marginTop:"5px"}};return b.a.createElement("div",{style:e.container,onClick:this.props.onClick?this.props.onClick:function(){t.handleClick()}},b.a.createElement("div",{style:p({},e.line,e.lineTop)}),b.a.createElement("div",{style:p({},e.line,e.lineMiddle)}),b.a.createElement("div",{style:p({},e.line,e.lineBottom)}))}}]),n}(b.a.Component),_=function(t){Object(v.default)(n,t);var e=O(n);function n(){return Object(d.default)(this,n),e.apply(this,arguments)}return Object(h.default)(n,[{key:"render",value:function(){return b.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",height:"110px"}},b.a.createElement(S,null))}}]),n}(b.a.Component);e.default=_},"hKI/":function(t,e,n){(function(e){var n="Expected a function",o=NaN,r="[object Symbol]",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,u=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof e&&e&&e.Object===Object&&e,f="object"==typeof self&&self&&self.Object===Object&&self,p=c||f||Function("return this")(),d=Object.prototype.toString,h=Math.max,v=Math.min,y=function(){return p.Date.now()};function m(t,e,o){var r,i,a,s,u,l,c=0,f=!1,p=!1,d=!0;if("function"!=typeof t)throw new TypeError(n);function m(e){var n=r,o=i;return r=i=void 0,c=e,s=t.apply(o,n)}function w(t){var n=t-l;return void 0===l||n>=e||n<0||p&&t-c>=a}function O(){var t=y();if(w(t))return S(t);u=setTimeout(O,function(t){var n=e-(t-l);return p?v(n,a-(t-c)):n}(t))}function S(t){return u=void 0,d&&r?m(t):(r=i=void 0,s)}function E(){var t=y(),n=w(t);if(r=arguments,i=this,l=t,n){if(void 0===u)return function(t){return c=t,u=setTimeout(O,e),f?m(t):s}(l);if(p)return u=setTimeout(O,e),m(l)}return void 0===u&&(u=setTimeout(O,e)),s}return e=b(e)||0,g(o)&&(f=!!o.leading,a=(p="maxWait"in o)?h(b(o.maxWait)||0,e):a,d="trailing"in o?!!o.trailing:d),E.cancel=function(){void 0!==u&&clearTimeout(u),c=0,r=l=i=u=void 0},E.flush=function(){return void 0===u?s:S(y())},E}function g(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function b(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&d.call(t)==r}(t))return o;if(g(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=g(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var n=s.test(t);return n||u.test(t)?l(t.slice(2),n?2:8):a.test(t)?o:+t}t.exports=function(t,e,o){var r=!0,i=!0;if("function"!=typeof t)throw new TypeError(n);return g(o)&&(r="leading"in o?!!o.leading:r,i="trailing"in o?!!o.trailing:i),m(t,e,{leading:r,maxWait:e,trailing:i})}}).call(this,n("yLpj"))},hrJz:function(t,e,n){"use strict";var o=n("JqHf");function r(){}function i(){}i.resetWarningCache=r,t.exports=function(){function t(t,e,n,r,i,a){if(a!==o){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function e(){return t}t.isRequired=t;var n={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:i,resetWarningCache:r};return n.PropTypes=n,n}},iq4v:function(t,e,n){n("Mqbl"),t.exports=n("WEpk").Object.keys},oqc9:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Helpers=e.ScrollElement=e.ScrollLink=e.animateScroll=e.scrollSpy=e.Events=e.scroller=e.Element=e.Button=e.Link=void 0;var o=d(n("PGca")),r=d(n("7wkA")),i=d(n("Y30y")),a=d(n("zPnG")),s=d(n("QQPg")),u=d(n("wT0s")),l=d(n("NEP4")),c=d(n("pUFB")),f=d(n("w2Tm")),p=d(n("7FV1"));function d(t){return t&&t.__esModule?t:{default:t}}e.Link=o.default,e.Button=r.default,e.Element=i.default,e.scroller=a.default,e.Events=s.default,e.scrollSpy=u.default,e.animateScroll=l.default,e.ScrollLink=c.default,e.ScrollElement=f.default,e.Helpers=p.default,e.default={Link:o.default,Button:r.default,Element:i.default,scroller:a.default,Events:s.default,scrollSpy:u.default,animateScroll:l.default,ScrollLink:c.default,ScrollElement:f.default,Helpers:p.default}},pLtp:function(t,e,n){t.exports=n("iq4v")},pUFB:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},r=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),i=c(n("q1tI")),a=c(n("wT0s")),s=c(n("zPnG")),u=c(n("HMZa")),l=c(n("Dy/p"));function c(t){return t&&t.__esModule?t:{default:t}}var f={to:u.default.string.isRequired,containerId:u.default.string,container:u.default.object,activeClass:u.default.string,spy:u.default.bool,horizontal:u.default.bool,smooth:u.default.oneOfType([u.default.bool,u.default.string]),offset:u.default.number,delay:u.default.number,isDynamic:u.default.bool,onClick:u.default.func,duration:u.default.oneOfType([u.default.number,u.default.func]),absolute:u.default.bool,onSetActive:u.default.func,onSetInactive:u.default.func,ignoreCancelEvents:u.default.bool,hashSpy:u.default.bool,saveHashHistory:u.default.bool};e.default=function(t,e){var n=e||s.default,u=function(e){function s(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,s);var e=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(s.__proto__||Object.getPrototypeOf(s)).call(this,t));return c.call(e),e.state={active:!1},e}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(s,i.default.PureComponent),r(s,[{key:"getScrollSpyContainer",value:function(){var t=this.props.containerId,e=this.props.container;return t&&!e?document.getElementById(t):e&&e.nodeType?e:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var t=this.getScrollSpyContainer();a.default.isMounted(t)||a.default.mount(t),this.props.hashSpy&&(l.default.isMounted()||l.default.mount(n),l.default.mapContainer(this.props.to,t)),a.default.addSpyHandler(this.spyHandler,t),this.setState({container:t})}}},{key:"componentWillUnmount",value:function(){a.default.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var e="";e=this.state&&this.state.active?((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():this.props.className;var n=o({},this.props);for(var r in f)n.hasOwnProperty(r)&&delete n[r];return n.className=e,n.onClick=this.handleClick,i.default.createElement(t,n)}}]),s}(),c=function(){var t=this;this.scrollTo=function(e,r){n.scrollTo(e,o({},t.state,r))},this.handleClick=function(e){t.props.onClick&&t.props.onClick(e),e.stopPropagation&&e.stopPropagation(),e.preventDefault&&e.preventDefault(),t.scrollTo(t.props.to,t.props)},this.spyHandler=function(e,o){var r=t.getScrollSpyContainer();if(!l.default.isMounted()||l.default.isInitialized()){var i=t.props.horizontal,a=t.props.to,s=null,u=void 0,c=void 0;if(i){var f=0,p=0,d=0;if(r.getBoundingClientRect)d=r.getBoundingClientRect().left;if(!s||t.props.isDynamic){if(!(s=n.get(a)))return;var h=s.getBoundingClientRect();p=(f=h.left-d+e)+h.width}var v=e-t.props.offset;u=v>=Math.floor(f)&&v<Math.floor(p),c=v<Math.floor(f)||v>=Math.floor(p)}else{var y=0,m=0,g=0;if(r.getBoundingClientRect)g=r.getBoundingClientRect().top;if(!s||t.props.isDynamic){if(!(s=n.get(a)))return;var b=s.getBoundingClientRect();m=(y=b.top-g+o)+b.height}var w=o-t.props.offset;u=w>=Math.floor(y)&&w<Math.floor(m),c=w<Math.floor(y)||w>=Math.floor(m)}var O=n.getActiveLink();if(c){if(a===O&&n.setActiveLink(void 0),t.props.hashSpy&&l.default.getHash()===a){var S=t.props.saveHashHistory,E=void 0!==S&&S;l.default.changeHash("",E)}t.props.spy&&t.state.active&&(t.setState({active:!1}),t.props.onSetInactive&&t.props.onSetInactive(a,s))}if(u&&(O!==a||!1===t.state.active)){n.setActiveLink(a);var P=t.props.saveHashHistory,C=void 0!==P&&P;t.props.hashSpy&&l.default.changeHash(a,C),t.props.spy&&(t.setState({active:!0}),t.props.onSetActive&&t.props.onSetActive(a,s))}}}};return u.propTypes=f,u.defaultProps={offset:0},u}},v5Dd:function(t,e,n){var o=n("NsO/"),r=n("vwuL").f;n("zn7N")("getOwnPropertyDescriptor",function(){return function(t,e){return r(o(t),e)}})},w2Tm:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},r=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),i=u(n("q1tI")),a=(u(n("i8i4")),u(n("zPnG"))),s=u(n("HMZa"));function u(t){return t&&t.__esModule?t:{default:t}}e.default=function(t){var e=function(e){function n(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n);var e=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,t));return e.childBindings={domNode:null},e}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(n,i.default.Component),r(n,[{key:"componentDidMount",value:function(){if("undefined"==typeof window)return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(t){this.props.name!==t.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if("undefined"==typeof window)return!1;a.default.unregister(this.props.name)}},{key:"registerElems",value:function(t){a.default.register(t,this.childBindings.domNode)}},{key:"render",value:function(){return i.default.createElement(t,o({},this.props,{parentBindings:this.childBindings}))}}]),n}();return e.propTypes={name:s.default.string,id:s.default.string},e}},wT0s:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o,r=n("hKI/"),i=(o=r)&&o.__esModule?o:{default:o},a=n("QLqi");var s={spyCallbacks:[],spySetState:[],scrollSpyContainers:[],mount:function(t){if(t){var e=function(t){return(0,i.default)(t,66)}(function(e){s.scrollHandler(t)});s.scrollSpyContainers.push(t),(0,a.addPassiveEventListener)(t,"scroll",e)}},isMounted:function(t){return-1!==s.scrollSpyContainers.indexOf(t)},currentPositionX:function(t){if(t===document){var e=void 0!==window.pageYOffset,n="CSS1Compat"===(document.compatMode||"");return e?window.pageXOffset:n?document.documentElement.scrollLeft:document.body.scrollLeft}return t.scrollLeft},currentPositionY:function(t){if(t===document){var e=void 0!==window.pageXOffset,n="CSS1Compat"===(document.compatMode||"");return e?window.pageYOffset:n?document.documentElement.scrollTop:document.body.scrollTop}return t.scrollTop},scrollHandler:function(t){(s.scrollSpyContainers[s.scrollSpyContainers.indexOf(t)].spyCallbacks||[]).forEach(function(e){return e(s.currentPositionX(t),s.currentPositionY(t))})},addStateHandler:function(t){s.spySetState.push(t)},addSpyHandler:function(t,e){var n=s.scrollSpyContainers[s.scrollSpyContainers.indexOf(e)];n.spyCallbacks||(n.spyCallbacks=[]),n.spyCallbacks.push(t),t(s.currentPositionX(e),s.currentPositionY(e))},updateStates:function(){s.spySetState.forEach(function(t){return t()})},unmount:function(t,e){s.scrollSpyContainers.forEach(function(t){return t.spyCallbacks&&t.spyCallbacks.length&&t.spyCallbacks.splice(t.spyCallbacks.indexOf(e),1)}),s.spySetState&&s.spySetState.length&&s.spySetState.splice(s.spySetState.indexOf(t),1),document.removeEventListener("scroll",s.scrollHandler)},update:function(){return s.scrollSpyContainers.forEach(function(t){return s.scrollHandler(t)})}};e.default=s},xFC4:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default={updateHash:function(t,e){var n=0===t.indexOf("#")?t.substring(1):t,o=n?"#"+n:"",r=window&&window.location,i=o?r.pathname+r.search+o:r.pathname+r.search;e?history.pushState(null,"",i):history.replaceState(null,"",i)},getHash:function(){return window.location.hash.replace(/^#/,"")},filterElementInContainer:function(t){return function(e){return t.contains?t!=e&&t.contains(e):!!(16&t.compareDocumentPosition(e))}},scrollOffset:function(t,e,n){return n?t===document?e.getBoundingClientRect().left+(window.scrollX||window.pageXOffset):"static"!==getComputedStyle(t).position?e.offsetLeft:e.offsetLeft-t.offsetLeft:t===document?e.getBoundingClientRect().top+(window.scrollY||window.pageYOffset):"static"!==getComputedStyle(t).position?e.offsetTop:e.offsetTop-t.offsetTop}}},zPnG:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},r=s(n("xFC4")),i=s(n("NEP4")),a=s(n("QQPg"));function s(t){return t&&t.__esModule?t:{default:t}}var u={},l=void 0;e.default={unmount:function(){u={}},register:function(t,e){u[t]=e},unregister:function(t){delete u[t]},get:function(t){return u[t]||document.getElementById(t)||document.getElementsByName(t)[0]||document.getElementsByClassName(t)[0]},setActiveLink:function(t){return l=t},getActiveLink:function(){return l},scrollTo:function(t,e){var n=this.get(t);if(n){var s=(e=o({},e,{absolute:!1})).containerId,u=e.container,l=void 0;l=s?document.getElementById(s):u&&u.nodeType?u:document,e.absolute=!0;var c=e.horizontal,f=r.default.scrollOffset(l,n,c)+(e.offset||0);if(!e.smooth)return a.default.registered.begin&&a.default.registered.begin(t,n),l===document?e.horizontal?window.scrollTo(f,0):window.scrollTo(0,f):l.scrollTop=f,void(a.default.registered.end&&a.default.registered.end(t,n));i.default.animateTopScroll(f,e,t,n)}else console.warn("target Element not found")}}}},[["1MIz","5d41","9da1","ad9d"]]]);