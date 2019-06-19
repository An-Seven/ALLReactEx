import React from 'react';
class Com extends React.Component {
  componentDidMount (){
    console.log(this.props.getProlist)
    this.props.getBannerList(),
    this.props.getProlist()
  } 
  render () {
    // console.log(this.props)
    return (
      <div>首页 
        {
          this.props.bannerlist.map((item, index) => {
            return (<li key = { index }>{item}</li>)
          })
        }
        {
          this.props.prolist.map((item, index) => {
            return (<li key = { index }>{ item.title }</li>)
          })
        }
      </div>
    )
  }
}

export default Com;