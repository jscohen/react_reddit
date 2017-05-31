import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Post from './Posts';

class JonReddit extends Component {
  render () {
    const jonPosts = this.props.posts.map( (user, index, title, body) => (
      <Post author={this.props.posts[index].user} num={index} title={this.props.posts[index].title}
      body={this.props.posts[index].body}
      comments={this.props.posts[index].comments}
      />
    ))
    return (
      <div>
        <h1>Jons Reddit</h1>
        {jonPosts}
      </div>
    )
  }
}
export default JonReddit;
