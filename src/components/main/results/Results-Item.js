import React, { Component } from 'react'
import TagsList from './tags/Tags-List'
var youtubeThumbnail = require('youtube-thumbnail');

class ResultsItem extends Component {

  state = {
    videoURL : ''
  }

  componentWill() {

  }

  render() {
    console.log(youtubeThumbnail(this.props.object.videoURL).default);
    return (
      <li className="results-item" onClick={() => {this.getWord(this.props.object.id)}}>
        <img className="video" scr={youtubeThumbnail(this.props.object.videoURL).default.url}/>
         <p className="sub-header">{this.props.object.words[0]}</p>
      </li>
    )
    }
  getWord = (id) => this.props.handleStateChange('getWord', id)
}

export default ResultsItem
