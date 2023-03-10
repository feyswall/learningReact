import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Counter from './components/Counter';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import Navigation from './components/Navigation';
import Movies from './components/Movies';
import Counters from './components/Counters';
import App from './app';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

/** life cycle hooks in react. These are the life cycle hooks that are most
 * used in react application
 */
/**
 * Mount
 * - constrictor -> render -> componentDidMount
 * 
 * Update
 * render
 * componentDidUpdate
 * 
 * Unmount
 * componentWillUnmount
 */


reportWebVitals();
