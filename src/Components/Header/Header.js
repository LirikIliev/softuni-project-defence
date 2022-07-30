import styles from "./Header.module.css";
function Header() {

    return (
        <header className={styles['main-header-box']}>
            <nav className={styles["main-header-navigation"]}>
                <ul className={styles["main-header-menu"]}>
                    <li className={`${styles["header-menu"]} ${styles['home-page-link']}`}>
                        <a className={styles["header-links"]} href="/">
                            Fishing Adventures
                        </a>
                    </li>
                </ul>
                <ul className={styles["main-header-menu"]}>
                    <li className={`${styles["header-menu"]} ${styles['posts']}`}>
                        <a className={styles["header-links"]} href="/all-posts">
                            All posts
                        </a>
                    </li>
                    <li className={`${styles["header-menu"]} ${styles['posts']}`}>
                        <a className={styles["header-links"]} href="/my-posts">
                            my posts
                        </a>
                    </li>
                    <li className={`${styles["header-menu"]} ${styles['home']}`}>
                        <a className={styles["header-links"]} href="/create">
                            create
                        </a>
                    </li>
                    <li className={`${styles["header-menu"]} ${styles['home']}`}>
                        <a className={styles["header-links"]} href="/login">
                            login
                        </a>
                    </li >
                    <li className={`${styles["header-menu"]} ${styles['register']}`} >
                        <a className={styles["header-links"]} href="/register" >
                            register
                        </a >
                    </li >
                    <li className={`${styles["header-menu"]} ${styles['logout']}`} >
                        <a className={styles["header-links"]} href="/logout" >
                            logout
                        </a >
                    </li >
                </ul >
            </nav >
        </header >
    )
}

export default Header;