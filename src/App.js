import './App.css';
import WordleScreenshot from './images/WordleScreenshot.jpg';
import MazeBuilderScreenshot from './images/MazeBuilderScreenshot.jpg';
import BTRApplicantScreenshot from './images/BTRApplicantScreenshot.jpg';
import BTRWebsiteScreenshot from './images/BTRWebsiteScreenshot.jpg';
import BTRClientScreenshot from './images/BTRClientScreenshot.jpg';
import ResearchPaperImage from './images/research-paper.jpg';
import URAResearchPaperImage from './images/URA-research-paper.jpg';

import Project from './components/Project';
import NavMenu from './components/NavMenu';
import LoadingPage from './components/LoadingPage';
import { useEffect } from 'react';

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
            <LoadingPage />

            <div className="page-wrapper">
                <div className="media-scroll-container">
                    <div className="scroll-column">
                        <Project
                            label="Personal Project"
                            img={WordleScreenshot}
                            description="Wordle clone with a built in solver."
                            onClick={() => {
                                window.open('https://aaron-wordleclone.netlify.app/');
                            }}
                        />

                        <Project
                            label="Personal Project"
                            img={MazeBuilderScreenshot}
                            description="Random maze generator and shortest path calculator."
                            onClick={() => {
                                window.open('https://aaron-mazegeneratorsolver.netlify.app');
                            }}
                        />

                        <Project
                            label="Research Paper"
                            img={URAResearchPaperImage}
                            description="Research paper accepted at the COCOON 2021 Conference."
                            onClick={() => {
                                window.open('https://arxiv.org/pdf/2108.09363.pdf');
                            }}
                        />
                    </div>

                    <div className="scroll-column">
                        <Project
                            label="Professional Project"
                            img={BTRApplicantScreenshot}
                            description="BTR Applicant Portal, a job application service built for the Real Estate Industry."
                        />

                        <Project
                            label="Professional Project"
                            img={BTRWebsiteScreenshot}
                            description="Business website for BTRHire."
                            onClick={() => {
                                window.open('https://www.btrhire.ca');
                            }}
                        />

                        <Project
                            label="Professional Project"
                            img={BTRClientScreenshot}
                            description="BTR Client Portal, which allows clients to see results and manage tests on the BTR applicant portal."
                        />

                        <Project
                            label="Research Paper"
                            img={ResearchPaperImage}
                            description="Journal version and extension of work done during my URA. This version was completed during the last semester of my undergraduate."
                            onClick={() => {
                                window.open('https://arxiv.org/pdf/2202.01746.pdf');
                            }}
                        />
                    </div>
                </div>
            </div>

            <NavMenu />
        </div>
    );
}

export default App;
