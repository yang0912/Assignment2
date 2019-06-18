import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addMessage, clearMessage } from '../actions/postActions';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body
    };

    this.props.addMessage(post);
  }

  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Title: </label>
            <br />
            <input
              type="text"
              name="title"
              onChange={this.onChange}
              value={this.state.title}
            />
          </div>
          <br />
          <div>
            <label>Body: </label>
            <br />
            <textarea
              name="body"
              onChange={this.onChange}
              value={this.state.body}
            />
          </div>
          <br />
          <button type="submit">Submit</button>
          <input value="Clear All" type="button" onClick={this.props.clearMessage} />
        </form>
      </div>
    );
  }
}

PostForm.propTypes = {
  addMessage: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return{
    addMessage:(message) => {
      dispatch(addMessage(message));
    },
    clearMessage:() => {
      dispatch(clearMessage());
    },
  }
}
export default connect(null, mapDispatchToProps)(PostForm);