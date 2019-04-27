import React, { Component } from 'react';
import Sample from './sample.js';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom'


const Home = () => (
  <div>
    <h1>Home</h1>
    <p>Welcom to React！</p>
  </div>
)
const Counter = () => (
  <Sample />
)

const App = () => (
  <BrowserRouter>
  <div>
  <ul>
       <li><Link to='/'>Home</Link></li>
       <li><Link to='/counter'>Counter</Link></li>
     </ul>

     <hr />
    <Route exact path='/' component={Home} />
    <Route path='/counter' component={Counter} />
  </div>
  </BrowserRouter>
)

export default App;
