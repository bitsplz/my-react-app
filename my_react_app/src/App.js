import { render } from '@testing-library/react';
import React, { Component } from 'react';
import Students from './Students';
import AddStudents from './AddStudents';
class App extends Component {
  state = {
    students: [
      { name: 'Mujtaba', age: 30, program: 'BSCS', id: 1 },
      { name: 'Ali', age: 20, program: 'BBA', id: 2 },
      { name: 'Ahmed', age: 25, program: 'BBA', id: 3 }
    ]
  }
  addStudent=(student)=>{
    student.id=Math.random()*10;
    let tempStudents=[...this.state.students, student]
    this.setState({
      students:tempStudents
    })
  }
  deleteStudent=(id)=>{
    //console.log(id);
    let tempStudents= this.state.students.filter(student=>{
      return student.id!==id
    });
    this.setState({
      students:tempStudents
    });
  }
  componentDidMount(){
    console.log('Component Mounted:)');
  }
  componentDidUpdate(prevProps,prevState){
    console.log('Component Updated');
    console.log(prevState);
  }
  render() {
    return (
      <div className="App">
        <h1>My first React app</h1>
        <Students deleteStudent={this.deleteStudent} students={this.state.students}/>{/*pass the deleteStudent function to displayStudent*/}
        <AddStudents addStudent={this.addStudent}/>
      </div>
    );
  }
}

export default App;