import React, { useEffect, useState } from 'react';
import './Resume.css';
import DownloadButton from '../DownloadButton';
import resume from '../../images/resume.pdf';
// import '../../ScrollBar.css';


const Education = ({ id }) => {

    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(true);

    const toggleSlider1 = () => {
        setIsOpen1(true);
        setIsOpen2(false);
    };
    const toggleSlider2 = () => {
        setIsOpen2(true);
        setIsOpen1(false);
    };
    return (
        <>
            <div className='education'>
                <div className='selectbox'>
                    
                <div className={`selectexp ${isOpen2 ? 'eduopen' : 'educlosed'}`} onClick={toggleSlider2}>
                        <h3>Skills</h3>
                    </div>
                    <div className={`selectedu ${isOpen1 ? 'eduopen' : 'educlosed'}`} onClick={toggleSlider1}>
                        <h3>Education</h3>
                    </div>

                    
                </div>
                <div className='anim'>


                    <div className={`educ ${isOpen1 ? 'open' : 'closed'}`}>
                        <div className='educdata media'>
                            <h1 className='educheading'>Education✍️<hr /></h1>
                            <div className='educcontent'>
                                <div className='schooling'>

                                    <h1>Schooling</h1>
                                    <div className='year'><h3>2012 - 2022</h3></div>
                                    <h3 className='school'>Kid-z Public School, Muzaffarpur,Bihar</h3>
                                    <p>I have completed my schooling from Kid-z Public School,Muzaffarpur, Bihar with an
                                        Good passing grade of 70% in 10th standard and 77.6% in 12th standard.</p>
                                </div>
                                <div className='college'>
                                    <h1>Bachelor of Technology (B.Tech)</h1>
                                    <div className='year'><h3>2022 - 2026</h3></div>
                                    <h3 className='school'>Government Engineering College Aurangabad, Bihar</h3>
                                    <p>I am currently pursuing my B.tech degree from Bihar Engineering University, Patna. I continued to strive for knowledge
                                        here and gained a lot of it within my 4 semesters of studying here. My current CGPA is 8.34.</p>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className={`educ ${isOpen2 ? 'open' : 'closed'}`}>
                        <div className='educdata'>
                            <h1 className='educheading'>Resume📃<hr /></h1>



                            <div className='educcontent'>
                                <div className='schooling'>

                                    <h1>Summary</h1>
                                    {/* <div className='year'><h3>2012 - 2022</h3></div> */}
                                    <h3 className='name'>Prashant Kumar</h3>
                                    {/* <h3 className='school'>Kid-z Public School Muzaffarpur, Bihar</h3> */}
                                    <p>Deliver high-quality designs based on client specifications. Manage projects smoothly to accomplish customer
                                        objectives. Skilled at designing sites and writing clean codes. Implement successful content based on user needs.</p>
                                    <ul>
                                        {/* <li>Aurangabad Bihar</li> */}
                                        <li>prashantkum7676@gmail.com</li>
                                    </ul>
                                    <DownloadButton
                                        pdfUrl="https://drive.google.com/file/d/1-RBt6WojXZZzI_6BuXmDifluAt1eCRCR/view?usp=drive_link"
                                        fileName="resume.pdf"
                                    />
                                </div>
                                <div className='college'>
                                    <h1>Skills</h1>
                                    <div className='skill'>
                                        <div className='data'>
                                            <h4>React</h4>
                                            <h4>80%</h4>
                                        </div>
                                        <div className='bar'>
                                            <div className='progressbar react'></div>
                                        </div>
                                    </div>
                                    <div className='skill'>
                                        <div className='data'>
                                            <h4>Node JS</h4>
                                            <h4>85%</h4>
                                        </div>
                                        <div className='bar'>
                                            <div className='progressbar node'></div>
                                        </div>
                                    </div>
                                    <div className='skill'>
                                        <div className='data'>
                                            <h4>JavaScript</h4>
                                            <h4>80%</h4>
                                        </div>
                                        <div className='bar'>
                                            <div className='progressbar js'></div>
                                        </div>
                                    </div>
                                    <div className='skill'>
                                        <div className='data'>
                                            <h4>Mongo DB</h4>
                                            <h4>75%</h4>
                                        </div>
                                        <div className='bar'>
                                            <div className='progressbar mongo'></div>
                                        </div>
                                    </div>
                                    <div className='skill'>
                                        <div className='data'>
                                            <h4>Express JS</h4>
                                            <h4>90%</h4>
                                        </div>
                                        <div className='bar'>
                                            <div className='progressbar express'></div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Education;
