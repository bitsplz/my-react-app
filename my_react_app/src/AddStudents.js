import React, { Component } from 'react'

export default class AddStudents extends Component {
    state={
        name:null,
        age:null,
        program:null
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value//for every new student take the id of input tag(same as the state variables)
                                        //set the variable to the value against that id.
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();//prevent the default page refresh
        //console.log(this.state);
        this.props.addStudent(this.state);//send the current state as prop to AddNinja function in App.js
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" onChange={this.handleChange} />
                    <label htmlFor="age">Age:</label>
                    <input type="text" id="age" onChange={this.handleChange} />
                    <label htmlFor="belt">Program:</label>
                    <input type="text" id="program" onChange={this.handleChange} />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}