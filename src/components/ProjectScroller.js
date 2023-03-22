import React from 'react';

import WordleScreenshot from '../images/WordleScreenshot.jpg';
import MazeBuilderScreenshot from '../images/MazeBuilderScreenshot.jpg';
import BTRApplicantScreenshot from '../images/BTRApplicantScreenshot.jpg';
import BTRWebsiteScreenshot from '../images/BTRWebsiteScreenshot.jpg';
import BTRClientScreenshot from '../images/BTRClientImages/Dashboard.jpg';
import ResearchPaperImage from '../images/research-paper.jpg';
import URAResearchPaperImage from '../images/URA-research-paper.jpg';
import GrindstoneWebsiteImage from '../images/GrindstoneWebsite.jpg';

import Project from './Project';

import { useContext } from 'react';
import { OverlayContext } from '../context/OverlayContext';
import BTRClientDescription from './ProjectDescriptions/BTRClientDescription';
import BTRCandidateDescription from './ProjectDescriptions/BTRCandidateDescription';

function ProjectScroller() {
    const { showInfoPage } = useContext(OverlayContext);

    return (
        <div className="media-scroll-container">
            <div className="scroll-column">
                <Project
                    label="Professional Project"
                    img={BTRClientScreenshot}
                    description="BTR Client Portal, which allows clients to see results and manage tests on the BTR applicant portal."
                    onClick={() => {
                        showInfoPage(<BTRClientDescription />);
                    }}
                />

                <Project
                    label="Professional Project"
                    img={BTRApplicantScreenshot}
                    description="BTR Applicant Portal, a job application service built for the Real Estate Industry."
                    onClick={() => {
                        showInfoPage(<BTRCandidateDescription />);
                    }}
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
                    img={GrindstoneWebsiteImage}
                    description="Business website created for Grindstone Recruiting."
                    onClick={() => {
                        window.open('https://www.grindstonerecruit.ca');
                    }}
                />
            </div>

            <div className="scroll-column">
                <Project
                    label="Personal Project"
                    img={WordleScreenshot}
                    description="Wordle clone with a built in 'best guess calculator'."
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
    );
}

export default ProjectScroller;
