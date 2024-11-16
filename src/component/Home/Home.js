import React from 'react';
import './Home.css';
import me from '../../images/me.webp';
import node from "../../images/node.svg";
import express from "../../images/express.svg";
// import mongo from "../../images/mongo.svg";
import html from '../../images/html.svg';
import css from '../../images/css.svg';
import react from '../../images/react.svg';
import js from '../../images/js.svg';
import paint from "../../images/ink-8162726_640.png";


const Home = () => {
    
    return (
        <>
            <div className='home' id='home'>
                <div className="image-container" style={{position: "fixed", top: "-8rem",left: "75%", zIndex: "-10", opacity: "0.7"}}>
                    <img src={paint} style={{ position: "fixed" }}/>
                </div>
                <div className="image-cont" style={{position: "fixed", top: "50%", zIndex: "-10", opacity: "0.7"}}>
                    <img src={paint} style={{ position: "fixed" }}/>
                </div>
                <div className='homedata'>
                    <div className='hometop'>

                        <div className='homeleft'>
                            <h1 className='intro'>MERN Stack Web Developer ✌</h1>
                            <p>Hi👋, I'm Prashant Kumar. A passionate MERN Stack Web Developer ❤️.</p>
                            <div className='social'>
                                <a target='_blank' rel='noreferrer' href='https://github.com/prashantcoder123' title='Github'><i className='bx bxl-github'></i></a>
                                <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/prashant-kumar-16b010261/' title='LinkedIn'><i className='bx bxl-linkedin-square'></i></a>

                            </div>
                        </div>
                        <div className='homeright' id='image'>
                            <div className='drop'>
                                <img src={me} alt='myPhoto'></img>
                            </div>
                        </div>
                    </div>
                    <div className='homebottom'>
                        <h2 className='techstack'>Tech Stack<hr className='specialhr'/> <span>&nbsp;&nbsp;&nbsp;|</span></h2>
                        
                        <div className='stacks'>
                            <div className='topstack'>

                            <div title='HTML5'><img src={html} alt='html'></img></div>
                            <div title='CSS3'><img src={css} alt='css'></img></div>
                            <div title='JavaScript'><img src={js} alt='js'></img></div>
                            </div>
                            <div className='bottomstack'>

                            <div title='React'><img src={react} alt='react'></img></div>
                            <div title='Node JS'><img src={node} alt='node'></img></div>
                            <div title='Express JS'><img src={express} alt='express'></img></div>
                            {/* <div title='Mongo DB'><img src={mongo} alt='mongo db'></img></div> */}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            
        </>
    );
}

export default Home;
