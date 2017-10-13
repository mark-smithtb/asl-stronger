import React, { Component } from 'react'
import TagsList from './tags/Tags-List'

class ResultsItem extends Component {

  state = {
    videoURL : ''
  }

  componentDidMount() {
    console.log(this.props)
    fetch(`https://aslstrongapi.herokuapp.com/api/video/${this.props.videoId}`)
      .then(r => r.json())
      .then(data => {
        let currentState = this.state
        this.setState({
          ...currentState,
          videoURL: data.video.videoURL.replace("watch?v=", "embed/")
        })
      })
  }

  render = () =>
      <li className="results-item">
        <iframe className="video" src={this.state.videoURL} frameBorder="0" title="video" allowFullScreen />
        <a className="name" href="#"> <h2 className="sub-header">{this.props.words}</h2> </a>
        <TagsList categories={this.props.categories}/>
      </li>

}

export default ResultsItem
