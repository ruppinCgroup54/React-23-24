import PropTypes from 'prop-types'
import React, { Component } from 'react'

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
        
        {this.colors.map(col => <span style={{color:col}}> {col} </span>)}

      </div>
    )
  }
}
