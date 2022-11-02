import { useState, createContext } from 'react';

export const OverlayContext = createContext();

function OverlayProvider({ children }) {
    const [infoPageContent, setInfoPageContent] = useState(<div />);
    const [overlayState, setOverlayState] = useState('none');

    function showInfoPage(element) {
        setInfoPageContent(element);
        setOverlayState('info-page');
        document.getElementsByClassName('info-page')[0].classList.add('info-page-visible');
    }

    return (
        <OverlayContext.Provider
            value={{
                infoPageContent,
                setInfoPageContent,
                overlayState,
                setOverlayState,
                showInfoPage
            }}
        >
            {children}
        </OverlayContext.Provider>
    );
}

export default OverlayProvider;
