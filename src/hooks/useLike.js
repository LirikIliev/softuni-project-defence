import { useState } from "react";

export const useLike = () => {
    const [logged, setLogged] = useState(null);

    const setLoggedUser = (value) => {
        setLogged(value);
    };

    return [
        logged,
        setLoggedUser
    ];
}

