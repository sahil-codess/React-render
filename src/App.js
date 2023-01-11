import React from 'react'
import './App.css';
import { ChildOne } from './Components/Parent Child/ChildOne';
import ParentOne from './Components/Parent Child/ParentOne';


function App() {
  return (
    <div className="App">
        <ParentOne>
          <ChildOne />
        </ParentOne>
    </div>
  );
}

export default App;
