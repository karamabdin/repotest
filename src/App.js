import React, {Component} from 'react'
import Input from './Input'


class App extends Component{
  constructor(){
    super()
    this.state = {
      textSearch: ''
    }
  }
  render(){
    return(
      <Input />
      
    )
  }
}
export default App
