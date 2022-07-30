import style from './Register.module.css';
function Register() {

    return (
        <section className={style["registration"]}>
            <h1 className={style["registration-title"]}>Become a part of us!</h1>
            <form className={style["registration-form"]}>
                <div className={style["register-form-box"]}>
                    <label htmlFor="firstName" className={`${style["register-label"]} ${style["required"]}`}>
                        First name:
                    </label>
                    <input type="text" name="first-name" id="firstName" />
                </div>
                <div className={style["register-form-box"]}>
                    <label htmlFor="lastName" className={`${style["register-label"]} ${style["required"]}`}>
                        Last name:
                    </label>
                    <input type="text" name="last-name" id="lastName" />
                </div>
                <div className={style["register-form-box"]}>
                    <label htmlFor="email" className={`${style["register-label"]} ${style["required"]}`}>
                        Email:
                    </label>
                    <input type="email" name="email" id="email" />
                </div>
                <div className={style["register-form-box"]}>
                    <label htmlFor="password" className={`${style["register-label"]} ${style["required"]}`}>
                        Password:
                    </label>
                    <input type="password" name="password" id="password" />
                </div>
                <div className={style["register-form-box"]}>
                    <label htmlFor="repeatPassword" className={`${style["register-label"]} ${style["required"]}`}>
                        Repeat password:
                    </label>
                    <input type="password" name="repeat-password" id="repeatPassword" />
                </div>
                <div className={`${style["register-form-box"]} ${style["submit"]}`}>
                    <input
                        type="submit"
                        defaultValue="Registration"
                        className={style["submit-button"]}
                    />
                </div>
            </form>
        </section>
    )
};

export default Register;
