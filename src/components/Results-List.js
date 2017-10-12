import React, { Component } from 'react'
import ResultsItem from './Results-Item'

class ResultsList extends Component {
  render = () => (
    <ul id="results-list">
      <ResultsItem/>
    </ul>
  )
}

export default ResultsList
