import React from 'react';
import './Resume.css';
// import '../../ScrollBar.css';
import Education from './Education';

const Resume = () => {
    return (
        <>
            <div className='resume' id='resume'>
                <div className='resumedata'>
                    <h1 className='resumeheading'>Resume📜<hr/></h1>
                    <div className='resumecontent'>

                        {/* <Education id={1}/>
                        <Education id={2}/> */}
                        <Education/>

                    </div>

                </div>
            </div>
            
        </>
    );
}

export default Resume;
