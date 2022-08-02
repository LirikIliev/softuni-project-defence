import { useState, useEffect } from 'react';

import { loginUser } from '../../service/userService';

import style from './Login.module.css';

function Login() {
    const [value, setValue] = useState(
        {
            email: '',
            password: '',
        }
    );
    const [invalid, setInvalid] = useState(
        {
            email: false,
            password: false,
        }
    );

    const isValid = Object.values(invalid)
        .some(x => x !== true);

    function onChangeLoginValue(e) {
        setValue(state => ({ ...state, [e.target.name]: e.target.value }))
    };

    function validatorFunction(e) {
        if (e.target.name === 'email') {
            let regexp = /^\w+@\w+\.[a-zA-z]+$/g;
            let match = e.target.value.match(regexp);
            if (match) {
                setInvalid(state => ({ ...state, [e.target.name]: true }));
            } else {
                setInvalid(state => ({ ...state, [e.target.name]: false }));
            };
        } else if (e.target.name === 'password') {
            if (e.target.value) {
                setInvalid(state => ({ ...state, [e.target.name]: true }));
            } else {
                setInvalid(state => ({ ...state, [e.target.name]: false }));
            };
        };
    };

    function onSubmitLogin(e) {
        e.preventDefault();
        try {
            loginUser(value)
                .then(result => {
                    console.log(result);
                })
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <section className={style["login"]}>
            <h1 className={style["login-title"]}>Hello again!!!</h1>
            <form className={style["login-form"]} onSubmit={onSubmitLogin}>
                <div className={style["login-form-box"]}>
                    <label htmlFor="email" className={`${style["login-label"]} ${style["required"]}`}>
                        Email:
                    </label>
                    <input type="email" name="email" id="email" onChange={onChangeLoginValue} onBlur={validatorFunction} />
                </div>
                <div className={style["login-form-box"]}>
                    <label htmlFor="password" className={`${style["login-label"]} ${style["required"]}`}>
                        Password:
                    </label>
                    <input type="password" name="password" id="password" onChange={onChangeLoginValue} onBlur={validatorFunction} />
                </div>
                <div className={`${style["login-form-box"]} ${style["submit"]}`}>
                    {isValid
                        ? <input
                            type="submit"
                            defaultValue="Registration"
                            className={style["submit-button"]}
                            disabled />
                        : <input
                            type="submit"
                            defaultValue="Registration"
                            className={style["submit-button"]} />
                    }
                </div>
            </form>
        </section>
    )
};

export default Login;