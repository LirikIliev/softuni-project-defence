export const registerUser = (data) => {
    return (
        fetch("http://localhost:3030/user/register", {
            method: 'post',
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
    );
};

export const loginUser = (data) => {
    return (
        fetch("http://localhost:3030/user/login", {
            method: 'post',
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
    );
};