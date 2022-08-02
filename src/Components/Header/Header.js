import styles from "./Header.module.css";
import { Link } from 'react-router-dom';
function Header() {

    return (
        <header className={styles['main-header-box']}>
            <nav className={styles["main-header-navigation"]}>
                <ul className={styles["main-header-menu"]}>
                    <li className={`${styles["header-menu"]} ${styles['home-page-link']}`}>
                        <Link className={styles["header-links"]} to="/">
                            Fishing Adventures
                        </Link>
                    </li>
                </ul>
                <ul className={styles["main-header-menu"]}>
                    <li className={`${styles["header-menu"]} ${styles['posts']}`}>
                        <Link className={styles["header-links"]} to="/all-posts">
                            All posts
                        </Link>
                    </li>
                    <li className={`${styles["header-menu"]} ${styles['posts']}`}>
                        <Link className={styles["header-links"]} to="/my-posts">
                            my posts
                        </Link>
                    </li>
                    <li className={`${styles["header-menu"]} ${styles['home']}`}>
                        <Link className={styles["header-links"]} to="/create-trip">
                            create
                        </Link>
                    </li>
                    <li className={`${styles["header-menu"]} ${styles['home']}`}>
                        <Link className={styles["header-links"]} to="/login">
                            login
                        </Link>
                    </li >
                    <li className={`${styles["header-menu"]} ${styles['register']}`} >
                        <Link className={styles["header-links"]} to="/register" >
                            register
                        </Link>
                    </li >
                    <li className={`${styles["header-menu"]} ${styles['logout']}`} >
                        <Link className={styles["header-links"]} to="/logout" >
                            logout
                        </Link>
                    </li >
                </ul >
            </nav >
        </header >
    )
}

export default Header;