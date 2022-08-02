import styles from "./Header.module.css";
import { NavLink } from 'react-router-dom';

const activeLinksStyles = {
    "box-shadow": "5px 2px 9px -3px #00d9ff",
};

function Header() {

    return (
        <header className={styles['main-header-box']}>
            <nav className={styles["main-header-navigation"]}>
                <ul className={styles["main-header-menu"]}>
                    <li className={`${styles["header-menu"]} ${styles['home-page-link']}`}>
                        <NavLink className={styles["header-links"]}
                            to="/">
                            Fishing Adventures
                        </NavLink>
                    </li>
                </ul>
                <ul className={styles["main-header-menu"]}>
                    <li className={`${styles["header-menu"]} ${styles['posts']}`}>
                        <NavLink className={styles["header-links"]} style={(isActive) => {

                        }} to="/all-posts">
                            All posts
                        </NavLink>
                    </li>
                    <li className={`${styles["header-menu"]} ${styles['posts']}`}>
                        <NavLink className={styles["header-links"]} style={(isActive) => {

                        }} to="/my-posts">
                            my posts
                        </NavLink>
                    </li>
                    <li className={`${styles["header-menu"]} ${styles['home']}`}>
                        <NavLink className={styles["header-links"]} style={(isActive) => {

                        }} to="/create-trip">
                            create
                        </NavLink>
                    </li>
                    <li className={`${styles["header-menu"]} ${styles['home']}`}>
                        <NavLink className={styles["header-links"]} style={(isActive) => {

                        }} to="/login">
                            login
                        </NavLink>
                    </li >
                    <li className={`${styles["header-menu"]} ${styles['register']}`} >
                        <NavLink className={styles["header-links"]} style={(isActive) => {

                        }} to="/register" >
                            register
                        </NavLink>
                    </li >
                    <li className={`${styles["header-menu"]} ${styles['logout']}`} >
                        <NavLink className={styles["header-links"]} style={(isActive) => {

                        }} to="/logout" >
                            logout
                        </NavLink>
                    </li >
                </ul >
            </nav >
        </header >
    )
}

export default Header;