import React, { Component} from 'react'
import ReactDOM from 'react-dom'

// custom components
import Header from './Header';

class App extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Louis'
    }
  }

  render () {
    return (
    <div>
      <Header />
      <section id="content-area">
        <Filter />
        <Listings />
      </section>
    </div>)
  }
}

const app = document.getElementById('app')

ReactDOM.render(<App />, app)
