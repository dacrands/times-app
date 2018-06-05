import React, { Component } from 'react';

import Header from './Header';

import '../styles/box.css';

import solar from '../images/solar.jpg';
import algae from '../images/algae.jpg';
import cchem from '../images/cchem.jpg';

class Benefits extends Component {
    render() {
        return (
            <div>
                <Header title="STEM at BCC" />
                <div className="container">
                    <div className="title">
                        <h1>What is STEM?</h1>
                        <hr className="hr" />
                    </div>
                    <div className="box box--block">
                        <div className="box__content-text">
                            <h3>
                                STEM stands for science, technology, engineering,
                                and math.
                            </h3>
                            <h3>
                                Read more about STEM:
                            </h3>    
                                
                                <ul>
                                    <li><a href="https://www.ed.gov/stem">Science, Technology, Engineering and Math: Education for Global Leadership</a></li>
                                    <li><a href=""></a></li>
                                    <li><a href=""></a></li>
                                </ul>
                            
                        </div>
                    {/* BOX */}
                    </div>

                    <div className="title">
                        <h1>Why study STEM at Bergen?</h1>
                        <hr className="hr" />
                    </div>                    
                    <div className="box">
                        <div className="box__content-text">
                            <div className="box__content-title">
                                <h1>Hands on Experience</h1>
                            </div>                       
                            <p>Work as a team with other students and faculty.</p>                           
                            <img className="img-fluid thumbnail" src={solar} alt="solar" />
                        </div>
                        <div className="box__content-text">
                            <div className="box__content-title">
                                <h1>Resources</h1>
                            </div>
                            <p>Access to academic support from STEM mentors, professors, and students.</p>                         
                            <img className="img-fluid thumbnail" src={cchem} alt="computational chemistry" />
                        </div>
                    {/* BOX */}
                    </div>

                    <div className="box">
                        <div className="box__content-text">
                            <div className="box__content-title">
                                <h1>Events</h1>
                            </div>
                            <p>Please <a href="mailto:stemsummit@bergen.edu">email us</a> for a complete list of events.</p>
                            <img className="img-fluid thumbnail" src={algae} alt="algae" />
                        </div>
                        <div>
                            <div className="box__content-text">
                                <div className="box__content-title">
                                    <h1>Helpful Links</h1>
                                </div>
                                <p>
                                    Learn more about the projects, grants, and faculty that
                                    comprise the STEM program at BCC.
                                </p>
                                <ul>
                                    <li><a href="https://bergen.edu/faculty-staff/grants-administration/awards/stem/running-start-program/">Running Start Program</a></li>
                                    <li><a href="https://bergen.edu/faculty-staff/grants-administration/awards/stem/stem-summit/">STEM Research Summit</a></li>
                                    <li><a href="https://bergen.edu/faculty-staff/grants-administration/awards/stem/stem-summit/about-the-conference/">About the STEM C<sup>2</sup> Conference</a></li>
                                    <li><a href="https://bergen.edu/faculty-staff/grants-administration/awards/stem/the-stem-gps-team/">STEMatics Team</a></li>
                                    <li><a href="https://bergen.edu/faculty-staff/grants-administration/awards/stem/">Read the STEMatics Grant</a></li>
                                </ul>
                            </div>
                        </div>
                    {/* BOX */}
                    </div>

                {/* CONTAINER */}
                </div>
            {/* MAIN */}
            </div>
        );
    }
}

export default Benefits;