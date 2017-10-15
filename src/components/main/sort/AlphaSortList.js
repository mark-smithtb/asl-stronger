import React, { Component } from 'react'

class AlphaSortList extends Component {
  render () {
    const alphaArr = ['A','B','C','D',
                      'E','F','G','H',
                      'I','J','K','L',
                      'M','N','O','P',
                      'Q','R','S','T',
                      'U','V','W','X',
                      'Y','Z']
    return (
        <ul id="sort-list">
          {alphaArr.map((letter) => (
            <li onClick={() => this._selectLetter(letter)} >{letter}</li>
          ))}
        </ul>
  )
}
_selectLetter(letter) {
  this.props.handleStateChange('getWordsByLetter',letter)
}
}


export default AlphaSortList
