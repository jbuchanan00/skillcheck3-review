import React, { Component } from 'react'
import axios from 'axios'
import store, { GET_STUDENTS } from '../ducks/store'

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

  async componentDidMount() {
    await this.getHouseInfo()
    await this.getStudentsInTheHouse()
    store.subscribe(() => {
      const reduxState = store.getState()
      this.setState({
        students: reduxState.students
      })
    })
  }

  async getHouseInfo() {
    const { name } = this.props.match.params
    const res = await axios.get(`/api/house/${name}`)
    this.setState(res.data)
  }

  getStudentsInTheHouse() {
    axios.get(`/api/students/${this.state.id}`).then(res => {
      store.dispatch({
        type: GET_STUDENTS,
        payload: res.data
      })
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.house_name}</h1>
        <h3>{this.state.description}</h3>
        <h2>{this.state.patron_animal}</h2>
        <figure>
          <img src={this.state.img} alt="" />
        </figure>
        <hr />
        <h3>Students</h3>
        {this.state.students.map(student => (
          <h4>{student.student}</h4>
        ))}
      </div>
    )
  }
}
