import style from "./Create.module.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { createTrip } from "../../service/tripService";

function Create() {
    const Navigate = useNavigate();

    const [value, setValue] = useState(
        {
            author: '',
            country: '',
            destination: '',
            imageUrl: '',
            description: '',
        }
    );

    const [validatorValue, setValidatorValue] = useState(
        {
            author: false,
            country: false,
            destination: false,
            imageUrl: false,
            description: false,
        }
    );

    const isValid = Object.values(validatorValue).some(x => x == false);

    async function onSubmitData(e) {
        e.preventDefault();
        if (!isValid) {
            try {
                await createTrip(value);
                Navigate('/');
            } catch (err) {
                console.log(err.message);
            }
        }
    }

    function onChangeValue(e) {
        setValue(state => ({ ...state, [e.target.name]: e.target.value }));
    };

    function validator(e) {
        if (e.target.name == 'author') {
            if (e.target.value.length >= 5) {
                setValidatorValue(state => ({ ...state, [e.target.name]: true }))
            } else {
                setValidatorValue(state => ({ ...state, [e.target.name]: false }))
            }
        } else if (e.target.name == 'country') {
            if (e.target.value.length >= 4) {
                setValidatorValue(state => ({ ...state, [e.target.name]: true }))
            } else {
                setValidatorValue(state => ({ ...state, [e.target.name]: false }))
            }
        } else if (e.target.name == 'destination') {
            if (e.target.value.length >= 5) {
                setValidatorValue(state => ({ ...state, [e.target.name]: true }))
            } else {
                setValidatorValue(state => ({ ...state, [e.target.name]: false }))
            }
        } else if (e.target.name == 'imageUrl') {
            let regexp = /^https:\/\/|http:\/\//g;
            let match = e.target.value.match(regexp);
            if (match) {
                setValidatorValue(state => ({ ...state, [e.target.name]: true }))
            } else {
                setValidatorValue(state => ({ ...state, [e.target.name]: false }))
            }
        } else if (e.target.name == 'description') {
            if (e.target.value.length >= 20) {
                setValidatorValue(state => ({ ...state, [e.target.name]: true }))
            } else {
                setValidatorValue(state => ({ ...state, [e.target.name]: false }))
            }
        };
    };

    return (
        <section className={style["create"]}>
            <h1 className={style["create-title"]}>Share your adventure!!!</h1>
            <form className={style["create-form"]} onSubmit={onSubmitData} >
                <div className={style["create-form-box"]}>
                    <label htmlFor="author" className={`${style["create-label"]} ${style["required"]}`}>
                        Author:
                    </label>
                    <input
                        type="text"
                        name="author"
                        onChange={onChangeValue}
                        onBlur={validator}
                        id="author"
                        value={value.author}
                    />
                </div>
                <div className={style["create-form-box"]}>
                    <label htmlFor="country" className={`${style["create-label"]} ${style["required"]}`}>
                        Country:
                    </label>
                    <input
                        type="text"
                        name="country"
                        onChange={onChangeValue}
                        onBlur={validator}
                        id="country"
                        value={value.country}
                    />
                </div>
                <div className={style["create-form-box"]}>
                    <label htmlFor="destination" className={`${style["create-label"]} ${style["required"]}`}>
                        Destination name:
                    </label>
                    <input
                        type="text"
                        name="destination"
                        onChange={onChangeValue}
                        onBlur={validator}
                        id="destination"
                        value={value.destination}
                    />
                </div>
                <div className={style["create-form-box"]}>
                    <label htmlFor="imageUrl" className={`${style["create-label"]} ${style["required"]}`}>
                        Image Url:
                    </label>
                    <input
                        type="url"
                        name="imageUrl"
                        onChange={onChangeValue}
                        onBlur={validator}
                        id="imageUrl"
                        value={value.imageUrl}
                    />
                </div>
                <div className={style["create-form-box"]}>
                    <label htmlFor="description" className={`${style["create-label"]} ${style["required"]}`}>
                        Description:
                    </label>
                    <textarea
                        name="description"
                        id="description"
                        cols={30}
                        rows={3}
                        defaultValue={""}
                        onChange={onChangeValue}
                        onBlur={validator}
                        textarea={value.description}
                    />
                </div>
                <div className={`${style["create-form-box"]} ${style["submit"]}`}>
                    {isValid
                        ?
                        <input
                            type="submit"
                            defaultValue="Registration"
                            className={style["submit-button"]}
                            style={{ background: '#ffffff47', fontWeight: 'bold' }}
                        />
                        :
                        <input
                            type="submit"
                            defaultValue="Registration"
                            className={style["submit-button"]}
                            style={{ fontWeight: 'bold' }}
                        />}
                </div>
            </form>
        </section>
    )
};

export default Create;






