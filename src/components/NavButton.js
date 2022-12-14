import { useContext } from 'react';
import { OverlayContext } from '../context/OverlayContext';

function NavButton() {
    const { overlayState, setOverlayState, setInfoPageContent } = useContext(OverlayContext);

    return (
        <button
            id="menu-button"
            onClick={() => {
                const wrapper = document.getElementsByClassName('page-wrapper')[0];
                const menuCards = document.getElementsByClassName('menu-card');

                if (overlayState === 'nav-menu') {
                    setInfoPageContent(<div />);
                    wrapper.classList.remove('shifted-up');
                    for (const element of menuCards) {
                        element.classList.remove('zoom-in');
                    }
                    setOverlayState('none');
                } else if (overlayState === 'none') {
                    wrapper.classList.add('shifted-up');
                    for (const element of menuCards) {
                        element.classList.add('zoom-in');
                    }
                    setOverlayState('nav-menu');
                } else if (overlayState === 'info-page') {
                    document.getElementsByClassName('info-page')[0].classList.remove('info-page-visible');
                    if (wrapper.classList.contains('shifted-up')) setOverlayState('nav-menu');
                    else setOverlayState('none');
                }
            }}
        >
            {overlayState === 'none' && <i className="fa-solid fa-bars" />}
            {overlayState === 'nav-menu' && <i className="fa-solid fa-x" />}
            {overlayState === 'info-page' && <i className="fa-solid fa-arrow-down" />}
        </button>
    );
}

export default NavButton;
