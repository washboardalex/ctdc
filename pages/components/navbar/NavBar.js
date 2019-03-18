//React scroll can use element id as a reference for where to scroll.
//I have put these either in the title elements (h1) or their surrounding divs
import { Link, animateScroll as scroll } from 'react-scroll';

import Burger from './components/burgermenu/BurgerMenu';
import './NavBar.scss';



class NavBar extends React.Component {
	constructor() {
		super();
		this.state = {
			useCheezeburger: true
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
    this.setState({ useCheezeburger: window.innerWidth < 1085 });
  }

  render() {
    const useCheezeburger = this.state.useCheezeburger;

		return (
			  
	    <div>
         {useCheezeburger ? (
           <div> 
           	<Burger />
           </div>
         ) : (
           <React.Fragment>
           <div className="nav-contact-bar"> 
             <div className="contact-bar-text"> 
               Ph: 0431 771 088 | E-mail: cleveland.tooth@gmail.com | Provider Number: 4040361H | ABN: 68 099 671 964
             </div>
           </div>
           <nav style={{marginBottom:'40px', marginTop:'20px'}} className="nav-bar-style">
 						<ul className="align-nav-items">
              <Link
                activeClass="active"
                to="aboutsection"
                spy={true}
                smooth={true}
                offset={-70}
                duration= {700}
              >
                <li id="about" className="button type1">About</li>
              </Link>
              <Link
                activeClass="active"
                to="servicessection"
                spy={true}
                smooth={true}
                offset={-70}
                duration= {800}
              >
 							  <li id="services" className="button type2"><span className="no-underline">Services</span></li>
              </Link>
 							<li id="" className="button-main nav-bar-head">
                <h1 className="nav-logo-text">Cleve-Tooth</h1>
                <img style={{margin:'20px'}} src="/static/logo3_opt.png" alt="Tooth" height="90" width="90"/>
                <h1 className="nav-logo-text">Denture Clinic</h1></li>
              <Link
                activeClass="active"
                to="locationsection"
                spy={true}
                smooth={true}
                offset={-70}
                duration= {800}
              >
 							  <li id="faq" className="button type3">Location</li>
              </Link>
              <Link
                activeClass="active"
                to="contactsection"
                spy={true}
                smooth={true}
                offset={-35}
                duration= {1000}
              >
 							  <li id="contact" className="button type2">Contact</li>
              </Link>
 						</ul>
 					</nav>
           </React.Fragment>
         )}
       </div>
		);
	}
} 
	
export default NavBar;