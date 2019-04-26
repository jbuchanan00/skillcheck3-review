import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Welcome extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <div>
        <h1>Houses</h1>
        <div>
          <Link to='/house/Hufflepuff'><button>Hufflepuff</button></Link>
          <Link to='/house/Gryffindor'><button>Gryffindor</button></Link>
          <Link to='/house/Slytherin'><button>Slytherin</button></Link>
          <Link to='/house/Ravenclaw'><button>Ravenclaw</button></Link>
        </div>
      </div>
    )
  }
}
