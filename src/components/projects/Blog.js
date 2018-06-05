import React, { Component } from 'react';
import Header from '../Header';



class Blog extends Component {

    constructor(props) {
        super(props);
        this.state = {
            blog: {
                title: 'Lorem ipsum dolor sit.',
                posts: [
                    {
                        title: 'Lorem ipsum dolor sit.',
                        date: new Date().toDateString(),
                        body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore ad quos asperiores sit, iusto rerum minus, id atque odit aspernatur corporis tenetur modi aut vero consectetur sunt autem officiis excepturi?"
                    },
                    {
                        title: 'Lorem ipsum dolor sit.',
                        date: new Date().toDateString(),
                        body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore ad quos asperiores sit, iusto rerum minus, id atque odit aspernatur corporis tenetur modi aut vero consectetur sunt autem officiis excepturi?"
                    },
                    {
                        title: 'Lorem ipsum dolor sit.',
                        date: new Date().toDateString(),
                        body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore ad quos asperiores sit, iusto rerum minus, id atque odit aspernatur corporis tenetur modi aut vero consectetur sunt autem officiis excepturi?"
                    }
                ]
            }            
        }
    }

    componentWillMount() {
        // document.body.style.backgroundColor= "blue"
        document.querySelectorAll('.box').style.backgroundColor= "blue"
        // document.body.style.backgroundColor= "blue"
    }

   
    render() {
        return (
            <div>
                <Header title={this.state.blog.title} />
                <div className="container">                    
                        {console.log(this.state.blog.posts)}
                        {this.state.blog.posts.map(post => { 
                            return (  
                                <div className="box box--block">            
                                    <div className="box__content">
                                        <div className="box__content-title">
                                            <h2> {post.title}</h2>                               
                                            <h3> {post.date} </h3>
                                        </div>
                                        <hr className="hr"/>
                                        <div className="box__content-text">                                
                                            <p>{post.body}</p>
                                            <p>{post.body}</p>
                                            <img src="https://images.unsplash.com/photo-1518152006812-edab29b069ac?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ea57442bf3e8f56890337f5accda026b&auto=format&fit=crop&w=400&q=60" alt="" />
                                            <p>{post.body}</p>                                        
                                        </div>
                                    </div>
                                </div>
                            )                            
                        })}                
                    </div>                                    
            </div>      
        );
    }
}

export default Blog;