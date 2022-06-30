import { partyAPI } from "../../api/api";
import { toggleIsFetchingAC } from "../../Store/button-reducer";
import { guestsAC } from "../../Store/guests-reducer";
import {
  getCollectedMoneyAC,
  getDietsAC,
  getMoneyToCollectAC,
  getParticipantsAC,
  getPizzaEatersAC,
  getVegansAC,
  setCostOfPizzaAC,
  setTypeOfPizzaAC
} from "../../Store/table-reducer";
import { Button } from "./Button";

export const ButtonContainerComponent = (props) => {
  function selectPizza() {
    return Math.random() * 100 > 50 ? "cheese" : "vegan";
  }

  function getParticipantsThunk() {
    props.store.dispatch(toggleIsFetchingAC(true));

    partyAPI
      .getQuests()
      .then((data) => {
        const pizzaEaters = [];
        data.party.filter((person) => {
          return person.eatsPizza ? pizzaEaters.push(person) : null;
        });

        props.store.dispatch(getParticipantsAC(data.party));
        props.store.dispatch(getPizzaEatersAC(pizzaEaters));
      })
      .then(() =>
        partyAPI.getDiets().then((data) => {
          const diet = data.diet.map((person) => {
            return person;
          });
          props.store.dispatch(getDietsAC(diet));

          props.store.dispatch(
            getVegansAC(data.diet.filter((person) => person.isVegan === true))
          );

          (props.store._state.party.vegans.length /
            props.store._state.party.pizzaEaters.length) *
            100 >
          51
            ? props.store.dispatch(setTypeOfPizzaAC(selectPizza()))
            : props.store.dispatch(setTypeOfPizzaAC("meat"));
        })
      )
      .then(() => {
        partyAPI.orderPizzaAndGetCurrency().then((data) => {
          props.store.dispatch(toggleIsFetchingAC(false));
          let totalPizzaCost = parseFloat(data[0].price.split(" ")[0]);
          let currency = data[0].price.split(" ")[1];

          let BYNcurrency = 0;
          let USDcurrency = data[1].USD;
          let EURcurrency = data[1].EUR;
          switch (currency) {
            case "BYN":
              BYNcurrency = totalPizzaCost.toFixed(1);
              props.store.dispatch(setCostOfPizzaAC(+BYNcurrency));
              props.store.dispatch(getMoneyToCollectAC(+BYNcurrency));
              break;
            case "USD":
              BYNcurrency = (totalPizzaCost / USDcurrency).toFixed(1);
              props.store.dispatch(setCostOfPizzaAC(+BYNcurrency));
              props.store.dispatch(getMoneyToCollectAC(+BYNcurrency));
              break;
            case "EUR":
              BYNcurrency = (totalPizzaCost / EURcurrency).toFixed(1);
              props.store.dispatch(setCostOfPizzaAC(+BYNcurrency));
              props.store.dispatch(getMoneyToCollectAC(+BYNcurrency));
              break;
            default:
              BYNcurrency = 0;
              break;
          }
          let shareToPay = (
            props.store._state.party.totalPizzaCost /
            props.store._state.party.pizzaEaters.length
          ).toFixed(2);

          props.store.dispatch(
            guestsAC(
              props.store._state.party.diets.map((person) => {
                return {
                  name: person.name,
                  shareToPay,
                  isVegan: person.isVegan,
                  paid: false
                };
              })
            )
          );
          props.store.dispatch(getCollectedMoneyAC(0));
        });
      });
  }

  return (
    <Button
      getParticipants={getParticipantsThunk}
      isFetching={props.store._state.isFetching}
    />
  );
};
