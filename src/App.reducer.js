import Immutable from "immutable";
import Actions from "./actions";
export const initialState = Immutable.fromJS({
  rollCount: 1000,
  diceCount: 3,
  diceMax: 6
});

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.updateDiceCountCompleted:
      return state.set("diceCount", action.payload);
    case Actions.updateDiceMaxCompleted:
      return state.set("diceMax", action.payload);
    case Actions.updateRollCountCompleted:
      return state.set("rollCount", action.payload);
    default:
      return state;
  }
};
export default rootReducer;
