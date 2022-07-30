
export const getAll = () => {
    return (
        fetch("http://localhost:3030/all-posts")
            .then(res => res.json())
    );
};