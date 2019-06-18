import React, { Component } from 'react';
import KindList from './KindList';
class Kind extends Component {
  constructor(props){
    super(props);
    this.state = {
      kindlist: [],
      count: '0'
    }
  }
  getCountFn (data) {
    this.setState({
      count: data
    })
  }
  componentDidMount (){
    fetch('http://www.daxunxun.com/douban').then(res => res.json()).then(data => {
      // console.log(data)
      this.setState({
        kindlist: data
      })
    })
  }
  render () {
    return (
      <div className="box">
        <header className="header">分类头部</header>
        <div className="content">分类内容{ this.state.count }
          <KindList kindlist = { this.state.kindlist } getCountFn = {this.getCountFn.bind(this)}/>
        </div>
      </div>
    )
  }
}
export default Kind;