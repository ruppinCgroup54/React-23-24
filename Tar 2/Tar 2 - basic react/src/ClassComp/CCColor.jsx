import  { Component } from 'react'

export default class CCColor extends Component {
  constructor(props) {
    super(props)

    this.state = {
      color:'white'
    }
  }

  colors = ['red','green','yellow','blue','pink','grey','purple','orange']

  render() {
    return (
      <div style={{backgroundColor:this.state.color}}>
        
        {this.colors.map(col => <span style={{color:col}} key={col}> {col} </span>)}

      </div>
    )
  }
}
