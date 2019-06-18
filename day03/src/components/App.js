import React, { Component } from 'react';
import '@/main';
// import Home from '@/components/Home'
import Kind from '@/components/Kind'
class App extends Component {
  render () {
    return (
      <div className="container">
        <Kind />
        <footer className= "footer">底部</footer>
      </div>
    )
  }
}
export default App;