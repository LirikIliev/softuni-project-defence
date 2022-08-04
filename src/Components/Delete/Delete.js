import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { deleteTrip } from "../../service/tripService";

function Delete() {
    const { tripId } = useParams();
    const Navigator = useNavigate();
    useEffect(() => {
        deleteTrip(tripId);
        Navigator('/my-posts');
    });

    return null;
};

export default Delete;