import React, { Component } from 'react';
import Header from './layout/Header';
import Nav from './layout/Nav';
import Main from './main/Mains';
import Footer from './layout/Footer';

class App extends Component {
  render = () => (
    <div id="wrapper">
      <Header/>
      <Nav/>
      <Main/>
      <Footer/>
    </div>
  )
}

export default App
