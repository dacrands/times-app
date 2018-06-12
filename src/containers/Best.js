import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBest } from '../actions/index';
import { bindActionCreators } from 'redux';

class Best extends Component {
    
    componentDidMount() {
        this.props.fetchBest();
        console.log(this.props.best);         
    }

    renderBest(book) {
        return (
        
            <div className={"book"}>
                <a href={book.amazon_product_url}>
                    <img className="book__image" src={book.book_image} alt=""/>
                    
                        
                    
                    <div className="book__text">
                        <p className={"lead"} key={book.rank}>
                            {book.rank}. {book.title}
                        </p>
                        <p>
                            {book.description}
                        </p> 
                    </div>
                    
                </a>                       
            </div>  
             
        );
    }

    render() {
        return(            
            <div className={"container books"}>
                {
                    // console.log(this.props.best[0])
                    this.props.best[0]
                    ? this.props.best[0].map(this.renderBest) 
                    : null
                }
            </div>
        );
    }
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchBest }, dispatch);
}

function mapStateToProps({ best }) {
    return { best };
}

export default connect(mapStateToProps, mapDispatchToProps)(Best);