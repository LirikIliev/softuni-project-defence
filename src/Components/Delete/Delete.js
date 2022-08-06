import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { deleteTrip } from "../../service/tripService";

function Delete() {
    const { tripId } = useParams();
    const Navigator = useNavigate();
    useEffect(() => {
        deleteTrip(tripId)
            .then(result => {
                Navigator('/my-posts');
            }).catch(err => {
                console.log(err);
                Navigator('/404-page-not-found');
            })
    });

    return null;
};

export default Delete;