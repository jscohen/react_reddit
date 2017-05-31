import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Post from './Posts';

class MandyReddit extends Component {
  render () {
    const mandyPosts = this.props.posts.map( (user, index, title, body) => (
      <Post author={this.props.posts[index].user} num={index} title={this.props.posts[index].title}
      body={this.props.posts[index].body}
      comments={this.props.posts[index].comments}
      />
    ))
    return (
      <div>
        <h1>Mandys Reddit</h1>
        {mandyPosts}
      </div>
    )
  }
}
export default MandyReddit;
