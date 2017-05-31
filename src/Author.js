import React, {Component} from 'react';

class Author extends Component {
  render () {
    return (
      <div>
        <p>Posted by {this.props.author}</p>
      </div>
    )
  }
}

export default Author;
