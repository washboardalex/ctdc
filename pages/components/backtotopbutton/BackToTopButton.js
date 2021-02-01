import {animateScroll as scroll } from 'react-scroll';
import Fade from 'react-reveal/Fade';

import styles from './BackToTopButton.module.scss';

class BackToTopButton extends React.Component {

	constructor() {
		super();
		this.state = {
			hideBackToTopButton: true
		}
	}

	componentDidMount() {
		window.addEventListener("scroll", this.updateToTopRender);
		this.updateToTopRender();
	}

	componentWillUnmount() {
		window.removeEventListener("scroll", this.updateToTopRender);
	}


	updateToTopRender = () => {
		this.setState(prevState => ({
      hideBackToTopButton: !(document.body.scrollTop > 150 || document.documentElement.scrollTop > 150)
    }));
	}

	scrollToTop = ()  => {
    scroll.scrollToTop();
  }


	render() {
		const { hideBackToTopButton } = this.state;
		return (
			<div id="back-to-top-button" className={`${styles.backToTopWrapper}`}>
				{!hideBackToTopButton && 
					<Fade bottom>
						<button onClick={this.scrollToTop} className={`${styles.backToTopButton} ${styles.backToTopButtonPosition}`}>
							<i className="material-icons">arrow_upward</i>
							Top
						</button>
					</Fade>
				}
			</div>
		);
	}

} 

export default BackToTopButton;