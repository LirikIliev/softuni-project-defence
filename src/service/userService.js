export const registerUser = (data) => {
    return (
        fetch("http://localhost:3030/register", {
            method: 'post',
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
    );
};