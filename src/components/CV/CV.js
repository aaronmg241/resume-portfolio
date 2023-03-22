import React from 'react';
import styles from './CV.module.css';
import ResumeDownload from '../../pdf/ResumeMarch2023.pdf';

/* Development Tools */
// Git
// Figma

/* Languages */
// React
// Javascript
// HTML
// CSS
// C

//

function CV() {
    return (
        <div className={styles['container']}>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                <ul className={styles['info-list']}>
                    <li>
                        <h2 style={{ marginBottom: -5 }}>Aaron Grubb</h2>
                        <h3 style={{ color: 'var(--button-color)' }}>Full Stack Web Developer</h3>
                    </li>
                    <li>
                        <i class="fa-solid fa-location-dot" />
                        <h4>Halifax, Nova Scotia</h4>
                    </li>
                    <li>
                        <i class="fa-regular fa-envelope" />
                        <h4>aaronmg241@gmail.com</h4>
                    </li>

                    <li>
                        <i class="fa-solid fa-phone" />
                        <h4>519-573-0097</h4>
                    </li>
                </ul>
                {/* <h2 style={{ fontWeight: 'normal', fontSize: 32 }}>Full Stack Web Developer</h2> */}
            </div>

            <h4 style={{ fontStyle: 'normal' }}>
                Click{' '}
                <a
                    style={{ color: 'var(--button-color)', textDecoration: 'none', fontWeight: 'bold' }}
                    href={ResumeDownload}
                    target="_blank"
                    rel="noreferrer"
                >
                    here
                </a>{' '}
                to view a simplified pdf version of this resume.
            </h4>

            <div>
                <h3 style={{ marginBottom: 20 }}>Professional Statement</h3>
                <p>
                    As a software developer, I am committed to producing high-quality code that is both efficient and easy to maintain. I
                    believe that writing clean, performant, and maintainable code is crucial to ensuring the longevity and success of any
                    software project.
                </p>
                <br />
                <p>
                    To achieve this goal, I am constantly seeking new knowledge and skills to improve my craft. I recognize that there is
                    always more to learn, and I am eager to learn from those who are more knowledgeable and experienced than myself.
                </p>
            </div>

            <div class={styles['skills']}>
                <h3 style={{ marginBottom: 20 }}>Technical Skills</h3>
                <ul>
                    <li>React</li>
                    <li>Javascript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>AWS DynamoDB</li>
                    <li>AWS S3</li>
                    <li>AWS Amplify</li>
                    <li>AWS Cognito</li>
                    <li>C</li>
                    <li>Git</li>
                    <li>Jest (Unit testing)</li>
                    <li>Cypress (E2E, Component testing)</li>
                    <li>Figma</li>
                    <li>SQL</li>
                </ul>
            </div>

            <div class={styles['other-skills']}>
                <h3 style={{ marginBottom: 20 }}>Other Skills</h3>
                <ul>
                    <li>Fast learner with a strong aptitude for grasping new concepts</li>
                    <li>Strong analytical skills that allow for rapid problem-solving</li>
                    <li>Strong communication and interpersonal skills</li>
                    <li>Organizational skills and ability to manage multiple tasks and responsibilities</li>
                </ul>
            </div>

            <div>
                <h3 style={{ marginBottom: 20 }}>Work Experience</h3>
                <div class={styles['work-experience']}>
                    <h3>BTRHire</h3>
                    <p class={styles['job-title']}>Freelance Software Developer</p>
                    <p class={styles['time-period']}>
                        <i class="fa-solid fa-clock" style={{ marginRight: 8 }} />
                        December 2021 - Current
                    </p>
                    <ul>
                        <li>
                            Developed a web-based testing application (BTR Applicant) with a corresponding application for test
                            administrators (BTR Client) using React, AWS DynamoDB, Cognito, Amplify, and S3
                        </li>
                        <li>Created and maintained data models and schemas for the two BTR applications</li>
                        <li>Designed, implemented, and iterated on all UI elements</li>
                        <li>
                            Created modern, responsive business website,{' '}
                            <a href="https://www.btrhire.ca" target="_blank" rel="noreferrer">
                                www.btrhire.ca
                            </a>
                        </li>
                    </ul>
                </div>

                <div class={styles['work-experience']}>
                    <h3>Dalhousie University</h3>
                    <p class={styles['job-title']}>Teaching Assistant (Web Design and Architecture)</p>
                    <p class={styles['time-period']}>
                        <i class="fa-solid fa-clock" style={{ marginRight: 8 }} />
                        January - April 2023
                    </p>
                    <ul>
                        <li>Assisted students in completing in class coding assignments</li>
                        <li>Taught basic concepts for HTML, CSS, TEI XML, and XSLT</li>
                        <li>Helped facilitate in class discussion on various web development topics</li>
                    </ul>
                </div>

                <div class={styles['work-experience']}>
                    <h3>University of Guelph</h3>
                    <p class={styles['job-title']}>Teaching Assistant (Discrete Structures in Computing I)</p>
                    <p class={styles['time-period']}>
                        <i class="fa-solid fa-clock" style={{ marginRight: 8 }} />
                        September - December 2021
                    </p>
                    <ul>
                        <li>Created and presented supplementary teaching material</li>
                        <li>Supervised two hour labs, two to three times a week, explaining concepts and answering questions</li>
                        <li>Helped create grading schemes and graded over 100 assignments</li>
                    </ul>
                </div>

                <div class={styles['work-experience']}>
                    <h3>University of Guelph</h3>
                    <p class={styles['job-title']}>Undergraduate Research Assistant</p>
                    <p class={styles['time-period']}>
                        <i class="fa-solid fa-clock" style={{ marginRight: 8 }} />
                        May - August 2021
                    </p>
                    <ul>
                        <li>Expanded upon my previous research in the fields of Combinatorial Generation and Graph Theory</li>
                        <li>Published a research paper in the COCOON 2021 Conference and presented online during the conference</li>
                        <li>Created various spanning tree generation programs in the C programming language to aid research</li>
                    </ul>
                </div>

                <div class={styles['work-experience']}>
                    <h3>Brinkman Reforestation Inc.</h3>
                    <p class={styles['job-title']}>Tree Planter</p>
                    <p class={styles['time-period']}>
                        <i class="fa-solid fa-clock" style={{ marginRight: 8 }} />
                        May - July 2020
                    </p>
                    <ul>
                        <li>Worked four out of every five days in often harsh conditions without missing a day</li>
                        <li>Planted roughly 120,000 trees</li>
                    </ul>
                </div>
            </div>

            <div>
                <h3 style={{ marginBottom: 20 }}>Education</h3>
                <div class={styles['education']}>
                    <h3>University of Guelph</h3>
                    <p class={styles['time-period']}>
                        <i class="fa-solid fa-clock" style={{ marginRight: 8 }} />
                        September - April 2022
                    </p>
                    <div className={styles['skills']} style={{ marginTop: 20 }}>
                        <ul>
                            <li class={styles['gpa']}>89 GPA</li>
                            <li class={styles['degree']}>B.Comp, Honours</li>
                            <li class={styles['major']}>Computer Science</li>
                            <li class={styles['minor']}>Mathematics Minor</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div>
                <h3 style={{ marginBottom: 20 }}>Publications</h3>
                <ul className={styles['publication-list']}>
                    <li style={{ marginBottom: 20 }}>
                        Cameron, B., Grubb, A., & Sawada, J. (2021, October). A pivot gray code listing for the spanning trees of the fan
                        graph.
                        <em> In International Computing and Combinatorics Conference</em> (pp. 49-60). Springer, Cham.
                    </li>
                    <li>
                        Cameron, B., Grubb, A., & Sawada, J. (2022). Pivot Gray Codes for the Spanning Trees of a Graph ft. the Fan.{' '}
                        <em>arXiv preprint arXiv:2202.01746.</em>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default CV;
