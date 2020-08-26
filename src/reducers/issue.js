import at from '@/constants/ActionTypes';

const INITIAL_STATE = {
  ecode: 0,
  item: {},
  collection: [],
  options: {},
  loading: {}
}

export default function issue(state = INITIAL_STATE, action) {
  switch (action.type) {
     case at.ISSUE_INDEX:
       state.loading['index'] = true;
       state.item = {};
       return {
         ...state,
       }
     case at.ISSUE_INDEX_SUCCESS:
       state.loading['index'] = false;
       if (action.result.ecode === 0) {
         state.collection = action.result.data;
       }
       return {
         ecode: 0,
         ...state,
       }
     case at.ISSUE_INDEX_FAIL:
       state.loading['index'] = false;
       return {
         ecode: action.result.ecode,
         ...state,
       }
     default:
       return state;
  }
}
