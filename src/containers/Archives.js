import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchArchives } from '../actions/index';
import { bindActionCreators } from 'redux';

class Archives extends Component {

    constructor(props) {
        super(props);
        this.state = {
            yearStart: 1900,
            yearEnd: 2018,
            month: null,
            showYearEnd: false,
            showSearch: false
        }
 
        this.setYearStart = this.setYearStart.bind(this);
        this.setYearEnd = this.setYearEnd.bind(this);               
    }

    
    componentDidMount() {
        this.props.fetchArchives(this.state.yearStart, this.state.yearEnd);                         
        
        // Show the side search menu only when main search is out of view
        window.addEventListener('scroll', () => {
            if (window.scrollY > this.refs.title.clientHeight) {
                this.refs.search.style.display = "block"
            } else {
                this.refs.search.style.display = "none"
            }
        })
    }

    setYearStart(event){
        if (event.target.value.length === 4) {
            this.setState({
                yearStart: parseInt(event.target.value), 
                showYearEnd: true
            });        
        }        
    }

    setYearEnd(event){
        if (event.target.value.length === 4) {
            this.setState({yearEnd: parseInt(event.target.value)});
        }        
    }

    renderArchives(post, index) {
        return (
            <article
                key={index} 
                className={"archive"}
            >
                <div className="archive__title">
                    <h3>
                        {post.headline.main}
                    </h3>
                    <p className="lead">{new Date(post.pub_date).toDateString()}</p>
                </div>                
                <div className="archive__content">
                    <p>
                        <img
                            className="img"
                            src={post.multimedia[0] ? `https://nyt.com/${post.multimedia[0].url}` : ""}
                            alt=""
                        />                
                        {post.lead_paragraph}
                    </p>           
                </div>                
            </article>            
        );
    }

    render() {
        if (this.props.isError) {
            return (
                <div>
                    <p>Sorry! There was an error loading the items</p>
                    <div className="search__container">
                        <div className="inputs">
                            <p>Enter a year between 1900 and 2018!</p>
                            <label htmlFor="">
                                Start Year
                                <input 
                                    onChange={this.setYearStart}                                
                                    type="number" 
                                    name="quantity" 
                                    min="1900" 
                                    max="2010" 
                                    step="1"
                                />
                            </label>
                            {
                                this.state.showYearEnd ?                                    
                                <label htmlFor="">
                                End Year
                                    <input                                 
                                        onChange={this.setYearEnd}                                
                                        type="number" 
                                        name="quantity" 
                                        min={this.state.yearStart} 
                                        max="2018" 
                                        step="1"
                                    />    
                                </label>
                                : null
                            }                                                                                                                                                            
                        </div>                                                                      
                        <button className="button" onClick={() => {this.props.fetchArchives(this.state.yearStart, this.state.yearEnd)}}>
                                Search archives
                        </button>

                        <button 
                            className="search__tab" 
                            onClick={() => {this.setState({ showSearch: !this.state.showSearch })}}
                        >                                
                            <span>
                                {this.state.showSearch ? '\u2093': '\u203A'}                                                                    
                            </span>
                        </button>   
                    </div>  
                </div>
            );
            
        }

        if (this.props.isLoading) {            
            return (
                <div className="container">
                    <div className="loading">
                        <h1>Grabbing random articles...</h1>
                    </div>                    
                </div>
            );
        }

        return(
            <div className="container--archives">            
            <div className="container">                     
                <div className="title">
                    <h3>Search for random articles between the year {this.state.yearStart} and {this.state.yearEnd}</h3>
                    <div className="inputs">
                            <p>Enter a year between 1900 and 2018!</p>
                            <label htmlFor="">
                                Start Year
                                <input 
                                    onChange={this.setYearStart}                                
                                    type="number" 
                                    name="quantity" 
                                    min="1900" 
                                    max="2010" 
                                    step="1"
                                />
                            </label>
                            {
                                this.state.showYearEnd ?                                    
                                <label htmlFor="">
                                End Year
                                    <input                                 
                                        onChange={this.setYearEnd}                                
                                        type="number" 
                                        name="quantity" 
                                        min={this.state.yearStart} 
                                        max="2018" 
                                        step="1"
                                    />    
                                </label>
                                : null
                            }                                                                                                                                                            
                        </div>   
                    <button 
                        className="button" 
                        onClick={() => {this.props.fetchArchives(this.state.yearStart, this.state.yearEnd)}}
                    >
                        Search archives
                    </button>
                </div>
                    
                <h1 ref={'title'}>
                    {         
                        this.props.archives[0]
                        ? `Articles from ${new Date(this.props.archives[0][0].pub_date).getMonth() + 1 } / ${new Date(this.props.archives[0][0].pub_date).getFullYear()}`
                        : 'loading...'
                    }                                                  
                </h1>

                <div ref={"search"} className={this.state.showSearch ? "search" : "search search--hide"}>                                        
                    <div className="search__container">
                        <div className="inputs">
                            <p>Enter a year between 1900 and 2018!</p>
                            <label htmlFor="">
                                Start Year
                                <input 
                                    onChange={this.setYearStart}                                
                                    type="number" 
                                    name="quantity" 
                                    min="1900" 
                                    max="2010" 
                                    step="1"
                                />
                            </label>
                            {
                                this.state.showYearEnd ?                                    
                                <label htmlFor="">
                                End Year
                                    <input                                 
                                        onChange={this.setYearEnd}                                
                                        type="number" 
                                        name="quantity" 
                                        min={this.state.yearStart} 
                                        max="2018" 
                                        step="1"
                                    />    
                                </label>
                                : null
                            }                                                                                                                                                            
                        </div>                                                                      
                        <button className="button" onClick={() => {this.props.fetchArchives(this.state.yearStart, this.state.yearEnd)}}>
                                Search archives
                        </button>

                        <button 
                            className="search__tab" 
                            onClick={() => {this.setState({ showSearch: !this.state.showSearch })}}
                        >                                
                            <span>
                                {this.state.showSearch ? '\u2093': '\u203A'}                                                                    
                            </span>
                        </button>   
                    </div>  
                </div>                                         
              
                <section className={"articles"}>                    
                    {         
                        this.props.archives[0]
                        ? this.props.archives[0].slice(1, 100).map(this.renderArchives)
                        // ? const newList = this.shuffle(this.props.archives[0].slice(1, 100)).map(this.renderArchives)
                        : 'loading...' 
                    }
                </section>
            </div>
            </div>
        );
    }
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchArchives }, dispatch);
}

// function mapStateToProps({ archives }) {
//     return { archives  };
// }
const mapStateToProps = (state) => {
    return { 
        archives: state.archives,  
        isError: state.error,
        isLoading: state.loading,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Archives);