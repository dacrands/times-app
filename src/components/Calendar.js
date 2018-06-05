import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

import Header from './Header';

import "react-big-calendar/lib/css/react-big-calendar.css";

BigCalendar.momentLocalizer(moment);

class MyCalendar extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            events: [
                {
                  start: new Date(),
                  end: new Date(moment().add(3, "days")),
                  title: "STEM Summit"
                },
                {
                  start: new Date(2018, 5, 18, 0, 0, 0),
                  end: new Date(2018, 5, 22, 0, 0, 0),
                  title: "Running Start"
                },
                {
                  start: new Date(2018, 5, 1, 0, 0, 0),
                  end: new Date(2018, 5, 0, 0, 0, 0),
                  title: "Running Start"
                },
            ],
            month: 0,
            day: 0,
            title: ''
        }
    }

    handleMonthChange(e) {
        this.setState({ month:e.target.value })
    }

    handleDayChange(e) {
        this.setState({ day:e.target.value })
    }

    handleTitleChange(e) {
        this.setState({ title:e.target.value })
    }

    handleSubmit(event) {
        let newEvent = {
            start: new Date(2018, this.state.month, this.state.day, 0, 0, 0),
            end: new Date(2018, this.state.month, this.state.day, 0, 0, 0),
            title: this.state.title
        };

        this.setState(
            {
                events: [...this.state.events, newEvent]
            }            
            
        )

        console.log(this.state.events)
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <Header title="events" />
                <div className="container" style={{margin: "30px auto"}}>
                    <BigCalendar
                        defaultDate={new Date()}
                        defaultView="month"
                        events={this.state.events}
                        style={{ height: "100vh" }}
                    />

                    <form onSubmit={this.handleSubmit.bind(this)}>
                        <label htmlFor="month">
                            Month:
                            <select name="month" id="" onChange={this.handleMonthChange.bind(this)}>
                                <option value="0">Jan</option>
                                <option value="1">Feb</option>
                                <option value="2">Mar</option>
                                <option value="3">Apr</option>
                                <option value="4">May</option>
                                <option value="5">Jun</option>
                                <option value="6">Jul</option>
                                <option value="7">Aug</option>
                                <option value="8">Sep</option>
                                <option value="9">Oct</option>
                                <option value="10">Nov</option>
                                <option value="11">Dev</option>
                            </select>
                        </label>
                        <label htmlFor="day">
                            Day:
                            <select name="day" id="" onChange={this.handleDayChange.bind(this)}>
                                <option value="0">1</option>
                                <option value="1">2</option>
                                <option value="2">3</option>
                                <option value="3">4</option>
                                <option value="4">5</option>
                                <option value="5">6</option>
                                <option value="6">7</option>
                                <option value="7">8</option>
                                <option value="8">9</option>
                                <option value="9">10</option>
                                <option value="10">11</option>
                                <option value="11">12</option>
                                <option value="12">13</option>
                                <option value="13">14</option>
                                <option value="14">15</option>
                                <option value="15">16</option>
                            </select>
                        </label>
                        <label htmlFor="day">
                            Title:
                            <input type="text" onChange={this.handleTitleChange.bind(this)}/>
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        )
    }
} 
    


export default MyCalendar;