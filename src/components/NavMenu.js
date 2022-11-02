import GithubImage from '../images/github.jpg';
import ContactImage from '../images/contact.jpg';
import ResumeImage from '../images/resume.jpg';
import AaronImage from '../images/PicOfMe.jpg';

import NavCard from './NavCard';
import NavButton from './NavButton';
import Contact from './Contact';
import About from './About';

import './NavMenu.css';
import { useContext } from 'react';
import { OverlayContext } from '../context/OverlayContext';

const handleScroll = (e) => {
    if (e.movementX === 0 && e.movementY === 0) return; // Disable this if clicking on a mobile device

    const swiper = document.getElementsByClassName('menu-swiper')[0];
    const cards = document.getElementsByClassName('menu-card');

    const widthOfSwiper = cards[3].offsetLeft + cards[3].offsetWidth + 50;
    const pageWidth = document.getElementsByClassName('menu')[0].offsetWidth;

    if (widthOfSwiper < pageWidth) {
        swiper.style.transform = 'translateX(0)';
        return;
    }

    let ratio = e.clientX / pageWidth;
    if (ratio > 0.4 && ratio < 0.6) return;
    if (ratio < 0.15 || ratio > 0.85) ratio = Math.round(ratio); // Rounds to endpoints if we get "close enough"

    const scrollTo = ratio * (widthOfSwiper - pageWidth);
    swiper.style.transform = 'translateX(' + scrollTo * -1 + 'px)';
};

function NavMenu() {
    const { infoPageContent, showInfoPage } = useContext(OverlayContext);

    return (
        <>
            <nav className="menu" onMouseMove={handleScroll}>
                <ul className="menu-swiper hide-scroll">
                    <NavCard
                        label="CV"
                        img={ResumeImage}
                        onClick={() => {
                            showInfoPage(<div> Coming soon! </div>);
                        }}
                    />

                    <NavCard
                        label="Github"
                        onClick={() => {
                            window.open('https://www.github.com/aaronmg241');
                        }}
                        img={GithubImage}
                    />

                    <NavCard
                        label="Contact"
                        onClick={() => {
                            showInfoPage(<Contact />);
                        }}
                        img={ContactImage}
                    />

                    <NavCard
                        label="About Me"
                        onClick={() => {
                            showInfoPage(<About />);
                        }}
                        img={AaronImage}
                    />
                </ul>
            </nav>
            <div className="info-page"> {infoPageContent} </div>
            <NavButton />
        </>
    );
}

export default NavMenu;
