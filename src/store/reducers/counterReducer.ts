import type { Action } from "redux";
import { DECREMENT, INCREMENT, RESET } from "../actions/counterActions";

interface CounterState {
  value: number;
}

const initialState: CounterState = { value: 0 };

export function counterReducer(
  state: CounterState = initialState,
  action: Action,
): CounterState {
  switch (action.type) {
    case INCREMENT:
      return { value: state.value + 1 };
    case DECREMENT:
      return { value: state.value - 1 };
    case RESET:
      return { value: 0 };
    default:
      return state;
  }
}
