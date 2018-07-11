import React, { Component } from 'react';
import {connect} from 'react-redux';
import{
	BrowserRouter as Router,
	Route,
	NavLink,
  Link,
	Redirect,
	Prompt,
	Switch
} from 'react-router-dom';
class PostDetails extends Component {
	renderPost =() => {
		const postId = Number(this.props.match.params.postId);
		const newObjct  = this.props.posts.filter((post,i) => {
			return i === postId;
		});
		return <div className="single-post">
						<li> <b>Title: </b>{newObjct[0].title}</li>
						<li> <b>Category: </b>{newObjct[0].category}</li>
						<li> <b>Description: </b>{newObjct[0].description}</li>
					 </div>
	}
  render() {
			const postId = Number(this.props.match.params.postId);
    return (
      <div className="post-details-area">
        <NavLink NavLink exact to="/" className="addButton">
            Back to the Post
        </NavLink>
        <h1>Post Details Area</h1>
				   {this.renderPost()}
					 <NavLink exact to="/" onClick={()=> this.props.handleDelete(postId)} className="delete-button">
										 Delete Posts
					</NavLink>
					{postId}
      </div>
    );
  }
}

export default connect()(PostDetails);
