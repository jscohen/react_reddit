import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className="Home">
      <h1>WOOT</h1>
      </div>
    );
  }
}

export default Home;
