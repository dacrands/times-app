import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { bindActionCreators } from 'redux';

class Hello extends Component {
    
    componentDidMount() {
        this.props.fetchPosts();            
    }

    renderPosts(post) {
        return (
            <div>
                <h3 key={post.title}>
                    {post.title}
                </h3>
                <p>
                    {post.description}
                </p>           
            </div>            
        );
    }

    render() {
        return(
            <div>
                <h1>Welcome to the app!</h1>
                <p>Built by D Crandall</p>
                <div>{this.props.posts[0] ? this.props.posts[0].map(this.renderPosts) : console.log('this')}</div>
            </div>
        );
    }
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchPosts }, dispatch);
}

function mapStateToProps({ posts }) {
    return { posts };
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);