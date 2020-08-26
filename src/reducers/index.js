import { combineReducers } from 'redux'
import counter from './counter';
import user from './user';
import project from './project';
import issue from './issue';

export default combineReducers({
  counter,
  user,
  project,
  issue,
})
