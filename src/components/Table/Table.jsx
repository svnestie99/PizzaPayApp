import styles from "./Table.module.css";

export const Table = (props) => {
  let tableElement = props.guests.map((person, id) => {
    return (
      <tr key={`id${id}`}>
        <td className={person.isVegan ? styles.vegan : null}>{person.name}</td>
        <td className={styles.price}>{person.shareToPay} BYN</td>
        <td>
          {person.paid ? (
            <button disabled={true}>PAID</button>
          ) : (
            <button
              className={styles.activeButton}
              onClick={() => {
                props.getDidPaidGuestsThunk(
                  (props.moneyCollected += +person.shareToPay),
                  (props.moneyToCollect -= +person.shareToPay),
                  (person.paid = true),
                  (person.shareToPay -= person.shareToPay)
                );
              }}
            >
              PAY
            </button>
          )}
        </td>
      </tr>
    );
  });
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td className={styles.top}>Name</td>
            <td className={styles.top}>Share to pay</td>
            <td className={styles.top}>Pay</td>
          </tr>

          {tableElement}

          <tr className={styles.total}>
            <td>Total order</td>
            <td>{props.totalCost.toFixed(1)} BYN</td>
          </tr>
          <tr className={styles.toCollect}>
            <td>Money to collect</td>
            <td>{Math.abs(props.moneyToCollect.toFixed(1))} BYN</td>
          </tr>
          <tr className={styles.collected}>
            <td>Money collected</td>
            <td>{props.moneyCollected.toFixed(1)} BYN</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
