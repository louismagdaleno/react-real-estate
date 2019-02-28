import React, { Component} from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Louis'
    }
  }
  clickedBtn = () => {
    console.log('swag')
  }
  render () {
    return (<div>Real Estate</div>)
  }
}

const app = document.getElementById('app')

ReactDOM.render(<App />, app)
