import * as types from "../types";
import INITIAL_STATE from "./initialState";

const CounterReducer = (state = INITIAL_STATE.counter, action: any) => {
  switch (action.type) {
    case types.INCREMENT:
      return { ...state, value: state.value + 1 };
    case types.DECREMENT:
      if (state.value > 0) return { ...state, value: state.value - 1 };
    default:
      return state;
  }
};

export default CounterReducer;
