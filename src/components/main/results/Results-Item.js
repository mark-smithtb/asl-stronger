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
    var thumbnail = youtubeThumbnail(this.props.object.videoURL).default
    return (
      <div className="results-item" onClick={() => {this.getWord(this.props.object.id)}}>
        <img className="video" width={thumbnail.width} height={thumbnail.height} src={thumbnail.url}/>
        <div className='results-item-details'>
         <p className="sub-header">{this.props.object.words[0]}</p>
        </div>
      </div>
    )
    }
  getWord = (id) => this.props.handleStateChange('getWord', id)
}

export default ResultsItem
