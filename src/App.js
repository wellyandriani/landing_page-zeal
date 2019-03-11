import React, { Component } from 'react';
import Navbar from './components/Navbar'
import Content from './components/Content';
import Form from './components/Form';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header" >
        <div>
        <Navbar />
          </div>
          <div>
            <Content />
          </div>
          <div>
            <Form />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
