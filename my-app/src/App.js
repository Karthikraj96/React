import React from 'react';
import './App.css';

function App(props) {
  console.log(props)
  return (
  <p>Hello {props.to} From {props.from} how is it </p>
  );
}

export default App;

