import React, { Component } from 'react';
import Header from './Header';
import '../styles/box.css';

class About extends Component {
    render() {
        return (
            <div>
                <Header title="STEM Student Scholars" />
                <div className="container">
                    <div className="title">
                        <h1>About</h1>
                        <hr className="hr"/>
                    </div>                
                    <div className="box">
                        
                    {/* ============
                        ABOUT
                    ============ */}
                        <div className="box__content">
                            <div className="box__content-title">
                                <h1>Benefits</h1>
                            </div>
                            <div className="box__content-text">            
                                <p>
                                    Students who successfully participate in the 
                                    program shall have an opportunity in their 
                                    second summer in the program to participate in 
                                    an internship off campus in their target 4-year college or industry 
                                </p>
                            </div>                                          
                        </div> {/* box__content */}
                        
                        <div className="box__content">
                            <div className="box__content-title">
                                <h1>Purpose</h1>
                            </div>
                            <div className="box__content-text">
                                <p>
                                The STEM Student Scholars Program shall promote excellence in knowledge, skills
                                    and ability of a select group of STEM students to ensure 
                                their success in securing research internships and successful transfer to their targeted 
                                4-year institution.
                                </p>
                            </div>                                         
                        </div>  {/* box__content */}
                                
                        <div className="box__content">
                            <div className="box__content-title">
                                <h1>KSA Learning</h1>
                            </div>
                            <div className="box__content-text">
                                <h3>Knowledge</h3>
                                <p>Understandning principles
                                    related to a particular subject
                                </p>
                            </div>
                            <div className="box__content-text">
                                <h3>Skills</h3>
                                <p>How to use something or
                                    perform a particular task
                                </p>
                            </div>
                            <div className="box__content-text">
                                <h3>Ability</h3>
                                <p>Understandning principles
                                    related to a particular subject
                                </p>
                            </div>
                        </div>

                        <div className="box__content">
                            <div className="box__content-title">
                                <h1>Program Elements</h1>
                            </div>
                            <div className="box__content-text">                            
                                <h3>Academic</h3>
                                <h3>Research</h3>
                                <h3>Service</h3>                            
                            </div>                                          
                        </div> {/* box__content */}
                    </div> {/* box  */} 
                    
                    {/* ============
                    REQUIREMENTS
                    ============ */}

                    <div className="title">
                        <h1>Requirements</h1>
                        <hr className="hr"/>
                    </div>  
                    <div className="box box--block">
                        <div className="box__content">
                            <div className="box__content-title">
                                <h1>Eligibility Requirements</h1>
                            </div>
                            <div className="box__content-text">                            
                                <ol>
                                    <li>STEM degree seeking</li>
                                    <li>Finished 12 college level credits 
                                        with no additional remediation required
                                    </li>
                                    <li>Minimum 3.750 Cumulative GPA</li>
                                </ol>                           
                            </div>                                          
                        </div> {/* box__content */}

                        <div className="box__content">
                            <div className="box__content-title">
                                <h1>Admission Requirements</h1>
                            </div>
                            <div className="box__content-text">                            
                                <ol>
                                    <li>Attended one information session</li>
                                    <li>Maintained minimum 3.750 Cumulative GPA at end of Spring 2017 semester</li>
                                    <li>Completed and submitted a 3SP application</li>
                                    <li>Joined a 3SP Faculty Research Mentor’s project team for Summer I or Summer II internship</li>
                                    <li>Will remain a Bergen student through the fall 2017 semester</li>
                                </ol>                           
                            </div>                                          
                        </div> {/* box__content */}

                        <div className="box__content">
                            <div className="box__content-title">
                                <h1>Ongoing Requirements to remain in good standing</h1>
                            </div>
                            <div className="box__content-text">                            
                                <ol>
                                    <li>Successfully completed an on campus 3SP Summer I or Summer II internship</li>
                                    <li>Working to complete 3SP Academic, Research and Service Requirements</li>
                                    <li>Contributing member of the STEM Student Union club</li>
                                    <li>Maintaining minimum 3.750 Cumulative GPA</li>
                                    <li>Punctual and responsive to official 3SP communications</li>
                                </ol>                           
                            </div>                                          
                        </div> {/* box__content */}
                        
                    </div> {/* box  */}   

                    {/* ============
                        ELEMENTS
                    ============ */}
                    <div className="title">
                        <h1>3SP Program Elements</h1>
                        <hr className="hr"/>
                    </div>
                    <div className="box">
                        <div className="box__content">
                            <div className="box__content-title">
                                <h1>Research elements</h1>
                            </div>
                            <div className="box__content-text"> 
                                <h3>Students of the Program must participate in:</h3>                           
                                <ol>
                                    <li>On-campus faculty-mentored internship project in their first summer of the program.</li>
                                    <li>Off-campus internship project in their second summer of the program.</li>
                                    <li>The student shall contribute a minimum of 2 hours per week working on a project during the fall and spring semesters.</li>
                                    <li>The student shall become a contributing member of the STEM Student Union club.</li>
                                </ol>                           
                            </div>                                          
                        </div> {/* box__content */}
                        <div className="box__content">
                            <div className="box__content-title">
                                <h1>Additional Research elements</h1>
                                <h3>*Determined by 3SP Faculty Research Mentors</h3>
                            </div>
                            <div className="box__content-text">                          
                                <ol>
                                    <li>co-author with team members a weekly blog documenting project progress throughout Summer I or Summer II internships</li>
                                    <li>co-author a professional quality poster of project for STEM C2 Research Summit at Bergen Community College</li>
                                    <li>Give presentations at various events and meetings both on-campus and off-campus</li>
                                </ol>                           
                            </div>                                          
                        </div> {/* box__content */}
                    </div> {/* box  */} 
                </div> {/* container */} 
                           
            {/* main */}
            </div> 
                        
                        
                        
            
        );
    }
}

export default About;