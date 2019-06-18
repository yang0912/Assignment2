import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { clearMessage } from '../actions/postActions';

class Posts extends Component {

  render() {
    const postItems = this.props.posts.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));
    return (
      <div>
        <h1>Posts</h1>
        {postItems}
      </div>
    );
  }
}

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object,
  clearMessage: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  console.log(state)

  return{
    posts: state.posts.items,
    newPost: state.posts.item
  };
};

const mapDispatchToProps = (dispatch) => {
  return{
    clearMessage:() => {
      dispatch(clearMessage());
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);