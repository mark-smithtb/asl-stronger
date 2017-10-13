import React, { Component } from 'react'
import ResultsItem from './Results-Item'

const initial_state = {
    objects:    [],
  }

class ResultsList extends Component {

  state = initial_state

  componentDidMount () {

    fetch('https://aslstrongapi.herokuapp.com/api/allwords')
      .then(r => r.json())
      .then(data => {
        let currentState = this.state

        console.log(data.words)
        this.setState({
          ...currentState,
          objects: data.words,
        })
      })
  }

  render = () => {

    const resultsItems =
      this.state.objects.map((object, i) => (
        <ResultsItem
          key        = {i}
          words      = {this.state.objects[i].words[0]}
          categories = {this.state.objects[i].categories}
          videoId    = {this.state.objects[i].videoId}
        />
      ))


    return ( <ul id="results-list"> {resultsItems} </ul> )
  }
}

export default ResultsList
