import React, { Component } from 'react'
import TagsList from './Tags-List'

class ResultsItem extends Component {

  render = () => (
      <li className="results-item">
        <video className="video"
  poster="https://archive.org/download/WebmVp8Vorbis/webmvp8.gif" >
  <source
    src="https://archive.org/download/WebmVp8Vorbis/webmvp8.webm"
    type="video/webm"/>
  <source
    src="https://archive.org/download/WebmVp8Vorbis/webmvp8_512kb.mp4"
    type="video/mp4"/>
  <source
    src="https://archive.org/download/WebmVp8Vorbis/webmvp8.ogv"
    type="video/ogg"/>
  Your browser doesn't support HTML5 video tag.
</video>
        <a className="name" href="#"><h2 class="sub-header">Name</h2></a>
        <TagsList/>
    </li>
  )

}

export default ResultsItem

{/* <a className="video" href="#"><img href="#"  id="search" src="./images/movie.svg" height="40px" width="40px"/></a> */}
