import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useContext } from "react";

import { dislikeTrip, likeTrip } from "../../service/tripService";
import { AuthContext } from "../../context/AurhContext";
import { LikedContext } from "../../context/LikedContext";

function Like() {
    const { user } = useContext(AuthContext);
    const { liked } = useContext(LikedContext)
    const { tripId } = useParams();
    const Navigate = useNavigate();
    useEffect(() => {
        if (!liked) {
            likeTrip(tripId, user)
                .then(result => {
                    Navigate(`/details/${tripId}`);
                }).catch(err => {
                    console.log(err);
                })
        } else {
            dislikeTrip(tripId, user)
                .then(result => {
                    Navigate(`/details/${tripId}`);
                }).catch(err => {
                    console.log(err);
                })
            Navigate(`/details/${tripId}`);
        }
    });

    return null;
};

export default Like;