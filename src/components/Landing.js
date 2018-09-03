import React, { Component } from 'react';

import CheckBox from '../assets/images/check-box.svg'; 

export default class Landing extends Component {

  componentDidMount() {
    const landing =  document.querySelector('.landing');
    landing.style.minHeight = `calc(100vh - ${landing.offsetTop}px)`;
    window.addEventListener('resize', () => {
      landing.style.minHeight = `calc(100vh - ${landing.offsetTop}px)`;
    })
  }


  render() {
    return (
      <div>
        <main className="landing">
          <div className="landing--bg"></div>
          <section>
            <h1>Cool things you can do...</h1>
          </section>
          <section>
            <div>
              <CheckBox/>
              <h3>
                Browse the New York Times Best-Sellers, click a book to buy it on Amazon
              </h3>
            </div>
            <div>
              <CheckBox/>
              <h3>Read articles dating back to the year 1900</h3>
            </div>
            <div>
              <CheckBox/>
              <h3>Check out the news that's causing a buzz</h3>
            </div>                                    
          </section>          
        </main>        
      </div>
    )
  }
}