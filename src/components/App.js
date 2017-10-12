import React, { Component } from 'react';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';

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
