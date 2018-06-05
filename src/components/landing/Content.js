import React, { Component } from 'react';

import Video from '../Video';

import '../../styles/content.css';

import uav from '../../images/uav.jpg';
import groundstation from '../../images/groundstation.jpg';

class Content extends Component {
    render() {
        return (
            <div>
                <div className="content">
                    <div className="content__img">
                        <img
                            src={uav}
                            className="img-fluid lazy"
                            alt="Responsive image"
                        />
                    </div>
                    <div className="content__content">
                        <h2>Running Start Program</h2>
                        <p>
                            Excellence through preparation
                        </p>
                        <p>
                            Prep Classes are designed to give students a better
                            foundation to start the courses they will be taking in
                            the upcoming semesters.
                        </p>
                        <p>
                            Eligible students have the option of taking the respective
                            proficiency exam after completing the boot camp and possibly
                            test out of the course.
                        </p>
                        <a href="https://bergen.edu/faculty-staff/grants-administration/awards/stem/running-start-program/">Running Start Program</a>
                    </div>
                </div>
                <div className="content">
                    <div className="content__img">
                        <img
                            src={groundstation}
                            className="img-fluid lazy"
                            alt="Responsive image"
                        />
                    </div>
                    <div className="content__content">
                        <h2>3SP</h2>
                        <p>
                            The STEM Student Scholars Program
                    </p>
                        <p>
                            Promotes excellence
                            in knowledge, skills and ability of a select group of STEM students
                            to ensure their success in securing research internships and successful
                            transfer to their targeted 4-year institution.
                    </p>
                        <a href="/3sp">Learn More</a>
                    </div>
                </div>


                <div className="content">
                    <Video />
                </div>
            </div>

        );
    }
};

export default Content;