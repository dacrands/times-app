import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAuth } from '../actions/index';
import { bindActionCreators } from 'redux';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      auth: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    console.log('changed')
    const value = e.target.value;
    const name = e.target.name;
    this.setState({
      [name]: value 
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    const formData = JSON.stringify({
      username: this.state.username,
      password: this.state.password
    });
    
    this.props.fetchAuth(formData);
    this.props.history.push('/')

  }

  render() {
    return (
      <div className="container">
        <h1>Login</h1>
        <form className="form" onSubmit={this.handleSubmit}>
          <label htmlFor="username">
          Username
          <input name="username" type="text" onChange={this.handleChange} value={this.state.username}/></label>
          <br/>
          <label htmlFor="password">
          Password          
          <input name="password" type="password" onChange={this.handleChange} value={this.state.password}/></label>
          <br/>
          <label htmlFor="Remember me">
          Remember Me          
          <input name="remember_me" type="text"/></label>
          <br/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchAuth }, dispatch);
}


export default connect(null, mapDispatchToProps)(Login);