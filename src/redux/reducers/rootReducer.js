import { combineReducers } from 'redux';

import positions from './positions';
import sendUser from './sendUser';

export default combineReducers({
  positionsReducer: positions,
  sendUserReducer: sendUser,
});
