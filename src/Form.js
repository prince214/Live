import React, { Component } from 'react';
export default class Form extends Component{
	render(){
		return(
			<div className="col-sm-10">
			<form>
				<input 
					name="videoLink"
					type="text"
					placeholder="Enter Video Link"
				/>
				<button>Play</button>
				<button>Invite</button>
			</form>
			</div>
			
		)
	}
}