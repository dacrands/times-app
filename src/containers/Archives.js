import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchArchives } from '../actions/index';
import { bindActionCreators } from 'redux';

import Input from '../components/Inputs';

import Close from '../assets/images/close.svg';
import Search from '../assets/images/search.svg';

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
            if (window.scrollY > this.refs.articles.offsetTop) {
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
                            alt={`${post.headline.main} image`}
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
                        <Input 
                            yearStart={this.state.yearStart} 
                            yearEnd={this.state.yearEnd}
                            setYearStart={this.setYearStart}
                            setYearEnd={this.setYearEnd}
                            showYearEnd={this.state.showYearEnd}
                        />                      
                    </div>  
                </div>
            );
            
        }

        if (this.props.isLoading) {            
            return (
                <div className="container">
                    <div className="loading">
                        <h2>Grabbing random articles...</h2>
                        <div className="spinner">
                            <div className="disc">
                                <div className="disc__item"></div>
                            </div>                        
                        </div>
                    </div>                    
                </div>
            );
        }

        return(
            <div className="container--archives">            
            <div className="container">                     
                
                    
                <div>
                    {         
                        this.props.archives[0]
                        ? 
                            <header>
                                <h1>
                                    {`Current Year Range: ${this.state.yearStart} - ${this.state.yearEnd}`}
                                </h1>
                                {/* <hr/>               */}
                                <div className="title">
                                    <div className="title__item">
                                        <h3>Search for random articles between the year {this.state.yearStart} and {this.state.yearEnd}</h3>
                                    </div>                                                      
                                    <div className="title__item">
                                        <Input 
                                            yearStart={this.state.yearStart} 
                                            yearEnd={this.state.yearEnd}
                                            setYearStart={this.setYearStart}
                                            setYearEnd={this.setYearEnd}
                                            showYearEnd={this.state.showYearEnd}
                                        />                
                                    </div>                                                    
                                </div>                                
                                <h2>
                                {`Articles from ${new Date(this.props.archives[0][0].pub_date).getMonth() + 1 } / ${new Date(this.props.archives[0][0].pub_date).getFullYear()}`}                                
                                </h2>
                                
                            </header>
                        : 'loading...'
                    }                                                  
                </div>
                

                {/* <Search yearStart={this.state.yearStart} yearEnd={this.state.yearEnd} showSearch={this.state.showSearch} /> */}
                <div ref={"search"} className={this.state.showSearch ? "search" : "search search--hide"}>                                        
                    <div className="search__container">

                    <Input 
                        yearStart={this.state.yearStart} 
                        yearEnd={this.state.yearEnd}
                        setYearStart={this.setYearStart}
                        setYearEnd={this.setYearEnd}
                        showYearEnd={this.state.showYearEnd}
                    />                       
                        <button 
                            className="button search__tab" 
                            onClick={() => {this.setState({ showSearch: !this.state.showSearch })}}
                        >                                
                            <p>
                                {
                                    this.state.showSearch 
                                    ? <Close /> 
                                    : <Search />
                                }
                            </p>
                        </button>   
                    </div>  
                </div>                                         
              
                <section ref={'articles'} className={"articles"}>                    
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

const mapStateToProps = (state) => {
    return { 
        archives: state.archives,  
        isError: state.error,
        isLoading: state.loading,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Archives);