import { createStore , combineReducers } from 'redux';
import home from '@/views/home/store'
import kind from '@/views/kind/store'
import user from '@/views/user/store'
import cart from '@/views/cart/store'
//合并reducer
const reducer = combineReducers({
  home,
  kind,
  user,
  cart
})
const store = createStore(reducer);

export default store;
