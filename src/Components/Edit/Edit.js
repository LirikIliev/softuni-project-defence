import style from './Edit.module.css';

import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { editTrip, getCurrent } from '../../service/tripService';

function Edit() {
    const Navigator = useNavigate()
    const { tripId } = useParams();
    const [editValue, setEditValue] = useState(
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


    function onChangeValue(e) {
        setEditValue(state => ({ ...state, [e.target.name]: e.target.value }))
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

    async function onSubmitEditedValue(e) {
        e.preventDefault();
        try {
            await editTrip(tripId, editValue);
            Navigator(`/details/${tripId}`);
        } catch (err) {
            console.log(err);
            Navigator('/');
        }
    };

    useEffect(() => {
        getCurrent(tripId)
            .then(trip => {
                let result = {
                    author: trip.author,
                    country: trip.country,
                    destination: trip.destination,
                    imageUrl: trip.imageUrl,
                    description: trip.description,
                };
                setEditValue(state => ({ ...state, ...result }))
            }).catch(err => {
                Navigator('/')
                console.log(err);
            });
    }, []);

    return (
        <section className={style["edit"]}>
            <h1 className={style["edit-title"]}>Edit your Story!!!</h1>
            <form className={style["edit-form"]} onSubmit={onSubmitEditedValue}>
                <div className={style["edit-form-box"]}>
                    <label htmlFor="author" className={`${style["edit-label"]} ${style["required"]}`}>
                        Author:
                    </label>
                    <input
                        type="text"
                        name="author"
                        id="author"
                        onChange={onChangeValue}
                        value={editValue.author}
                    />
                </div>
                <div className={style["edit-form-box"]}>
                    <label htmlFor="country" className={`${style["edit-label"]} ${style["required"]}`}>
                        Country:
                    </label>
                    <input
                        type="text"
                        name="country"
                        id="country"
                        onChange={onChangeValue}
                        value={editValue.country}
                    />
                </div>
                <div className={style["edit-form-box"]}>
                    <label htmlFor="destination" className={`${style["edit-label"]} ${style["required"]}`}>
                        Destination name:
                    </label>
                    <input
                        type="text"
                        name="destination"
                        id="destination"
                        onChange={onChangeValue}
                        value={editValue.destination}
                    />
                </div>
                <div className={style["edit-form-box"]}>
                    <label htmlFor="imageUrl" className={`${style["edit-label"]} ${style["required"]}`}>
                        Image Url:
                    </label>
                    <input
                        type="url"
                        name="imageUrl"
                        id="imageUrl"
                        onChange={onChangeValue}
                        value={editValue.imageUrl}
                    />
                </div>
                <div className={style["edit-form-box"]}>
                    <label htmlFor="description" className={`${style["edit-label"]} ${style["required"]}`}>
                        Description:
                    </label>
                    <textarea
                        name="description"
                        id="description"
                        cols={30}
                        rows={3}
                        onChange={onChangeValue}
                        value={editValue.description}
                    />
                </div>
                <div className={`${style["edit-form-box"]} ${style["submit"]}`}>
                    <input
                        type="submit"
                        className={style["submit-button"]}
                        style={{ fontWeight: 'bold' }}
                    />
                </div>
            </form>
        </section>
    )
};

export default Edit;