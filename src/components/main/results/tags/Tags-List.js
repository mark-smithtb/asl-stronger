import React, { Component } from 'react'
import TagsItem from './Tags-Item'

class TagsList extends Component {

  render = () => {

    const tagsItem = this.props.categories.map(
      (element, i) => <TagsItem key={i} i={i} element={element}/>
    )

    return ( <ul className="tags-list">{tagsItem}</ul> )

  }

}

export default TagsList
