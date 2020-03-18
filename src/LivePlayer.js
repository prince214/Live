import React, { Component } from 'react';
export default class LivePlayer extends Component{
	render(){
		return(
			<div>
			<video
		    id="my-video"
		    class="video-js"
		    controls
		    preload="auto"
		    width="640"
		    height="264"
		    poster="MY_VIDEO_POSTER.jpg"
		    data-setup="{}"
		  >
		    <source src="https://www.youtube.com/watch?v=VMVe-ySBg-I" type="video/mp4" />
		    <source src="https://www.youtube.com/watch?v=VMVe-ySBg-I" type="video/webm" />
		    <p class="vjs-no-js">
		      To view this video please enable JavaScript, and consider upgrading to a
		      web browser that
		      <a href="https://videojs.com/html5-video-support/" target="_blank"
		        >supports HTML5 video</a
		      >
		    </p>
		  </video>
			</div>
		)
	}
}