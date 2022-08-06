import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { likeTrip, dislikeTrip } from "../../service/tripService";

import { LikedContext } from "../../context/LikedContext";
import { AuthContext } from "../../context/AurhContext";
function Like() {
    const { liked } = useContext(LikedContext);
    const { user } = useContext(AuthContext);
    const { tripId } = useParams();
    const Navigate = useNavigate();

    useEffect(() => {
        if (!liked) {
            likeTrip(tripId, user)
                .then(result => {
                    Navigate(`/details/${tripId}`);
                }).catch(err => {
                    console.log(err);
                    Navigate('/404-page-not-found');
                })
        } else {
            dislikeTrip(tripId, user)
                .then(result => {
                    Navigate(`/details/${tripId}`);
                }).catch(err => {
                    Navigate('/404-page-not-found');
                    console.log(err);
                })
        }
    })
};

export default Like;