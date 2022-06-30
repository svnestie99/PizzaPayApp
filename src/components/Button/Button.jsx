import styles from "./Button.module.css";

export const Button = (props) => {
  return (
    <div>
      <button
        onClick={() => {
          props.getParticipants();
        }}
        id="load-btn"
        className={styles.loadBtn}
      >
        Load party
      </button>
      {props.isFetching.isFetching ? (
        <div className={styles.status}>Waiting...</div>
      ) : null}
    </div>
  );
};
