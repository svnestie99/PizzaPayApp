import { ButtonContainerComponent } from "./components/Button/ButtonContainer";
import { PizzaContainerComponent } from "./components/Pizza/PizzaContainer";
import { TableContainerComponent } from "./components/Table/TableContainer";
import "./styles.css";

export default function App(props) {
  return (
    <div className="App">
      <ButtonContainerComponent store={props.store} />
      <TableContainerComponent store={props.store} />
      <PizzaContainerComponent store={props.store} />
    </div>
  );
}
