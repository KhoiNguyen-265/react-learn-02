import clsx from "clsx";

import styles from "./Button.module.scss";

function Button({
    primary = false,
    rounded = false,
    bordered = false,
    children,
    href,
    size = "medium",
    className,
    disable = false,
    loading = false,
    onClick,
    ...passProps
}) {
    const Component = href ? "a" : "button";

    const handleClick = (e) => {
        const isDisable = loading || disable;

        if (isDisable) {
            e.preventDefault();
            return;
        }
        if (typeof onClick === "function") onClick(e);
    };

    return (
        <>
            <Component
                {...passProps}
                href={href}
                className={clsx(styles.btn, className, styles[size], {
                    [styles.primary]: primary,
                    [styles.rounded]: rounded,
                    [styles.bordered]: bordered,
                    [styles.disable]: disable,
                    [styles.loading]: loading,
                })}
                onClick={handleClick}
            >
                <span className={styles.btn__content}>{children}</span>
                {loading && <span className={styles.spinner}></span>}
            </Component>
        </>
    );
}

export default Button;
