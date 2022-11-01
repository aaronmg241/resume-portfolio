import GithubImage from '../images/github.jpg'
import ContactImage from '../images/contact.jpg'
import ResumeImage from '../images/resume.jpg'
import AaronImage from '../images/PicOfMe.jpg'

import NavCard from './NavCard'
import NavButton from './NavButton';
import Contact from './Contact';

import './NavMenu.css'
import { useState } from 'react'

const handleScroll = (e) => {

	const swiper = document.getElementsByClassName('menu-swiper')[0]
	const cards = document.getElementsByClassName('menu-card')

	const widthOfSwiper = cards[3].offsetLeft + cards[3].offsetWidth + 50
	const pageWidth = document.getElementsByClassName('menu')[0].offsetWidth

	if (widthOfSwiper < pageWidth) {
		swiper.style.transform = 'translateX(0)'
		return
	}

	let ratio = e.clientX / pageWidth
	if (ratio > 0.4 && ratio < 0.6) return
	if (ratio < 0.15 || ratio > 0.85) ratio = Math.round(ratio) // Rounds to endpoints if we get "close enough"
	

	const scrollTo = ratio * (widthOfSwiper - pageWidth)
	swiper.style.transform = 'translateX(' + scrollTo * -1 + 'px)'

}

function NavMenu(props) {

    const [infoPageContent, setInfoPageContent] = useState(<div/>)
    const [overlayState, setOverlayState] = useState("none")

    return (
        <>
            <div className='menu' onMouseMove={handleScroll}>

                <div className="menu-swiper hide-scroll">

                    <NavCard 
                        label="CV"
                        img={ResumeImage}
                    />

                    <NavCard 
                        label="Github"
                        onClick={() => {
                            window.open("https://www.github.com/aaronmg241")
                        }}
                        img={GithubImage}
                    />

                    <NavCard 
                        label="Contact"
                        onClick={() => {
                            document.getElementsByClassName('info-page')[0].classList.add('info-page-visible')
                            setInfoPageContent(<Contact/>)
                            setOverlayState("info-page")
                        }}
                        img={ContactImage}
                    />

                    <NavCard 
                        label="About Me"
                        onClick={() => {
                            document.getElementsByClassName('info-page')[0].classList.add('info-page-visible')
                            setInfoPageContent(<div> About me </div>)
                            setOverlayState("info-page")
                        }}
                        img={AaronImage}
                    />

                </div>

            </div>
            <div className="info-page"> {infoPageContent} </div>    
            <NavButton overlayState={overlayState} setOverlayState={setOverlayState}/>	
        </>
    )
}

export default NavMenu