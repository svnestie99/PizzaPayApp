export const tableReducer = (state, action) => {
  switch (action.type) {
    case "GET_PARTICIPANTS":
      return { ...state, participants: action.participants };
    case "GET_PIZZAEATERS":
      return { ...state, pizzaEaters: action.pizzaEaters };
    case "GET_VEGANS":
      return { ...state, vegans: action.vegans };
    case "GET_DIETS":
      return { ...state, diets: action.diets };
    case "SET_TYPE_OF_PIZZA":
      return { ...state, typeOfPizza: action.pizza };
    case "SET_COST_OF_PIZZA":
      return { ...state, totalPizzaCost: action.cost };
    case "GET_COLLECTED_MONEY":
      return { ...state, moneyCollected: action.count };
    case "GET_MONEY_TO_COLLECT":
      return { ...state, moneyToCollect: action.count };
    default:
      return state;
  }
};
export const getParticipantsAC = (participants) => {
  return { type: "GET_PARTICIPANTS", participants };
};
export const getPizzaEatersAC = (pizzaEaters) => {
  return { type: "GET_PIZZAEATERS", pizzaEaters };
};
export const getVegansAC = (vegans) => {
  return { type: "GET_VEGANS", vegans };
};
export const getDietsAC = (diets) => {
  return { type: "GET_DIETS", diets };
};
export const setTypeOfPizzaAC = (pizza) => {
  return { type: "SET_TYPE_OF_PIZZA", pizza };
};
export const setCostOfPizzaAC = (cost) => {
  return { type: "SET_COST_OF_PIZZA", cost };
};
export const getCollectedMoneyAC = (count) => {
  return { type: "GET_COLLECTED_MONEY", count };
};
export const getMoneyToCollectAC = (count) => {
  return { type: "GET_MONEY_TO_COLLECT", count };
};
