import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addComment } from '../actions/index';

class CommentBox extends Component {
  constructor(props) {
    super(props);

    this.state = ({ comment: '' });
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ comment: event.target.value })
  }

  onFormSubmit(event) {
    event.preventDefault();

    this.props.addComment(this.state.comment);
    this.setState({ comment: '' });
  }

  render() {
    return(
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input
            placeholder="Insert Comment here!"
            value={this.state.comment}
            onChange={this.onInputChange}
          />
          <button
            type="submit"
            >Add Comment</button>
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addComment }, dispatch);
}

export default connect(null, mapDispatchToProps)(CommentBox);
