import React from 'react';
import ReactDOM from 'react-dom';
import CounterApp from './CounterApp';
import './index.css';


// const hola = <h2>Hola mundo</h2>;

const htmlDir = document.querySelector("#root");

ReactDOM.render(<CounterApp value={8}/> , htmlDir);