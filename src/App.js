import './App.css';
import CreateCoworking from './CreateCoworkings';
import ListCoworkings from './ListCoworkings';
// import React, { useState } from 'react';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Création de coworking</h1>
      </header>
      <main>
        <CreateCoworking />
        <ListCoworkings />
      </main>
    </div>
  );
}

export default App;













