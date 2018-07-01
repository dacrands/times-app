import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchArchives } from '../actions/index';
import { bindActionCreators } from 'redux';

class Archives extends Component {

    constructor(props) {
        super(props);
        this.state = {
            yearStart: 1811,
            yearEnd: 2018,
            month: null,
            showYearEnd: false,
            showSearch: false
        }
 
        this.setYearStart = this.setYearStart.bind(this);
        this.setYearEnd = this.setYearEnd.bind(this);        
    }
    
    componentDidMount() {
        this.props.fetchArchives(1811, 2018);                         
    }

    setYearStart(event){
        console.log(typeof event.target.value);
        if (event.target.value.length === 4) {
            this.setState({yearStart: parseInt(event.target.value), showYearEnd: true});        
        }        
    }

    setYearEnd(event){
        console.log(event.target.value);
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
        return(
            <div className="container--archives">
            
            <div className="container">                
                <div className="title">
                    <h1>
                        {         
                            this.props.archives[0]
                            ? `Articles from ${new Date(this.props.archives[0][0].pub_date).getMonth() + 1 } / ${new Date(this.props.archives[0][0].pub_date).getFullYear()}`
                            : 'loading...'
                        }                                                  
                    </h1>
                    <h3>Showing randoms articles between the year {this.state.yearStart} and {this.state.yearEnd}</h3>
                    <div className={this.state.showSearch ? "search" : "search search--hide"}>                                        
                        <div className="search__container">
                            <div className="inputs">
                                <p>Enter a year between 1811 and 2018!</p>
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
                                    {
                                        this.state.showSearch
                                        ? '\u2093'
                                        : '\u203A'
                                        // : '\uD83D\uDD0E'
                                    }                                
                                </span>
                            </button>   
                        </div>  
                    </div>                                         
                </div>                
                <section className={"archives"}>                    
                    {         
                        this.props.archives[0]
                        ? this.props.archives[0].slice(1, 100).map(this.renderArchives)
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

function mapStateToProps({ archives }) {
    return { archives };
}

export default connect(mapStateToProps, mapDispatchToProps)(Archives);