import React from "react";

import styles from "./Profile.module.scss";

function Profile() {
    const [users, setUser] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/1")
            .then((res) => res.json())
            .then((users) => setUser(users))
            .finally(() => setLoading(false));
    }, []);

    return (
        <>
            <div className={styles.card}>
                <h1 className={styles.card__heading}>Profile Card</h1>
                <ul className={styles.card__list}>
                    {loading ? (
                        <li className={styles.card__item}>Loading...</li>
                    ) : (
                        <>
                            <li className={styles.card__item}>
                                <span className={styles.card__title}>
                                    Name:
                                </span>{" "}
                                {users.name}
                            </li>
                            <li className={styles.card__item}>
                                <span className={styles.card__title}>
                                    Username:
                                </span>{" "}
                                {users.username}
                            </li>
                            <li className={styles.card__item}>
                                <span className={styles.card__title}>
                                    Email:
                                </span>{" "}
                                {users.email}
                            </li>
                            <li className={styles.card__item}>
                                <span className={styles.card__title}>
                                    Phone:
                                </span>{" "}
                                {users.phone}
                            </li>
                            <li className={styles.card__item}>
                                <span className={styles.card__title}>
                                    Website:
                                </span>{" "}
                                {users.website}
                            </li>
                            <li className={styles.card__item}>
                                <span className={styles.card__title}>
                                    Address:
                                </span>{" "}
                                {users.address.street} - {users.address.city}
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </>
    );
}

export default Profile;
