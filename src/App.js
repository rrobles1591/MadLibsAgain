import React from 'react';
import SignUpForm from './SignUpForms';
import './App.css';
import AddCommas from './addCommas';

function App() {
  return (
    <div className="App">
      <h1>Madlibs</h1>
      <p>Type an adjetive, a verb and a noun to get a message</p>
      < SignUpForm />
      < AddCommas/>
    </div>
  );
}


export default App;
