import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class Posts extends Component {
  constructor (props) {
  super()
  this.state = {
    name: "",
    body: "",
  }
}

nameChange (e) {
  e.preventDefault()
  this.setState({
    name: e.target.value
  })
}

bodyChange (e) {
  e.preventDefault()
  this.setState({
    body: e.target.value
  })
}

addComment(e) {
  e.preventDefault()
  const author = this.state.author
  const body = this.state.body
}

  render() {
    return (
      <div className="Posts">
      <h1>{this.props.title}</h1>
      <p>Posted by {this.props.author}</p>
      <em>{this.props.body}</em>
      <p>{this.props.num}</p>
      <p>Add Comment:</p>
      <form>
        <input type="text"
         placeholder="Enter Your Name"
         onChange={(e) => this.nameChange(e)}
         />
         < br />
         <textarea type="text" placeholder="Whats up?"
         onChange={(e) => this.bodyChange(e)}
         />
   <button onClick={(e) => this.addComment(e)}>Add Comment</button>
    </form>
      </div>
    );
  }
}

export default Posts;
