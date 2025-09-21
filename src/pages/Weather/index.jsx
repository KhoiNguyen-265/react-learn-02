import React from "react";

import styles from "./Weather.module.scss";

function Weather() {
    const [city, setCity] = React.useState("");

    const [data, setData] = React.useState({
        hanoi: { city: "Hà Nội", temp: 28, weather: "Nắng", humidity: 65 },
        hcm: { city: "Hồ Chí Minh", temp: 32, weather: "Có mây", humidity: 78 },
        danang: { city: "Đà Nẵng", temp: 30, weather: "Mưa nhẹ", humidity: 82 },
    });

    function handleRefresh() {
        if (!city) return;

        setData((prev) => {
            const newData = { ...prev };
            newData[city] = {
                ...newData[city],
                temp: newData[city].temp + Math.floor(Math.random() * 11 - 5),
                humidity:
                    newData[city].humidity + Math.floor(Math.random() * 11 - 5),
            };
            return newData;
        });
    }

    return (
        <div className={styles.card}>
            <h1 className={styles.card__title}>Weather App</h1>
            <div className={styles.card__dropdown}>
                <p>Chọn thành phố:</p>
                <select
                    name="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                >
                    <option value="">Thành phố</option>
                    <option value="hanoi">Hà Nội</option>
                    <option value="hcm">Hồ Chí Minh</option>
                    <option value="danang">Đà Nẵng</option>
                </select>
            </div>
            {city && (
                <div className={styles.card__display}>
                    <div className={styles.card__info}>
                        <h2 className={styles.card__name}>{data[city].city}</h2>
                        <p className={styles.card__temp}>{data[city].temp}°C</p>
                        <p className={styles.card__weather}>
                            {data[city].weather}{" "}
                            {data[city].weather === "Nắng"
                                ? "🌤"
                                : data[city].weather === "Có mây"
                                ? "☁"
                                : "🌧"}
                        </p>
                        <p className={styles.card__humidity}>
                            {data[city].humidity}%
                        </p>
                    </div>
                    <button
                        className={styles.card__btn}
                        onClick={handleRefresh}
                    >
                        Làm mới
                    </button>
                </div>
            )}
        </div>
    );
}

export default Weather;
