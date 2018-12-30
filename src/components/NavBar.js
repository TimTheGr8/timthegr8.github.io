import React from 'react';
import '../containers/App.css';

const NavBar = () => {
return (
	<div class="flex justify-center pa1">
	  <div class="br bb bl br-pill w-25 pa3 mr2">
	    <code>About Me</code>
	  </div>
	  <div class="App-link ba br-pill w-25 pa3 mr3">
	    <code>Gear</code>
	  </div>
	  <div class="outline w-25 pa3 mr2">
	    <code>Affilitations</code>
	  </div>
	  <div class="outline w-25 pa3 mr2">
	    <a href="#" class="link black hover-bg-light-blue">Contact Me</a>
	  </div>
	</div>
	);
}

export default NavBar;