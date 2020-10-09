import React, { Component } from 'react';

export default class Students extends Component {
  render(){
    const { students } = this.props;
    const studentList = students.map(student => {
      return (
        <div className="ninja" key={student.id}>
          <div>Name: { student.name }</div>
          <div>Age: { student.age }</div>
          <div>Belt: { student.program }</div>
        </div>
      )
    });
    return (
      <div className="student-list">
        { studentList }
      </div>
    )
  }
}
