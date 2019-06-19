import { createStore } from 'redux';

function getNewState (state, obj) {
  return Object.assign({}, state, obj)
}
const reducer = ( state = {
  bannerlist: [1,2],
  prolist: []
},action) => {
  const { type, data } = action
  switch (type) {
    case 'changeBannerList': 
      // return Object.assign({}, state, { bannerlist : data})
      return getNewState(state, { bannerlist: data });
    case 'changeProlist':
      return Object.assign({}, state, { prolist : data});
    default:
      return state;
  }
}
const store = createStore(reducer);

export default store;
