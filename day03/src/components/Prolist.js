import React, { Component } from 'react';
class App extends Component {
  render () {
    console.log(this)
    return (
      <ul>
        {
          this.props.prolist.map(item => {
            return (<li key = {item.id}>{ item.title }</li>)
          })
        }
      </ul>
    )
  }
}
export default App