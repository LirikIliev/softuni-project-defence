import style from './Home.module.css';

import { useState, useEffect } from 'react';
import Spinner from '../Spinner/Spinner';
import SpinnerText from '../Spinner/SpinnerText';


import collage from '../../Resources/img/love-fishing.png';
import { getSortedByDate } from '../../service/tripService';
import TripElement from './TripElement/TripElement';

function Main() {

    const [sortedTrips, setSortedTrips] = useState([]);
    useEffect(() => {
        getSortedByDate()
            .then(result => {
                setSortedTrips(result);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    return (
        <section className={style["main-section-box"]}>
            <section className={style["company-info-container"]}>
                <article className={style["company-info-articles"]}>
                    <h3 className={style["second-title"]}>
                        Share some of your best fishing trips with us!
                    </h3>
                    <h1 className={style["main-title"]}>Enjoy nature!</h1>
                </article>
                <img src={collage} className={style["company-image"]} alt="fish collage pictures" />
            </section>
            <section className={style["destination-container"]}>
                {
                    sortedTrips.length > 0
                        ?
                        <h2 className={style["destination-container-title"]}>
                            The newest three destination
                        </h2>
                        :
                        <h2 className={style["destination-container-title"]}>
                            <SpinnerText />
                        </h2>
                }
                {sortedTrips.length > 0 ?
                    sortedTrips.map(trip => {
                        return (
                            <div className={style["destination-box"]} key={trip._id}>
                                <TripElement trip={trip} />
                            </div>
                        )
                    })
                    :
                    <Spinner />
                }
            </section>
        </section>
    )
}

export default Main;