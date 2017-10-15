import React, { Component } from 'react'
import TagsList from './tags/Tags-List'
import Youtube from 'react-youtube'

class ResultsItem extends Component {

  render = () =>
      <div >
        <Youtube videoId={this.props.word.url} />
      </div>
}

export default ResultsItem
