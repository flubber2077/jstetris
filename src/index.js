// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './Components/App';
import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Board from "./Components/board.js";


function Game() {
  return (
    <div className="tetris-parent" >
      <Board />
    </div>
  );
}

ReactDOM.render(
  <div>
    <header>
      <h1>tetr.js</h1>
      <p>by K. Montgomery and D. Jordan</p>
    </header>
    <Game />
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
