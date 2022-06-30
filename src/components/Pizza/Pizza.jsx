import styles from "./Pizza.module.css";

export const Pizza = (props) => {
  let pizzaElement;
  let deg = 0;
  switch (props.pizzaEaters.length) {
    case 4:
      pizzaElement = props.pizzaEaters.map((item, id) => {
        return (
          <div
            key={id}
            className={styles.triangle}
            style={{ transform: `rotate(${(deg += 90)}deg)` }}
          >
            <div className={styles.circle}></div>
          </div>
        );
      });
      break;
    case 6:
      pizzaElement = props.pizzaEaters.map((item, id) => {
        return (
          <div
            key={id}
            className={styles.triangle}
            style={{ transform: `rotate(${(deg += 60)}deg)` }}
          >
            <div className={styles.circle}></div>
          </div>
        );
      });
      break;
    case 8:
      pizzaElement = props.pizzaEaters.map((item, id) => {
        return (
          <div
            key={id}
            className={styles.triangle}
            style={{ transform: `rotate(${(deg += 45)}deg)` }}
          >
            <div className={styles.circle}></div>
          </div>
        );
      });
      break;
    case 10:
      pizzaElement = props.pizzaEaters.map((item, id) => {
        return (
          <div
            key={id}
            className={styles.triangle}
            style={{ transform: `rotate(${(deg += 36)}deg)` }}
          >
            <div className={styles.circle}></div>
          </div>
        );
      });
      break;
    case 12:
      pizzaElement = props.pizzaEaters.map((item, id) => {
        return (
          <div
            key={id}
            className={styles.triangle}
            style={{ transform: `rotate(${(deg += 30)}deg)` }}
          >
            <div className={styles.circle}></div>
          </div>
        );
      });
      break;
    case 14:
      pizzaElement = props.pizzaEaters.map((item, id) => {
        return (
          <div
            key={id}
            className={styles.triangle}
            style={{ transform: `rotate(${(deg += 25.7)}deg)` }}
          >
            <div className={styles.circle}></div>
          </div>
        );
      });
      break;
    default:
      break;
  }

  return (
    <div>
      <div className={styles.pizzaContainer}>
        <div className={styles.pizza}>{pizzaElement}</div>
      </div>

      <div className={styles.status}>
        <div>Participants: {props.participants.length}</div>
        <div>Pizza eaters: {props.pizzaEaters.length}</div>
        <div>Pizza: {props.typeOfPizza}</div>
        <div>Vegans: {props.vegans.length}</div>
      </div>
    </div>
  );
};
