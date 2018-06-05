import React, { Component } from 'react';
import Header from './Header';
import '../styles/form.css';

class Contact extends Component {
    render() {
        return (
            <div>
                <Header title="Contact" />                
                <div className="form__container">
                    <form action="" className="form">
                        <div className="form__item">
                            <label htmlFor="email" className="form__item-label">Email</label>
                            <input type="text" className="form__item-label" />
                        </div>
                        <div className="form__item">
                            <label htmlFor="major" className="form__item-label">Major</label>
                            <input name="major" type="text" className="form__item-label"/>
                        </div>
                        <div className="form__item">
                            <label htmlFor="title" className="form__item-label">Project Title</label>
                            <input name="title" type="text" className="form__item-label"/>
                        </div>
                        <div className="form__item">
                            <label htmlFor="desc" className="form__item-label">Description</label>
                            <textarea 
                                name="desc" 
                                type="text" 
                                className="form__item-label" 
                                rows={15}>
                            </textarea>
                        </div>                        
                        <button className="form__button">
                            Submit
                        </button>                        
                    </form>  
                </div>
            </div>            
        );
    }
}

export default Contact;
