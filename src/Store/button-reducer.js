export const buttonReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_IS_FETCHING":
      return { ...state, isFetching: action.isFetching };
    default:
      return state;
  }
};
export const toggleIsFetchingAC = (isFetching) => {
  return { type: "TOGGLE_IS_FETCHING", isFetching };
};
