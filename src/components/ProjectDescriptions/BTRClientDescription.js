import React from 'react';
import styles from './Descriptions.module.css';
import CandidatesTable from '../../images/BTRClientImages/CandidatesTable.jpg';
import CandidateView from '../../images/BTRClientImages/CandidateView.jpg';
import Dashboard from '../../images/BTRClientImages/Dashboard.jpg';
import Filter from '../../images/BTRClientImages/Filter.jpg';
import Overview from '../../images/BTRClientImages/Overview.jpg';
import ResponsesView from '../../images/BTRClientImages/ResponsesView.jpg';

function BTRClientDescription() {
    return (
        <div className={styles['description-container']}>
            <p>
                The BTR Client portal was developed so that clients could create and manage tests for job postings. They use the tool to
                create a test with customizable questions of various types (long response, multiple choice, voice recording). Then, they can
                create access codes which candidates can use to access the test. Once a candidate has taken the test, the client can view
                the results alongside automated scoring.
            </p>
            <br />
            <p>
                This web application uses the backend created in AWS Amplify to store results. DynamoDB is used for data such as questions,
                tests, and user responses. S3 is used to store voice recording responses and files such as company logos and files that
                contain (fake) property information to complete questions. Cognito is used to manage client login and for other security
                purposes (restricting access to certain response/fields). I used Figma to design the UI.
            </p>
            <br />

            <img className={styles['wide-image']} src={CandidatesTable} alt="" />
            <img className={styles['wide-image']} src={CandidateView} alt="" />
            <img className={styles['wide-image']} src={ResponsesView} alt="" />
            <img className={styles['wide-image']} src={Dashboard} alt="" />
            <img className={styles['wide-image']} src={Filter} alt="" />
            <img className={styles['wide-image']} src={Overview} alt="" />
        </div>
    );
}

export default BTRClientDescription;
