import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPopular, fetchAuth } from '../actions/index';
import { bindActionCreators } from 'redux';

class Popular extends Component {

    componentDidMount() {
        this.props.fetchPopular();    
        console.log(this.props.auth);
    }

    renderPopular(post) {
        return (
            <div key={post.title.replace(/\s/g, '')}>            
                <article className={"popular"} >                
                    <div className="popular__items">                        
                        <div className="popular__image" style={{backgroundImage: `url(${post.media["0"]["media-metadata"]["2"].url})`}}>
                            {/* <img className="fluid thumbnail" src={post.media["0"]["media-metadata"]["1"].url} alt=""/> */}
                        </div>                                           
                        <div className="popular__text">                                
                            <h3>{post.title}</h3>                            
                            <p className="lead">{post.published_date}</p>                            
                            <p>{post.abstract}</p>                  
                            <a href={post.url}>                                 
                                view article <span>&rarr;</span>
                            </a> 
                        </div>                
                    </div>                
                </article>            
            </div>
        );
    }

    render() {
        return (
            <div className="container">'
                <header>
                    <h2>Most Popular Articles for {new Date().toDateString()}</h2>
                </header>                
                <section className={"articles"}>                    
                    {         
                        this.props.popular[0]
                        ? this.props.popular[0].map(this.renderPopular)
                        : null 
                    }
                </section>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchPopular, fetchAuth }, dispatch);    
}

function mapStateToProps({ popular, auth }) {
    return { popular, auth };
}

export default connect(mapStateToProps, mapDispatchToProps)(Popular);