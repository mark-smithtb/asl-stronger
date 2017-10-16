import React, { Component } from 'react'
import ResultsList from './results/Results-List'
import Video from './results/Video'


class CategoriesPage extends Component {

  render() {
    var video;
    if (this.props.word) {
      video = (
        <Video word={this.props.word} />
      )
    }
    return (
    <div id='main-body'>
      <ResultsList  objects={this.props.objects} handleStateChange={this.props.handleStateChange} />
      {video}
    </div>
    )
}
}


export default CategoriesPage
