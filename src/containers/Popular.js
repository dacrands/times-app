import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPopular } from '../actions/index';
import { bindActionCreators } from 'redux';

class Popular extends Component {

    componentDidMount() {
        this.props.fetchPopular();
        setTimeout(() => {
            console.log(this.props.popular[0]);
        }, 3500);        
    }

    renderPopular(post) {
        return (
            <article className={"archive"}>
            <a href={post.url}>
                <h3>
                    {post.title}
                </h3>
            </a>
                <p className="lead">{post.published_date}</p>
                <img className="fluid thumbnail" src={post.media["0"]["media-metadata"]["1"].url} alt=""/>
                <p>                           
                {post.abstract}
                </p>           
            </article>            
        );
    }

    render() {
        return (
            <div>
                <section className={"archives"}>                    
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
    return bindActionCreators({ fetchPopular }, dispatch);    
}

function mapStateToProps({ popular }) {
    return { popular };
}

export default connect(mapStateToProps, mapDispatchToProps)(Popular);