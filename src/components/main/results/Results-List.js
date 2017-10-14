import React from 'react'
import ResultsItem from './Results-Item'

const ResultsList = ({objects}) => {

  const resultsItems = objects.map( (object, i) => <ResultsItem key={i} object={object}/> )
  return(<ul id="results-list"> {resultsItems} </ul>)

}

export default ResultsList
