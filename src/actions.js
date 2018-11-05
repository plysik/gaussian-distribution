const Actions = {
  updateRollCount: "UPDATE_ROLL_COUNT",
  updateRollCountCompleted: "UPDATE_ROLL_COUNT_COMPLETED",
  updateDiceCount: "UPDATE_DICE_COUNT",
  updateDiceCountCompleted: "UPDATE_DICE_COUNT_COMPLETED",
  updateDiceMax: "UPDATE_DICE_SIZE_MAX",
  updateDiceMaxCompleted: "UPDATE_DICE_SIZE_MAX_COMPLETED"
};
export default Actions;
export const actionBuilder = (type, payload) => {
  return {
    type,
    payload
  };
};
