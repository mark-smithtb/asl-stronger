import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import AlphaSortList from './sort/AlphaSortList'
import ResultsList from './results/Results-List'
import HomePage from './HomePage'
import AboutPage from './AboutPage'
import CategoriesPage from './CategoriesPage'
import DictionaryPage from './DictionaryPage'
import CategoriesSortList from './sort/CategoriesSortList'

class Main extends Component {

  constructor() {
    super()
    this.state = {
      objects: []
    }
    this._handleStateChange('getCategories', '')
  }
  componentDidUpdate(prevProps) {
      if (this.props.location !== prevProps.location) {
        this.onRouteChanged();
      }
    }

    onRouteChanged = () => {
      this.setState({
        objects: []
      })
    }


  render () {
    console.log(this.state);

    return (
      <main id="main">
        <Route path='/' exact component={HomePage}/>
        <Route path='/about' exact component={AboutPage}/>
          <Route path='/categories' exact render={() => <CategoriesSortList handleStateChange={this._handleStateChange} categories={this.state.categories}/> } />
        <Route path='/categories' exact render={() => <CategoriesPage clearVideos={this._clearVideos} word={this.state.selectedVideo} objects={this.state.objects} handleStateChange={this._handleStateChange}/> } />
        <Route path='/Dictionary/English' exact render={() => <AlphaSortList word={this.state.selectedVideo} handleStateChange={this._handleStateChange}/> } />
        <Route path='/Dictionary/English' exact render={() => <DictionaryPage clearVideos={this._clearVideos} word={this.state.selectedVideo} objects={this.state.objects} handleStateChange={this._handleStateChange}/> } />
      </main>
    )
  }

  _clearVideos = () => {
    this.setState({
      objects: []
    })
  }

  _handleStateChange = (type, payload) => {

    switch (type) {
      case 'getCategories':
      fetch(`https://aslstrongapi.herokuapp.com/api/categories`)
      .then(r => r.json())
      .then(data => {
        console.log('this is loading')
        let currentState = this.state
        this.setState({
          ...currentState,
          categories: data
        })
      })
      break;
      case 'getWordsByCategory':
      this.setState({
        objects: []
      })
      fetch(`https://aslstrongapi.herokuapp.com/api/categories/${payload}`)
      .then(r => r.json())
      .then(data => {
        let currentState = this.state
         data.info.forEach((object) => {
          var newObject = fetch(`https://aslstrongapi.herokuapp.com/api/video/${object.videoId}`)
            .then(r => r.json())
            .then(data => {
              object = {
                id: [object.id],
                words: [object.words[0]],
                categories: [object.categories],
                videoURL: data.video.videoURL
              }
              var objects = this.state.objects
              this.setState({
                ...currentState,
                objects: [...this.state.objects, object]
              })
            })
        })
      })
      break;
      case 'getWordsByLetter':
      this.setState({
        objects: []
      })
      fetch(`https://aslstrongapi.herokuapp.com/api/letter/${payload}`)
      .then(r => r.json())
      .then(data => {
        let currentState = this.state
         data.words.forEach((object) => {
          var newObject = fetch(`https://aslstrongapi.herokuapp.com/api/video/${object.videoId}`)
            .then(r => r.json())
            .then(data => {
              object = {
                id: [object.id],
                words: [object.words[0]],
                categories: [object.categories],
                videoURL: data.video.videoURL
              }
              var objects = this.state.objects
              this.setState({
                ...currentState,
                objects: [...this.state.objects, object]
              })
            })
        })
      })
      break;
      case 'getWord':
      fetch(`https://aslstrongapi.herokuapp.com/api/word/${payload}`)
      .then(r => r.json())
      .then(data => {
        let currentState = this.state
        var object = {
          words: [data.words.words[0]],
          categories: [data.words.categories],
          url: data.video.videoURL.split('=')[1]
        }
        console.log(object);
        this.setState({
          ...currentState,
          selectedVideo: object
        })
      })
      break;
    }
  }


}

function fetchData(type, payload) {

}

export default Main
