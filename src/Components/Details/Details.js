import style from './Details.module.css';

import { Link, useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';

import { AuthContext } from '../../context/AurhContext';
import { LikedContext } from '../../context/LikedContext';

import { getCurrent } from '../../service/tripService';

import Spinner from '../Spinner/Spinner';
import SpinnerText from '../Spinner/SpinnerText';

function Details() {
    const { tripId } = useParams();
    const [trip, setTrip] = useState({});
    const [owner, setOwner] = useState(false);
    const [guest, setGuest] = useState(true);

    const Navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const { liked, userLikedTrip } = useContext(LikedContext);
    useEffect(() => {
        getCurrent(tripId)
            .then(result => {
                const isItLiked = result.likes.some(userId => userId == user._id);
                setTrip(result);
                if (user._id === result._ownerId) {
                    setOwner(true);
                };

                if (user._id) {
                    setGuest(false);
                };

                if (isItLiked) {
                    userLikedTrip(true);
                } else {
                    userLikedTrip(false);
                };
            })
            .catch(err => {
                console.log(err);
                Navigate('/404-page-not-found');
            })
    }, []);
    const ownerElement = (
        <>
            <Link to={`/edit/${tripId}`}>
                <button id="edit" className={style["edit"]}>
                    Edit - <i className="fa-solid fa-pen" />
                </button>
            </Link>
            <Link to={`/delete/${tripId}`}>
                <button className={style["delete"]} >
                    Delete - <i className="fa-solid fa-trash" />
                </button >
            </Link >
        </>
    );

    const guestElement = (
        <Link to={`/like/${tripId}`}>
            <>
                <button className={style["like"]}>
                    Like -
                    {
                        liked
                            ? <i className="fa-solid fa-thumbs-up" style={{ color: 'green', width: '50px' }} />
                            : <i className="fa-solid fa-thumbs-up" style={{ width: '50px' }} />
                    }
                </button>
            </>
        </Link>
    );
    return (
        <section className={style["details"]}>
            {Object.values(trip).length > 0
                ? <section className={style["details-container"]}>
                    <div className={style["details-image"]}>
                        <img src={trip.imageUrl} alt="vatcha dam" />
                    </div>
                    <article className={style["details-info"]}>
                        <h1 className={style["detailt-info-title"]}>
                            <span className={style["describe"]}>Destination:</span>
                            {trip.destination}
                        </h1>
                        <h3 className={style["country"]}>
                            <span className={style["describe"]}>Country:</span>
                            {trip.country}
                        </h3>
                        <p className={style["description"]}>{trip.description}</p>
                        <h3 className={style["author"]}>
                            <span className={style["describe"]}>Author:</span>
                            {trip.author}
                        </h3>
                        <div className={style["likes"]}>
                            Likes:
                            {trip.likes
                                ? <span id="likes">{trip.likes.length}</span>
                                : <span id="likes"> 0</span>
                            }
                        </div>
                        <div className={style["buttons"]}>
                            {
                                !guest
                                    ? owner
                                        ? ownerElement
                                        : guestElement
                                    : ""
                            }
                        </div>
                    </article>
                </section>
                :
                <>
                    <SpinnerText />
                    <Spinner />
                </>
            }
        </section >
    );
};

export default Details;