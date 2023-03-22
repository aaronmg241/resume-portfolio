import React from 'react';
import styles from './Descriptions.module.css';
import Privacy from '../../images/BTRCandidateImages/PrivacyPolicy.jpg';
import CaseStudy from '../../images/BTRCandidateImages/CaseStudy.jpg';
import PositionDetails from '../../images/BTRCandidateImages/PositionDetails.jpg';
import VoiceRecording from '../../images/BTRCandidateImages/VoiceRecording.jpg';
import Thanks from '../../images/BTRCandidateImages/Thanks.jpg';
import TimedQuestion from '../../images/BTRCandidateImages/TimedQuestion.jpg';

function BTRClientDescription() {
    return (
        <div className={styles['description-container']}>
            <p>
                The BTR candidate portal is where candidates go to take a test. An access code is sent to the candidate which they use on
                the landing page to begin the test. During the test, the candidate can download spreadsheets that are needed for certain
                tests, as well as record a voice response to a question. More information on how I used AWS to manage this can be seen on
                the BTR Client project.
            </p>
            <br />
            <div className={styles['narrow-image-container']}>
                <img className={styles['narrow-image']} src={Privacy} alt="" />
                <img className={styles['narrow-image']} src={CaseStudy} alt="" />
                <img className={styles['narrow-image']} src={PositionDetails} alt="" />
                <img className={styles['narrow-image']} src={VoiceRecording} alt="" />
                <img className={styles['narrow-image']} src={TimedQuestion} alt="" />
                <img className={styles['narrow-image']} src={Thanks} alt="" />
            </div>
        </div>
    );
}

export default BTRClientDescription;
