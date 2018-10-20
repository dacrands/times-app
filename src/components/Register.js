import React, { Component } from 'react';
import { REQUEST_URL } from '../actions/index';

class Register extends Component {

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

    console.log(formData)
    fetch(REQUEST_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: formData
    }).then(res => {      
      return res.json();
    }).then(myJson => {
      console.log(myJson)
    }).catch(e => {
      console.log('it went wrong \r', e)
    })


  }

  render() {
    return (
      <div className="container">
        <h1>Register</h1>
        <form className="form" onSubmit={this.handleSubmit}>
          <label htmlFor="username">
            Username
          <input name="username" type="text" onChange={this.handleChange} value={this.state.username} /></label>
          <br />
          <label htmlFor="password">
            Password
          <input name="password" type="password" onChange={this.handleChange} value={this.state.password} /></label>
          <br />
          <label htmlFor="Remember me">
            Remember Me
          <input name="remember_me" type="text" /></label>
          <br />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default Register;