import React from 'react'
import Card from './components/Card';
import Form from './components/Form';
import './App.css';

function App() {
  return (
    <div className='App'>
      <h1>Informacion de tu mascota</h1>
      <Form />
      <Card />
    </div>

  );
}

export default App;