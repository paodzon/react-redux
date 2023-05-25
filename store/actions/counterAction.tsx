import * as types from "../types";

export const increment:CallableFunction = () => async (dispatch: CallableFunction) => {
  dispatch({ type: types.INCREMENT });
}
export const decrement:CallableFunction = () => async (dispatch: CallableFunction) =>
  dispatch({ type: types.DECREMENT });
