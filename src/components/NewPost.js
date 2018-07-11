import React, { Component } from 'react';
import {connect} from "react-redux";
import{
	BrowserRouter as Router,
	Route,
	NavLink,
  Link,
	Redirect,
	Prompt,
	Switch
} from 'react-router-dom';
class NewPost extends Component {
	handleAddInput = (e) =>{
		e.preventDefault();
    const title = this.getTitle.value;
    const category =  this.getCategory.value;
		const description = this.getDescription.value;
    const payload = {
      title,
      category,
			description
		}
		this.props.dispatch({
			type:'ADD',
			payload
		});
		console.log(payload);
}
  render() {
    return (
      <div className="new-post-area">
        <h1>New Post</h1>
        <NavLink NavLink exact to="/" className="addButton">
            Back to the Post
        </NavLink>

				<div className="form-area">
					<form>
					<label>
							 Title:
							<input type="text"
										 ref={(input)=>this.getTitle = input}
										  />
					</label>
					<br /> <br />

					<label>
							Category:
							<input type="text"
										 ref={(input)=>this.getCategory = input}
										  />
					</label>
					<br />
					<label>
							Write New Post:
							<textarea
										 ref={(input)=>this.getDescription = input}
							       />
					</label>
					<br />
					<button onClick={this.handleAddInput} className="save-button">
					<NavLink exact to="/">
					 Save
					</NavLink>
					</button>
					<button onClick={this.handleCancel} className="cancel-button">
						<NavLink exact to="/">
								 Cancel
						</NavLink>
					</button>
					</form>
				</div>
      </div>
    );
  }
}



export default connect() (NewPost);
