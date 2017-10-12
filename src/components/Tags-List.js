import React, { Component } from 'react'
import TagsItem from './Tags-Item'

class TagsList extends Component {
  render = () => (
    <ul className="tags-list">
      <TagsItem/>
    </ul>
  )
}

export default TagsList
