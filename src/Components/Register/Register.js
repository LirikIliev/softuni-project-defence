import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { registerUser } from '../../service/userService';
import { AuthContext } from '../context/AurhContext';

import style from './Register.module.css';

function Register() {
    let Navigate = useNavigate()

    const [value, setValue] = useState(
        {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            repeatPassword: '',
        }
    );

    const [validate, setValidate] = useState(
        {
            'firstName': false,
            'lastName': false,
            'email': false,
            'password': false,
            'repeatPassword': false,
        }
    );

    const isValid = Object.values(validate)
        .some(x => x !== true);

    function validatorFunction(e) {

        if (e.target.name === 'firstName') {
            if (e.target.value.length >= 3) {
                setValidate(state => ({ ...state, [e.target.name]: true }));
            } else {
                setValidate(state => ({ ...state, [e.target.name]: false }));
            }
        } else if (e.target.name === 'lastName') {
            if (e.target.value.length >= 3) {
                setValidate(state => ({ ...state, [e.target.name]: true }));
            } else {
                setValidate(state => ({ ...state, [e.target.name]: false }));
            }
        } else if (e.target.name === 'email') {
            let regexp = /^\w+@\w+\.[a-zA-z]+$/g;
            let match = e.target.value.match(regexp);
            if (match) {
                setValidate(state => ({ ...state, [e.target.name]: true }));
            } else {
                setValidate(state => ({ ...state, [e.target.name]: false }));
            }
        } else if (e.target.name === 'password') {
            if (e.target.value.length >= 3) {
                setValidate(state => ({ ...state, [e.target.name]: true }));
            } else {
                setValidate(state => ({ ...state, [e.target.name]: false }));
            }
        } else if (e.target.name === 'repeatPassword') {
            if (e.target.value === value.password && e.target.value !== '') {
                setValidate(state => ({ ...state, [e.target.name]: true }));
            } else {
                setValidate(state => ({ ...state, [e.target.name]: false }));
            }
        };
    };

    async function onSubmitRegister(e) {
        e.preventDefault();
        let newUser = {
            firstName: value.firstName,
            lastName: value.lastName,
            email: value.email,
            password: value.password,
        };

        try {
            let userData = await registerUser(value);
            AuthContext(userData);
            Navigate("/")
        } catch (err) {
            console.log(err.message);
        }
    };

    function onChangeValue(e) {
        setValue(state => ({ ...state, [e.target.name]: e.target.value }))
    };

    return (
        <section className={style["registration"]}>
            <h1 className={style["registration-title"]}>Become a part of us!</h1>
            <form className={style["registration-form"]} onSubmit={onSubmitRegister}>
                <div className={style["register-form-box"]}>
                    <label
                        htmlFor="firstName"
                        className={`${style["register-label"]} ${style["required"]}`}>
                        First name:
                    </label>
                    <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        onChange={onChangeValue}
                        onBlur={(e) => validatorFunction(e)}
                        value={value.firstName} />
                </div>
                <div className={style["register-form-box"]}>
                    <label
                        htmlFor="lastName"
                        className={`${style["register-label"]} ${style["required"]}`}>
                        Last name:
                    </label>
                    <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        onChange={onChangeValue}
                        onBlur={(e) => validatorFunction(e)}
                        value={value.lastName} />
                </div>
                <div className={style["register-form-box"]}>
                    <label
                        htmlFor="email"
                        className={`${style["register-label"]} ${style["required"]}`}>
                        Email:
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        onChange={onChangeValue}
                        onBlur={(e) => validatorFunction(e)}
                        value={value.email} />
                </div>
                <div className={style["register-form-box"]}>
                    <label
                        htmlFor="password"
                        className={`${style["register-label"]} ${style["required"]}`}>
                        Password:
                    </label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        onChange={onChangeValue}
                        onBlur={(e) => validatorFunction(e)}
                        value={value.password} />
                </div>
                <div className={style["register-form-box"]}>
                    <label
                        htmlFor="repeatPassword"
                        className={`${style["register-label"]} ${style["required"]}`}>
                        Repeat password:
                    </label>
                    <input
                        type="password"
                        name="repeatPassword"
                        id="repeatPassword"
                        onChange={onChangeValue}
                        onBlur={(e) => validatorFunction(e)}
                        value={value.repeatPassword} />
                </div>
                <div className={`${style["register-form-box"]} ${style["submit"]}`}>
                    {
                        isValid
                            ? <input
                                type="submit"
                                defaultValue="Registration"
                                className={style["submit-button"]}
                                onChange={onChangeValue}
                                disabled
                            />
                            : <input
                                type="submit"
                                defaultValue="Registration"
                                className={style["submit-button"]}
                                onChange={onChangeValue}
                            />
                    }
                </div>
            </form>
        </section>
    );
};

export default Register;