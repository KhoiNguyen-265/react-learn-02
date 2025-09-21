import React from "react";

import styles from "./Todo.module.scss";

let uniqId = 0;

function Todo() {
    const [inputValue, setInputValue] = React.useState("");
    const [todos, setTodos] = React.useState([]);

    // Lấy dữ liệu từ Input
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    // Xử lý submit (Add task)
    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim()) {
            setTodos([
                ...todos,
                {
                    id: ++uniqId,
                    text: inputValue,
                    completed: false,
                },
            ]);

            setInputValue("");
        }
    };

    // Xóa task
    function deleteTask(id) {
        setTodos(todos.filter((task) => task.id !== id));
    }

    // Complete task
    function completeTask(id) {
        setTodos(
            todos.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    }

    // Kiểm tra số nhiều để thêm (s)
    function checkPlural(item) {
        return item > 1 ? `${item} tasks` : `${item} task`;
    }

    const total = todos.length;
    const done = todos.filter((task) => task.completed).length;
    const remaining = total - done;

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h1 className={styles.heading}>Todo App</h1>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <input
                        placeholder="Nhập task mới..."
                        value={inputValue}
                        onChange={handleInputChange}
                    />
                    <button className={styles.btn}>Thêm</button>
                </form>

                {!total ? (
                    <p className={styles.desc}>
                        Chưa có task nào. Hãy thêm task đầu tiên!
                    </p>
                ) : (
                    <>
                        <ul className={styles.tasksList}>
                            {todos.map((task) => (
                                <li className={styles.tasksItem} key={task.id}>
                                    <input
                                        className={styles.checkbox}
                                        type="checkbox"
                                        checked={task.completed}
                                        onChange={() => completeTask(task.id)}
                                    />
                                    <p
                                        style={{
                                            textDecoration: task.completed
                                                ? "line-through"
                                                : "none",
                                        }}
                                    >
                                        {task.text}
                                    </p>
                                    <button
                                        className={`${styles.btn} ${styles.btnDelete}`}
                                        onClick={() => deleteTask(task.id)}
                                    >
                                        Xóa
                                    </button>
                                </li>
                            ))}
                        </ul>

                        <div>
                            <p className={styles.desc}>
                                Tổng: {checkPlural(total)}, Hoàn thành:{" "}
                                {checkPlural(done)}, Còn lại:{" "}
                                {checkPlural(remaining)}{" "}
                            </p>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default Todo;
