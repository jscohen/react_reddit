import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import JonReddit from './JonReddit';
import MandyReddit from './MandyReddit';

const jonRedditPosts = [
  {
    user: 'Jon',
    title: 'Jon Rocks',
    body: 'Jon is awesome',
    comments: [
      'Jon does rock!',
      'Jon sucks!'
    ]
  },
  {
    user: 'Mandy',
    title: 'Jon can code',
    body: 'He is so good at it',
    comments: [
      'Indeed'
    ]
  }
]
const mandyRedditPosts = [
  {
    user: 'Mandy',
    title: 'Kwe',
    body: 'Kwe is the way',
    comments: [
      {
        post: 0,
        author: 'Jon',
        body: 'I love Mandy!'
      }
    ]
  },
  {
    user: 'Jon',
    title: 'Mandy Rocks',
    body: 'Mandy is awesome!',
    comments: [
      {
        post: 1,
        author: 'Jon',
        body: 'Mandy Rules!'
      },
      {
        post: 1,
        author: 'Heather',
        body: 'So true!'
      }
    ]
  }
]

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <Link to="/Home">Home</Link>
      <Link to="/MandyReddit">Mandy Reddit</Link>
      <Link to="/JonReddit">Jon Reddit</Link>
      <Route exact path="/Home" component={Home} />
      <Route path="/MandyReddit" component={() =>
      (
        <MandyReddit posts={mandyRedditPosts} />
      )}/>
      <Route path="/JonReddit" component={() => (
        <JonReddit posts={jonRedditPosts} />
      )} />
      </div>
      </Router>
    );
  }
}

export default App;
