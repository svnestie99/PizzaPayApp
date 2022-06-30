import { buttonReducer } from "./button-reducer";
import { guestsReducer } from "./guests-reducer";
import { tableReducer } from "./table-reducer";

export const store = {
  _state: {
    isFetching: false,
    party: {
      participants: [],
      pizzaEaters: [],
      vegans: [],
      diets: [],
      typeOfPizza: undefined,
      totalPizzaCost: 0,
      moneyToCollect: 0,
      moneyCollected: 0
    },
    guests: []
  },
  _callSubscriber() {
    console.log("State changed");
  },
  getState() {
    return this._state;
  },
  dispatch(action) {
    this._state.isFetching = buttonReducer(this._state.isFetching, action);
    this._state.party = tableReducer(this._state.party, action);
    this._state.guests = guestsReducer(this._state.guests, action);

    this._callSubscriber(this._state);
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  }
};

window.store = store;
