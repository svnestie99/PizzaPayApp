import { Pizza } from "./Pizza";

export const PizzaContainerComponent = (props) => {
  return (
    <div>
      {props.store._state.guests.length !== 0 ? (
        <Pizza
          pizzaEaters={props.store._state.party.pizzaEaters}
          participants={props.store._state.party.participants}
          typeOfPizza={props.store._state.party.typeOfPizza}
          vegans={props.store._state.party.vegans}
        />
      ) : null}
    </div>
  );
};
