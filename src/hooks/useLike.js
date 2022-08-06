import { useState } from "react";
function useLike() {
    const [logged, setLogged] = useState(false);

    const setLoggedUser = (value) => {
        setLogged(value);
    };

    return [
        logged,
        setLoggedUser
    ];
}

export default useLike;