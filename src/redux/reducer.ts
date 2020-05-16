import { HELLO_WORLD } from "./actions";
import { State, Reducer } from "../interfaces";

const reducer = (state: State = {}, { type, payload }: Reducer) => {
  switch (type) {
    case HELLO_WORLD:
      return {
        ...state,
        helloWorld: payload,
      };
    default:
      return { ...state };
  }
};

export default reducer;
