import React from 'react'
import './App.css'
import { Provider, connect } from 'react-redux'
import { createStore} from 'redux'

//Redux  This is for redux


const INC = 'INC'
const DEC = 'DEC'
const RESET = 'RESET'

const counterReducer = (state=0,action) =>{
  switch(action.type) {
    case INC:
      return ++state
    case DEC:
      return --state
    case RESET:
      return 0
    default:
      return 0
  }
}
const store = createStore(counterReducer)

function incAction () {
  return {
    type: INC
  }
}

function decAction () {
  return {
    type: DEC
  }
}

function resetAction () {
  return {
    type: RESET
  }
}



//React   This is the react Component.


class Display extends React.Component {
  constructor(props){
    super()
  }
  incrementHandler = ()=>{
    this.props.increment()
    
  }
  decrementHandler = ()=>{
    this.props.decrement()
    
  }
  resetHandler = ()=>{
    this.props.reset()
  }

  render () {
    return (
      
        <div>
        <h2>{this.props.count}</h2>
        <button onClick= {this.incrementHandler}>Increment</button>
        <button onClick={this.decrementHandler}>Decrement</button>
        <button onClick={this.resetHandler}>Reset</button>
      </div>
      
        
      
    )
  }
}

//React-Redux    This is connecting react and redux.

const mapStateToProps = (state) =>{
  return {count: state}
}

const mapDispatchToProps = (dispatch) =>{
  return {
    increment: ()=>{
      dispatch(incAction())
    },
    decrement: ()=>{
      dispatch(decAction())
    },
    reset: ()=>{
      dispatch(resetAction())
    }
  }
}

const Conter = connect(mapStateToProps,mapDispatchToProps) (Display)

class App extends React.Component {
  constructor(props){
    super (props)
  }
  render () {
    return (
      <Provider store={store}>
        <Conter></Conter>
      </Provider>
      
    )
  }
}

export default App
