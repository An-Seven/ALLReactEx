import React, { Component } from 'react'
class Com extends Component {
  render () {
    console.log(this)
    return (
      <div>
        <button onClick = { () => {
          this.props.getCountFn(this.props.kindlist.length)
        } }>计算</button>
      
        <ul>
          {
            this.props.kindlist.map(item => {
              return (<li key = { item.id }>{ item.title } </li>)
            })
          }
        </ul>
      </div>
    )
  }
}
export default Com;