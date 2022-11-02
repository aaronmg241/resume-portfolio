import './App.css';

import NavMenu from './components/NavMenu';
import LoadingPage from './components/LoadingPage';
import { useEffect } from 'react';

import OverlayProvider from './context/OverlayContext';
import ProjectScroller from './components/ProjectScroller';

function resizeListenerFunction() {
    calculateInnerHeight();
    resetMenuScrollerPosition();
}

function calculateInnerHeight() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

function resetMenuScrollerPosition() {
    const swiper = document.getElementsByClassName('menu-swiper')[0];
    swiper.style.transform = 'translateX(0)';
}

calculateInnerHeight();

function App() {
    useEffect(() => {
        window.addEventListener('resize', resizeListenerFunction);

        return () => {
            window.removeEventListener('resize', resizeListenerFunction);
        };
    }, []);

    return (
        <div className="App">
            <OverlayProvider>
                <LoadingPage />

                <div className="page-wrapper">
                    <ProjectScroller />
                </div>

                <NavMenu />
            </OverlayProvider>
        </div>
    );
}

export default App;
