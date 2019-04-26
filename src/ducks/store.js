import {createStore} from 'redux'

// INITIAL STATE
const initialState = {
  students: []
}

// CONSTANTS
export const GET_STUDENTS = 'GET_STUDENTS'

// REDUCER
function reducer(state = initialState, action) {
  const {type, payload} = action
  switch(type) {
    case GET_STUDENTS:
      return {...state, students: payload}
    default:
      return state
  }

}

export default createStore(reducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())