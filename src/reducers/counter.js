import at from '@/constants/ActionTypes';

const INITIAL_STATE = {
  num: 0,
  loading: {}
}

export default function counter (state = INITIAL_STATE, action) {
  switch (action.type) {
    case at.ADD:
      return {
        ...state,
        num: state.num + 1
      }
     case at.MINUS:
       return {
         ...state,
         num: state.num - 1
       }
     case at.TEST:
       state.loading['test'] = true;
       return {
         ...state,
       }
     case at.TEST_SUCCESS:
       state.loading['test'] = false;
       return {
         ...state,
       }
     case at.TEST_FAIL:
       state.loading['test'] = false;
       return {
         ...state,
       }
     default:
       return state
  }
}
