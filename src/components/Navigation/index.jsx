import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router";
import styles from "./Navigation.module.scss";

const navItems = [
    { to: "/", title: "Home" },
    { to: "/counter", title: "Counter App" },
    { to: "/todo", title: "Todo App" },
    { to: "/profile", title: "Profile App" },
    { to: "/products", title: "Products App" },
    { to: "/comments", title: "Comments App" },
    { to: "/weather", title: "Weather App" },
    { to: "/buttons", title: "Buttons" },
];

function Navigation() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <ul className={styles.navbar__list}>
                    {navItems.map((item, index) => (
                        <li className={styles.navbar__item} key={index}>
                            <NavLink
                                className={({ isActive }) =>
                                    `${styles.navbar__link} ${
                                        isActive ? styles.active : ""
                                    }`
                                }
                                to={item.to}
                            >
                                {item.title}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
}

export default Navigation;
