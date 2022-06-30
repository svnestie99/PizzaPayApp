import { store } from "../Store/store";

export const partyAPI = {
  getQuests() {
    return fetch(
      "https://gp-js-test.herokuapp.com/pizza/guests"
    ).then((response) => response.json());
  },
  getDiets() {
    const names = store._state.party.pizzaEaters.map((person) => {
      return encodeURI(person.name);
    });
    return fetch(
      `https://gp-js-test.herokuapp.com/pizza/world-diets-book/${names.join()}`
    ).then((response) => response.json());
  },
  orderPizzaAndGetCurrency() {
    const urls = [
      `https://gp-js-test.herokuapp.com/pizza/order/${store._state.party.typeOfPizza}/${store._state.party.pizzaEaters.length}`,
      "https://gp-js-test.herokuapp.com/pizza/currency"
    ];
    return Promise.all(
      urls.map((url) => fetch(url).then((response) => response.json()))
    );
  }
};
