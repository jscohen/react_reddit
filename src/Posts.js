import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Posts.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group';
import Comment from './Comment'
import newPosts from './newPosts'

class Posts extends Component {
  newPosts = this.props
  constructor (props) {
  super()
  this.state = {
    name: "",
    body: "",
    title: "",
    comments: [],
    posts: newPosts
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
  const author = this.state.name
  const body = this.state.body
  const comment = {
    user: author,
    body: body
  }
  const arr = this.state.comments
  arr.push(comment)
  console.log(arr)
  this.setState({
    comments: arr
  })
}

  render() {
    const comments = this.state.comments.map( (user, index, body) => (
      <Comment author={this.state.name} num={index}
      body={this.state.body}
      />
    ))

    return (
      <div className="Posts" className="aPost">
      <h1>{this.props.title}</h1>
      <p>Posted by <span className='author'>{this.props.author}</span></p>
      <em>{this.props.body}</em>
      <p>Add Comment:</p>
        <input type="text"
         placeholder="Enter Your Name"
         onChange={(e) => this.nameChange(e)}
         />
         <br />
         <textarea type="text" placeholder="Whats up?"
         onChange={(e) => this.bodyChange(e)}
         />
         <br />
        <button onClick={(e) => this.addComment(e)}>Add Comment</button>
        <div className="comments">
        <CSSTransitionGroup
         transitionName="post"
         transitionEnterTimeout={500}
         transitionLeaveTimeout={300}>
          {comments}
        </CSSTransitionGroup>
        </div>
      </div>
    );
  }
}

export default Posts;
