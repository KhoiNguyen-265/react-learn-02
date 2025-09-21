import React from "react";
import styles from "./Counter.module.scss";

function Counter() {
    const [value, setValue] = React.useState(0);

    return (
        <>
            <div className={styles.card}>
                <div className={styles.card__content}>
                    <div
                        style={{
                            color:
                                value > 0
                                    ? "green"
                                    : value < 0
                                    ? "red"
                                    : "gray",
                        }}
                    >
                        <p className={styles.card__value}>{value}</p>
                    </div>
                    <p className={styles.card__desc}>
                        {value > 0 ? "Dương" : value < 0 ? "Âm" : "Bằng không"}
                    </p>
                </div>
                <div className={styles.btnWrapper}>
                    <button
                        className={styles.btn}
                        onClick={() => setValue(value + 1)}
                    >
                        Increase
                    </button>
                    <button
                        className={styles.btn}
                        onClick={() => setValue(value - 1)}
                    >
                        Decrease
                    </button>
                    <button className={styles.btn} onClick={() => setValue(0)}>
                        Reset
                    </button>
                </div>
            </div>
        </>
    );
}

export default Counter;
