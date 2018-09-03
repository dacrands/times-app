import React, { Component } from 'react';

import CheckBox from '../assets/images/check-box.svg'; 
import Book from '../assets/images/book.svg'; 
import Time from '../assets/images/time.svg'; 

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
          {/* <section>
            <h1>Cool things you can do...</h1>
          </section> */}
          <section>
            <div>
              <Book />
              <h1>
                Browse the New York Times Best-Sellers, click a book to buy it on Amazon
              </h1>
            </div>
            <div>
              <Time />
              <h1>Read articles dating back to the year 1900</h1>
            </div>
            <div>
              <CheckBox />
              <h1>Check out the news that's causing a buzz</h1>
            </div>                                    
          </section>          
        </main>        
      </div>
    )
  }
}