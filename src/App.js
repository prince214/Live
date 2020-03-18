import React, { Component } from 'react';
import Header from './Header';
import Form from './Form';
import LivePlayer from './LivePlayer';
import InviteList from './InviteList';
import logo from './logo.svg';
import './App.css';

class App extends Component{
	render(){
		return(
			<div class="row full-height">
				 <Header />
				 <Form />
				 <InviteList />
				 <LivePlayer />
			</div>
		)
	}
}

export default App;
