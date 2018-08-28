import React, { Component } from 'react';
import { connect } from 'react-redux';
import Comment from './Comment'

class CommentsList extends Component {
  renderComments(comments) {
    return (
      <ul>
        {comments.map(comment => {
          return (
            <Comment
              comment={comment}
              key={comment}
            />
          )
        })}
      </ul>
    )
  }

  render() {
    return(
      <div>
        <h1>All Comments:</h1>
        { this.renderComments(this.props.comments) }
      </div>
    )
  }
}

function mapStateToProps({ comments }) {
  return { comments };
}

export default connect(mapStateToProps)(CommentsList);
