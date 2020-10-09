import { render } from '@testing-library/react';
import React, { Component } from 'react';
import Students from './Students';

class App extends Component {
  state = {
    students: [
      { name: 'Mujtaba', age: 30, program: 'BSCS', id: 1 },
      { name: 'Ali', age: 20, program: 'BBA', id: 2 },
      { name: 'Ahmed', age: 25, program: 'BBA', id: 3 }
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>My first React app</h1>
        <Students students={this.state.students}/>
      </div>
    );
  }
}

export default App;
