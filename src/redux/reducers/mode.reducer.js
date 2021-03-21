
import { HIDE_MODE, SHOW_MODE } from '../actions/mode.action';

const initialState = {
  show: true
};

const modeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODE: {
      return {
        ...state,
        show: true
      };
    }
    case HIDE_MODE: {
      return {
        ...state,
        show: false
      };
    }
    default:
      return state;
  }
}

export default modeReducer;