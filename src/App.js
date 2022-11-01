import './App.css';
import WordleScreenshot from './images/WordleScreenshot.jpg';
import MazeBuilderScreenshot from './images/MazeBuilderScreenshot.jpg';
import BTRApplicantScreenshot from './images/BTRApplicantScreenshot.jpg';
import BTRWebsiteScreenshot from './images/BTRWebsiteScreenshot.jpg';
import ResearchPaperImage from './images/research-paper.jpg';

import Project from './components/Project';
import NavMenu from './components/NavMenu';
import LoadingPage from './components/LoadingPage';

function App() {
    return (
        <div className="App">
            <LoadingPage />

            <div className="page-wrapper">
                <div className="media-scroll-container">
                    <div className="scroll-column">
                        <Project label="Personal Project" img={WordleScreenshot} description="Wordle clone with a built in solver." />

                        <Project label="Personal Project" img={MazeBuilderScreenshot} description="Random maze generator and shortest path calculator." />

                        <Project
                            label="School Project"
                            img={ResearchPaperImage}
                            description="Research paper completed and published during the completion of my undergraduate degree."
                            onClick={() => {
                                window.open('https://arxiv.org/pdf/2202.01746.pdf');
                            }}
                        />
                    </div>

                    <div className="scroll-column">
                        <Project
                            label="Professional Project"
                            img={BTRApplicantScreenshot}
                            description="A job application portal built for the Real Estate Industry."
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
                            img={BTRApplicantScreenshot}
                            description="A job application portal built for the Real Estate Industry."
                        />
                    </div>
                </div>
            </div>

            <NavMenu />
        </div>
    );
}

export default App;
