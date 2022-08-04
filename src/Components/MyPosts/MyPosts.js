import style from './MyPosts.module.css';

import MyPostElement from './MyPostsElement/myPostsElement';

import { useState, useEffect } from 'react';
import { getAllUserTrips } from '../../service/tripService';

function MyPosts() {
    const [myTrips, setMyTrips] = useState([]);

    useEffect(() => {
        getAllUserTrips()
            .then(result => {
                setMyTrips(result)
            }).catch(err => {
                console.log(err);
            });
    }, [])

    return (
        <section className={style["my-posts-container"]}>
            <header className={style["title"]}>
                {myTrips.length >= 1
                    ? <h2 className={style["my-posts-container-title"]}>My Fishing Trips</h2>
                    : <h2 className={style["my-posts-container-title"]}>You haven't share any of your fishing trips with us yet!</h2>}
            </header>
            <section className={style["posts"]}>
                {myTrips.map(myTrip => {
                    return (
                        <div className={style["my-posts-box"]} key={myTrip._id}>
                            <MyPostElement myTrip={myTrip} />
                        </div>
                    );
                })}
            </section>
        </section >

    )
}

export default MyPosts