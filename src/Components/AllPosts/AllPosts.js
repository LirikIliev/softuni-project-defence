import { useState, useEffect } from 'react';

import style from './AllPosts.module.css';

import { getAll } from '../../service/tripService';
import { Link, useParams } from 'react-router-dom';


function AllPosts() {
    const [trips, setTrips] = useState([]);

    useEffect(() => {
        getAll()
            .then(result => {
                setTrips(result);
            }).catch(err => {
                console.log(err);
            })
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
                    <Link to={`/details/${x._id}`}>
                        <button className={style["all-posts-link"]}>Details</button>
                    </Link>
                </div>)
                )}
            </section>
        </section>
    );
};

export default AllPosts;