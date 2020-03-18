import React, { Component } from 'react';
export default class Header extends Component{
	render(){
		return(
			<header className="Header">
				<nav className="navbar navbar-light bg-light">
				  <a className="navbar-brand" href="#">
				  <img className="d-inline-block align-top" width="40" height="40" src="/video_logo.png" alt="" />
				  <span>Live Share</span>
				  </a>
				  <img className="d-inline-block align-top" width="40" height="40" src="/profile.png" alt="" />
				</nav>
			</header>
		)
	}
}