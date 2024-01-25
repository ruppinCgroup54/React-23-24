import { Component } from 'react'

export default class CCColor extends Component {
  constructor(props) {
    super(props)

    this.containerStyle = {
      display: "flex",
      justifyContent: 'space-around',
      alignItems: 'center',
      flexFlow: 'wrap',
      padding: 10
    }

    this.buttonStyle = {
      fontFamily: 'cursive',
      fontWeight: 800,
      fontSize: '1.3rem',
      margin:4

    }

    this.state = {
      color: ''
    }
  }

  
  colors = ['red', 'green', 'yellow', 'blue', 'pink', 'black', 'purple', 'orange']



  chngColor = (e) => {
    this.setState({
      color: e.target.value,
    })
  }

  render() {
    return (
      <div style={{ ...this.containerStyle, backgroundColor: this.state.color }}>

        {this.colors.map(col => <input type="button" onClick={this.chngColor} style={{ color: col,...this.buttonStyle }} className='button-29'  key={col} value={col} />)}

      </div>
    )
  }
}
