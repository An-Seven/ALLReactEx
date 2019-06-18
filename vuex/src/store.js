import { createStore } from 'redux';
const reducer = (state = {
  bannerlist: [],
  prolist: []
}, action) => {
  const {type, data} = action //触发action靠的是type，data为数据
  switch (type) {
    case 'changeBannerlist':
      state = {
        bannerlist: data,
        prolist: state.prolist
      }
      return state;
      default:
      break;
  }
}
const store = createStore(reducer);
export default store;