import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

function Student(props) {
  return (
    <div className="card">
      <h2>{props.name}</h2>
      <p><b>Course:</b> {props.course}</p>
      <p><b>Marks:</b> {props.marks}</p>
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <h1>Student Details</h1>
      <div className="grid">
        <Student name="Anurag" course="Web Development" marks="92" />
        <Student name="Rahul" course="React JS" marks="88" />
        <Student name="Priya" course="JavaScript" marks="95" />
      </div>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
