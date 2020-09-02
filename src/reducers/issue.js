import at from '@/constants/ActionTypes';

const INITIAL_STATE = {
  ecode: 0,
  query: {},
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
         state.options = Object.assign(state.options, action.result.options);
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

     case at.ISSUE_OPTIONS:
       state.loading['options'] = true;
       state.options = {};
       return {
         ...state,
       }
     case at.ISSUE_OPTIONS_SUCCESS:
       state.loading['options'] = false;
       if (action.result.ecode === 0) {
         state.options = Object.assign(state.options, action.result.data);
       }
       return {
         ecode: 0,
         ...state,
       }
     case at.ISSUE_OPTIONS_FAIL:
       state.loading['options'] = false;
       return {
         ecode: action.result.ecode,
         ...state,
       }

     default:
       return state;
  }
}
