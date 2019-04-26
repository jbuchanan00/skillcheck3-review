import React, { Component } from 'react'
import axios from 'axios'

export default class House extends Component {
  constructor() {
    super()
    this.state = {
      id: 0,
      house_name: '',
      description: '',
      patron_animal: '',
      img: '',
      color_1: '',
      color_2: '',
      color_3: '',
      students: []
    }
  }

  componentDidMount() {
    this.getHouseInfo()
  }

  getHouseInfo() {
    const {name} = this.props.match.params
    axios.get(`/api/house/${name}`).then(res => {
      this.setState(res.data)
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.house_name}</h1>
        <h3>{this.state.description}</h3>
        <h2>{this.state.patron_animal}</h2>
        <figure>
          <img src={this.state.img} alt=""/>
        </figure>
        <hr/>
        <h3>Students</h3>
        {this.state.students.map((student) => (
          <h4>{student.name}</h4>
        ))}
      </div>
    )
  }
}
