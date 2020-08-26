import at from '@/constants/ActionTypes';

const INITIAL_STATE = {
  ecode: 0,
  item: {},
  loading: {}
}

export default function user (state = INITIAL_STATE, action) {
  switch (action.type) {
     case at.USER_LOGIN:
       state.loading['login'] = true;
       state.item = {};
       return {
         ...state,
       }
     case at.USER_LOGIN_SUCCESS:
       state.loading['login'] = false;
       if (action.result.ecode === 0) {
         state.item = action.result.data;
       }
       return {
         ecode: 0,
         ...state,
       }
     case at.USER_LOGIN_FAIL:
       state.loading['login'] = false;
       return {
         ecode: action.result.ecode,
         ...state,
       }
     default:
       return state;
  }
}
