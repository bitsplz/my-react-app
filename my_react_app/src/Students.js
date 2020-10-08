import React from 'react';

function Students(props) {
    const {name, age, program}= props;
  return (
    <div className="Students">
    <div>Name: {name}</div>
    <div>Age: {age}</div>
    <div>Program: {program}</div>
    </div>
  );
}

export default Students;