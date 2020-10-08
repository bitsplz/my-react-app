import React from 'react';
import Students from './Students';

function App() {
  return (
    <div className="App">
    <h1>My First React App</h1>
    <Students name="Mujtaba" age="22" program="BSCS"/>
    <Students name="Laraib" age="19" program="BBA"/>
    </div>
  );
}

export default App;
