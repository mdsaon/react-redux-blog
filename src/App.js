import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import NewPost from './components/NewPost';
import PostDetails from './components/PostDetails';
import {connect} from "react-redux";
import{
	BrowserRouter as Router,
	Route,
	NavLink,
	Redirect,
	Prompt,
	Switch
} from 'react-router-dom';

class App extends Component {
  handleDelete = (postId) =>{
    const payload = postId;
	 // const payload = Number(this.props.match.params.postId);
		this.props.dispatch({
			type:'DELETE',
			payload
		});
		console.log(payload)

  }
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
          <Route exact path="/" render={()=>{
    	      			return(
    	      				<Home posts={this.props.posts.posts} />
    	      			);
    	     }} />

          <Route exact path="/NewPost" render={()=>{
           	      return(
           	      	<NewPost />
           	      );
           }} />

           <Route exact path="/PostDetails/:postId" render={(props)=>{
                  return (
                   <PostDetails {...props}
                        posts={this.props.posts.posts}
                        handleDelete={this.handleDelete}
												postId={this.props.postId}/>
                 );
            }} />
          </Switch>
        </Router>
      </div>
    );
  }
}
const mapStateToProps = (state) =>{
  return {
    posts:state
  }
}

export default connect(mapStateToProps) (App);
