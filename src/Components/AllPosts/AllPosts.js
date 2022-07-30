import { useState, useEffect } from 'react';

import style from './AllPosts.module.css';
import dospat from '../../Resources/img/travel-image-213.jpg';
import metchaPolqna from '../../Resources/img/1517770976569c80450696c40b7c8e1982063892bf.jpg';
import vatcha from '../../Resources/img/maxresdefault.jpg';

import { getAll } from '../../service/tripService';


function AllPosts() {

    const [trips, setTrips] = useState([]);

    useEffect(() => {
        getAll()
            .then(result => {
                setTrips(result);
            });
    }, []);

    return (
        <section className={style["all-posts-container"]}>
            <header className={style["title"]}>
                <h2 className={style["all-posts-container-title"]}>All Fishing Trips</h2>
            </header>
            <section className={style["posts"]}>
                {trips.map(x =>
                (<div className={style["all-posts-box"]} key={x._id}>
                    <img
                        src={x.imageUrl}
                        className={style["all-posts-image"]}
                        alt="Image of the some dam"
                    />
                    <h2 className={style["all-posts-title"]}>
                        <span className="my-post-label">Country: </span>{x.country}
                    </h2>
                    <h4 className={style["all-posts-title"]}>
                        <span className={style["my-post-label"]}>Destination: </span>{x.destination}
                    </h4>
                    <button className={style["all-posts-link"]}>Details</button>
                </div>)
                )}
            </section>
        </section>
    );
};

export default AllPosts;