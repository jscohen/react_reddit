import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Post from './Posts';
import newPosts from './newPosts';

class MandyReddit extends Component {
    constructor (props) {
    super()
    this.state = {
      name: "",
      body: "",
      title: "",
      posts: [{
        name: this.name,
        body: this.body,
        title: this.title
      }]
    }
  }

  postNameChange (e) {
    e.preventDefault()
    this.setState({
      name: e.target.value
    })
  }

  titleChange (e) {
    e.preventDefault()
    this.setState({
      title: e.target.value
    })
  }

  postBodyChange (e) {
    e.preventDefault()
    this.setState({
      body: e.target.value
    })
  }

  addPost(e) {
    e.preventDefault()
    const author = this.state.name
    const body = this.state.body
    const title = this.state.title
    const post = {
      user: author,
      title: title,
      body: body
    }
    const arr = this.state.posts
    arr.push(post)
    console.log(arr)
  }

  render () {
    const mandyPosts = this.props.posts.map( (user, index, title, body) => (
      <Post author={this.props.posts[index].user} num={index} title={this.props.posts[index].title}
      body={this.props.posts[index].body}
      />
    ))
    const newPosts = this.state.posts.map( (user, index, title, body) => (
      <Post author={this.state.posts[index].user} num={index} title={this.state.posts[index].title}
      body={this.state.posts[index].body}
      />
    ))
    return (
      <div>
        <h1>Mandys Reddit</h1>
        {mandyPosts}
        {newPosts}
        <h1>Add a post</h1>
        <form>
          <input type="text"
           placeholder="Enter Your Name"
           onChange={(e) => this.postNameChange(e)}
           />
           < br />
           <input type="text"
            placeholder="Title"
            onChange={(e) => this.titleChange(e)}
            />
           < br />
           <textarea type="text" placeholder="Whats up?"
           onChange={(e) => this.postBodyChange(e)}
           />
     <button onClick={(e) => this.addPost(e)}>Post!</button>
      </form>
      </div>
    )
  }
}
export default MandyReddit;
