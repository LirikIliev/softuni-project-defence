import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useContext } from "react";

import { likeTrip } from "../../service/tripService";
import { AuthContext } from "../../context/AurhContext";

function Like() {
    const { user } = useContext(AuthContext);
    const { tripId } = useParams();
    const Navigate = useNavigate();
    useEffect(() => {
        likeTrip(tripId, user)
            .then(result => {
                Navigate(`/details/${tripId}`);
            }).catch(err => {
                console.log(err);
            })
    });

    return null;
};

export default Like;