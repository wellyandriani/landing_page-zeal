import React, { Component } from 'react';
import logo from '../images/logo.png';

class Isi extends Component {
  render() {
    return (
        <div id="home">
          <img src={logo} style={{padding:'8rem'}} className="App-logo" alt="logo" />
          <p className="font_0">
            UNDER 
            <br></br>
            CONSTRUCTION
          </p>
        </div>

    );
  }
}

export default Isi;


