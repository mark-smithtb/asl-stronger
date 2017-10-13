import React, { Component } from 'react'
import TagsList from './Tags-List'

class ResultsItem extends Component {
  state = {
    data: []
  }

  componentDidMount() {

    fetch('https://aslstrongapi.herokuapp.com/api/categories')
      .then(console.log('hello'))
      // .then(results => results.json())
      // .then(data => {
      //   console.log(data)
    // })
  }

  render = () => {
    let videoURL = 'https://www.youtube.com/embed/sv2JD4avYmc'
    let words = 'Cancel'
    return (
      <li className="results-item">
        <iframe className="video" src={videoURL} frameBorder="0" title="video" allowFullScreen />
        <a className="name" href="#">
          <h2 className="sub-header">{words}</h2>
        </a>
        <TagsList />
      </li>
    )
  }
}

export default ResultsItem


// https://tiny-lasagna-server.herokuapp.com/collections/playlisting

// https://aslstrongapi.herokuapp.com/api/categories
