import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchArchives } from '../actions/index';
import { bindActionCreators } from 'redux';

class Archives extends Component {

    constructor(props) {
        super(props);
        this.state = {
            year: null,
            month: null
        }
    }
    
    componentDidMount() {
        this.props.fetchArchives();                         
    }

    renderArchives(post) {
        return (
            <article className={"archive"}>
                <h3>
                    {post.headline.main}
                </h3>
                <p className="lead">{new Date(post.pub_date).toDateString()}</p>
                <p>
                <img 
                    src={post.multimedia[0] ? `https://nyt.com/${post.multimedia[0].url}` : ""}
                    alt=""
                />                
                {post.lead_paragraph}
                </p>           
            </article>            
        );
    }

    render() {
        return(
            <div className="container">                
                <div className="title">
                    <h1>
                        {         
                            this.props.archives[0]
                            ? `Articles from ${new Date(this.props.archives[0][0].pub_date).getMonth() + 1 } ${new Date(this.props.archives[0][0].pub_date).getFullYear()}`
                            : 'loading...'
                        }                                                  
                    </h1>

                    <button className="button" onClick={this.props.fetchArchives}>
                        GetRandomYear
                    </button>
                </div>                
                <section className={"archives"}>                    
                    {         
                        this.props.archives[0]
                        ? this.props.archives[0].slice(1, 50).map(this.renderArchives)
                        : 'loading...' 
                    }
                </section>
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