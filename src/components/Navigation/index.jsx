import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router";
import styles from "./Navigation.module.scss";

import Home from "../../pages/Home";
import Counter from "../../pages/Counter";
import Todo from "../../pages/Todo";
import Profile from "../../pages/Profile";
import Products from "../../pages/Products";
import Comments from "../../pages/Comments";
import Weather from "../../pages/Weather";
import Buttons from "../../pages/Buttons";

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
        <>
            <Router>
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
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/counter" element={<Counter />}></Route>
                    <Route path="/todo" element={<Todo />}></Route>
                    <Route path="/profile" element={<Profile />}></Route>
                    <Route path="/products" element={<Products />}></Route>
                    <Route path="/comments" element={<Comments />}></Route>
                    <Route path="/weather" element={<Weather />}></Route>
                    <Route path="/buttons" element={<Buttons />}></Route>
                </Routes>
            </Router>
        </>
    );
}

export default Navigation;
