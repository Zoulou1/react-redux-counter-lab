import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../store/actions/counterActions";
import type { AppDispatch, RootState } from "../store/store";
import styles from "./Counter.module.css";

function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <section className={styles.counterContainer} aria-label="Counter controls">
      <p className={styles.label}>CURRENT COUNT</p>
      <h2 className={styles.value} aria-live="polite">{count}</h2>
      <div className={styles.buttons}>
        <button
          className={styles.changeButton}
          type="button"
          aria-label="Decrement"
          onClick={() => dispatch(decrement())}
        >
          −
        </button>
        <button
          className={styles.changeButton}
          type="button"
          aria-label="Increment"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <button
        className={styles.resetButton}
        type="button"
        onClick={() => dispatch(reset())}
      >
        Reset to zero
      </button>
    </section>
  );
}

export default Counter;
