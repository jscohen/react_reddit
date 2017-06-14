import React, {Component} from 'react';
import './Posts.css'

class Comment extends Component {
  render () {
    return (
      <div>
        <small>Posted by: <span className='author'>{this.props.author}</span></small>
        <p>{this.props.body}</p>
      </div>
    )
  }
}

export default Comment;
