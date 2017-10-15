import React, { Component } from 'react';
import Header from './layout/Header';
import Nav from './layout/Nav';
import Main from './main/Main';
import Footer from './layout/Footer';
import { BrowserRouter } from 'react-router-dom'

class App extends Component {
  render = () => (
      <BrowserRouter>
      <div id="wrapper">
      <Header/>
      <Nav/>
      <Main/>
      <Footer/>
      </div>
      </BrowserRouter>
  )
}

export default App
