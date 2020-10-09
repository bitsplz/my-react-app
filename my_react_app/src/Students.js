import React from 'react';

const Students = (props) => {
  const { students,deleteStudent } = props;
  const studentList = students.map(student => {
    //if (student.age > 20) {
      return (
        <div className="ninja" key={student.id}>
          <div>Name: {student.name}</div>
          <div>Age: {student.age}</div>
          <div>Program: {student.program}</div>
          <button onClick={()=>{deleteStudent(student.id)}}>Delete</button>{/*this is where we want to fire the deleteStudent func*/}
                          {/*we use an anonymous function to prevent deleteStudent from firing when page is loaded*/}
        </div>
      )
    //}
    //else
    //  return null
  });
  return (
    <div className="student-list">
      { studentList}
    </div>
  )
}
export default Students;