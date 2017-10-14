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
      .then(data_one => {

        data_one.words.forEach(thing => {
          fetch(`https://aslstrongapi.herokuapp.com/api/video/${thing.videoId}`)
          .then(s => s.json())
          .then(data_two => {
            const videoURL = data_two.video.videoURL.replace("watch?v=", "embed/")
            // const objects = this.state.objects
            const priorState = this.state
            const object = {
              words: [data_one.words[0]],
              categories: [data_one.categories],
              videoURL: videoURL
            }
            console.log(this.state.objects)

            this.setState({
              objects: [...objects, object]
            })
            console.log(this.state.objects)
          })
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
