import React, { Component } from 'react';
import{
	BrowserRouter as Router,
	Route,
	NavLink,
  Link,
	Redirect,
	Prompt,
	Switch
} from 'react-router-dom';

class Home extends Component {
  render() {
    let posts = this.props.posts.map((post,index) =>
                      <li key={index.toString()} className="all-post-area" onClick={this.handlePostDetails}>
                        <NavLink exact to={`/PostDetails/${index}`} className="all-post-items">
                        <b>Title: </b> {post.title} <br />
                        <b>Category: </b>{post.category}
                        </NavLink>
                      </li>);
    return (
      <div className="all-post">
          <NavLink exact to="/NewPost" className="addButton">
              Add New Post
          </NavLink>
          < br/>
          <NavLink exact to="/PostDetails" className="addButton">
              Post Details
          </NavLink>
        <h1>All Posts</h1>
           {posts}
      </div>
    );
  }
}

export default Home;
