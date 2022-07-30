import style from './Login.module.css';

function Login() {

    return (
        <section className={style["login"]}>
            <h1 className={style["login-title"]}>Hello again!!!</h1>
            <form className={style["login-form"]}>
                <div className={style["login-form-box"]}>
                    <label htmlFor="email" className={`${style["login-label"]} ${style["required"]}`}>
                        Email:
                    </label>
                    <input type="email" name="email" id="email" />
                </div>
                <div className={style["login-form-box"]}>
                    <label htmlFor="password" className={`${style["login-label"]} ${style["required"]}`}>
                        Password:
                    </label>
                    <input type="password" name="password" id="password" />
                </div>
                <div className={`${style["login-form-box"]} ${style["submit"]}`}>
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

export default Login;