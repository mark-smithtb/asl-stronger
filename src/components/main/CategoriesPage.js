import React, { Component } from 'react'
import ResultsList from './results/Results-List'
import Video from './results/Video'


class CategoriesPage extends Component {

  render() {
    return (
    <div>
      <ResultsList  objects={this.props.objects} handleStateChange={this.props.handleStateChange} />
      <Video word={this.props.word} />
    </div>
    )
}
}


export default CategoriesPage
