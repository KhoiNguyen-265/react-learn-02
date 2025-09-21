import React from "react";

import styles from "./Products.module.scss";

function Products() {
    const [blogs, setBlogs] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [modal, setModal] = React.useState(null);

    React.useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts?_limit=12")
            .then((res) => res.json())
            .then((blogs) => setBlogs(blogs))
            .finally(() => setLoading(false));
    }, []);

    return (
        <>
            {/* Render giao diện */}
            <div className={styles.container}>
                <h1 className={styles.products__title}>Product List</h1>
                <ul className={styles.blogList}>
                    {loading && <li>Loading...</li>}
                    {blogs.map((blog) => (
                        <li className={styles.blogItems} key={blog.id}>
                            <ul>
                                <li>
                                    <span className={styles.bold}>ID:</span>{" "}
                                    {blog.id}
                                </li>
                                <li>
                                    <span className={styles.bold}>Title:</span>{" "}
                                    {blog.title[0].toUpperCase() +
                                        blog.title.slice(1)}
                                </li>
                                <li>
                                    <span className={styles.bold}>Body:</span>{" "}
                                    {blog.body.length > 100
                                        ? blog.body.slice(0, 100).concat("...")
                                        : blog.body}
                                </li>
                            </ul>
                            <button
                                className={styles.btn}
                                onClick={() => setModal(blog)}
                            >
                                Xem chi tiết
                            </button>
                        </li>
                    ))}
                </ul>
                {modal && (
                    <div
                        className={styles.modal}
                        onClick={(e) => {
                            const modalActive =
                                document.querySelector(".modal");
                            if (e.target === modalActive) {
                                return setModal(null);
                            }
                        }}
                    >
                        <div className={styles.modalContent}>
                            <div
                                className={styles.iconWrapper}
                                onClick={() => setModal(null)}
                            >
                                ❌
                            </div>
                            <p className={styles.modalDesc}>ID: {modal.id}</p>
                            <h1 className={styles.modalTitle}>{modal.title}</h1>
                            <p className={styles.modalDesc}>{modal.body}</p>
                        </div>
                    </div>
                )}{" "}
                {document.addEventListener("keydown", (e) => {
                    if (e.key === "Escape") {
                        return setModal(null);
                    }
                })}
            </div>
        </>
    );
}

export default Products;
