import { connect } from 'react-redux'
import UI from './UI';
import api from '@/api'
const mapStateToProps = (state) => {
  return {
    bannerlist: state.bannerlist,
    prolist: state.prolist
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getBannerListData () {
      api.requestGetData('banner').then(data => {
        // console.log(data)
        dispatch({
          type: 'changeBannerList',
          data
        })
      })
    },

    getProListData () {
      api.requestGetData('douban').then(data => {
        // console.log(data)
        dispatch({
          type: 'changeProlist',
          data
        })
      })
    }
  }
}
const Com = connect(mapStateToProps, mapDispatchToProps)(UI);
export default Com;