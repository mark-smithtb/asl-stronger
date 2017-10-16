import React, { Component } from 'react'
import TagsList from './tags/Tags-List'
import Youtube from 'react-youtube'

class ResultsItem extends Component {

  render = () =>
      <div className='videoDetail'>
        <Youtube videoId={this.props.word.url} />
      </div>
}

export default ResultsItem
