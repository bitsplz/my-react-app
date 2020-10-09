import React from 'react';

const Students = (props) => {
  const { students } = props;
  const studentList = students.map(student => {
    //if (student.age > 20) {
      return (
        <div className="ninja" key={student.id}>
          <div>Name: {student.name}</div>
          <div>Age: {student.age}</div>
          <div>Belt: {student.program}</div>
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