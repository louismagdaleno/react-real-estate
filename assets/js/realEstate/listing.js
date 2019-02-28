import React, { Component} from 'react'

export default class Listing extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Louis'
    }
  }
  render () {
    return (
     <section className="listing">
        Listing
     </section>
    )
  }
}


