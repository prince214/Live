import React, { Component } from 'react';
export default class Header extends Component{
	render(){
		return(
			<header>
				<nav class="navbar navbar-light bg-light">
				  <a class="navbar-brand" href="#">
				    <img src="/docs/4.0/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt="">
				    Bootstrap
				  </a>
				</nav>
			</header>
		)
	}
}