import React, { Component } from 'react';
import Header from './Header';
import './App.css';
import Section from './Section';

class App extends Component {
  render() {
    return (
      <div >
        <Header />
        <div className="container">
        <div className="row">
          <div className="bk-sidebar col s3">
            Side Bar
          </div>
          <div className="col s9">
            <Section />
            <Section />
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
