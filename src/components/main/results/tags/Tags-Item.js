import React from 'react'

const TagsItem = ({i, element}) =>

  <a className="tags-item" href="#">
    <li className="tags-item" key={i}>{element}</li>
  </a>

export default TagsItem
