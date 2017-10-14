import React, { Component } from 'react'
import SortList from './sort/Sort-List'
import ResultsList from './results/Results-List'

const initial_state = {
    objects:    [],
  }

class Main extends Component {

  state = initial_state

  componentDidMount () {

    fetch('https://aslstrongapi.herokuapp.com/api/allwords')
      .then(r => r.json())
      .then(data => {
        let currentState = this.state

        console.log('this is loading')
        this.setState({
          ...currentState,
          objects: data.words,
        })
      })
    }

    

  render = () =>

    <main id="main">
      <SortList/>
      <ResultsList objects={this.state.objects}/>
    </main>

}

export default Main
