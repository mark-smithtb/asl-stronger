import React, { Component } from 'react'

class CategoriesSortList extends Component {
  render () {
    return (
        <ul id="sort-list">
          {this.props.categories.map((category) => (
            <li onClick={() => this._selectLetter(category)} >{category}</li>
          ))}
        </ul>
  )
}
_selectLetter(letter) {
  this.props.handleStateChange('getWordsByCategory',letter)
}
}


export default CategoriesSortList
