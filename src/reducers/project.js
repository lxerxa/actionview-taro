import at from '@/constants/ActionTypes';

const INITIAL_STATE = {
  ecode: 0,
  item: {},
  recents: [],
  options: {},
  loading: {}
}

export default function project(state = INITIAL_STATE, action) {
  switch (action.type) {
     case at.PROJECT_RECENTS:
       state.loading['recent'] = true;
       state.item = {};
       return {
         ...state,
       }
     case at.PROJECT_RECENTS_SUCCESS:
       state.loading['recent'] = false;
       if (action.result.ecode === 0) {
         state.recents = action.result.data;
       }
       return {
         ecode: 0,
         ...state,
       }
     case at.PROJECT_RECENTS_FAIL:
       state.loading['recent'] = false;
       return {
         ecode: action.result.ecode,
         ...state,
       }

     case at.PROJECT_SHOW:
       state.loading['show'] = true;
       state.item = {};
       return {
         ...state,
       }
     case at.PROJECT_SHOW_SUCCESS:
       state.loading['show'] = false;
       if (action.result.ecode === 0) {
         state.item = action.result.data;
         state.options = action.result.options;
       }
       return {
         ecode: 0,
         ...state,
       }
     case at.PROJECT_SHOW_FAIL:
       state.loading['show'] = false;
       return {
         ecode: action.result.ecode,
         ...state,
       }

     default:
       return state;
  }
}
