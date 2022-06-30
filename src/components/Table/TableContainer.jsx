import { guestsDidPaidAC } from "../../Store/guests-reducer";
import {
  getCollectedMoneyAC,
  getMoneyToCollectAC
} from "../../Store/table-reducer";
import { Table } from "./Table";

export const TableContainerComponent = (props) => {
  function getDidPaidGuestsThunk(count, count2) {
    props.store.dispatch(guestsDidPaidAC());
    props.store.dispatch(getCollectedMoneyAC(count));
    props.store.dispatch(getMoneyToCollectAC(count2));
  }
  return (
    <div>
      {props.store._state.guests.length !== 0 ? (
        <Table
          getDidPaidGuestsThunk={getDidPaidGuestsThunk}
          guests={props.store._state.guests.guests}
          totalCost={props.store._state.party.totalPizzaCost}
          moneyToCollect={props.store._state.party.moneyToCollect}
          moneyCollected={props.store._state.party.moneyCollected}
          vegans={props.store._state.party.vegans}
        />
      ) : null}
    </div>
  );
};
