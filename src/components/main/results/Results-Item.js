import React, { Component } from 'react'
import TagsList from './tags/Tags-List'

class ResultsItem extends Component {

  state = {
    videoURL : ''
  }

  componentDidMount() {
    // fetch(`https://aslstrongapi.herokuapp.com/api/video/${this.props.videoId}`)
    //   .then(r => r.json())
    //   .then(data => {
    //     let currentState = this.state
    //     this.setState({
    //       ...currentState,
    //       videoURL: data.video.videoURL.replace("watch?v=", "embed/")
    //     })
    //   })
  }

  render = () =>
      <li className="results-item" onClick={() => {this.getWord(this.props.object.id)}}>
        <iframe className="video" src={this.state.videoURL} frameBorder="0" title="video" allowFullScreen />
        <div> <h2 className="sub-header">{this.props.object.words[0]}</h2> </div>
      </li>
  getWord = (id) => this.props.handleStateChange('getWord', id)
}

export default ResultsItem
