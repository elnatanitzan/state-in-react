import React from 'react';
import './App.scss';
import ClassComponent from './ClassComponent';
import ClassComponent2 from './ClassComponent2';

const App = () => {
  return (
    <div>
      <h1>State in react</h1>
      <ClassComponent2/>
      <ClassComponent/>
    </div>
  )
};

export default App;