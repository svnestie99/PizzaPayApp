export const guestsReducer = (state, action) => {
  switch (action.type) {
    case "GET_GUESTS":
      return { ...state, guests: action.guest };
    case "GET_GUESTS_DID_PAID":
      return {
        guests: state.guests.map((person) => {
          return person;
        })
      };
    default:
      return state;
  }
};
export const guestsAC = (guest) => {
  return { type: "GET_GUESTS", guest };
};
export const guestsDidPaidAC = () => {
  return { type: "GET_GUESTS_DID_PAID" };
};
