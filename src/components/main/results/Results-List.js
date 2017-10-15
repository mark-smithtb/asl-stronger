import React, { Component } from 'react'
import ResultsItem from './Results-Item'

class ResultsList extends Component {
  render() {

  const resultsItems = this.props.objects.map( (object, i) => <ResultsItem key={i} object={object} handleStateChange={this.props.handleStateChange}/> )
  return(
  <div>
    <ul id="results-list"> {resultsItems} </ul>
  </div>
  )
}
}

export default ResultsList
