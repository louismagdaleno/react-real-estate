import React, { Component} from 'react'
import ReactDOM from 'react-dom'

// custom components
import Header from './header';
import Filter from './filter';
import Listing from './listing';

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
        <Listing />
      </section>
    </div>)
  }
}

const app = document.getElementById('app')

ReactDOM.render(<App />, app)
