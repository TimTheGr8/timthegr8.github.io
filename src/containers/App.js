import React, { Component } from 'react';
import logo from '../logo.png';
import NavBar from '../components/NavBar.js';
import AboutMe from '../components/AboutMe.js';
import Gear from '../components/Gear.js';
import Affiliations from '../components/Affiliations.js';
import SlideShow from '../components/SlideShow.js';
import ContactMe from '../components/ContactMe.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <img src={logo}  alt="logo" />
        <SlideShow/>
        <AboutMe/>
        <Gear/>
        <Affiliations/>
        <ContactMe/>
        <p>My Fishing, Kayaking, and Adventures</p>
      </div>
    );
  }
}

export default App;
