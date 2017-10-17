import React, { Component } from 'react'
import TagsList from './tags/Tags-List'
import Youtube from 'react-youtube'

class ResultsItem extends Component {

  render = () =>
      <div className='videoDetail'>
        <Youtube
          videoId={this.props.word.url}
          opts={{
            height: '390',
            width: '500'
          }}
           />
      </div>
}

export default ResultsItem
