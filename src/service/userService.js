export const registerUser = async (data) => {
    try {
        const response = await fetch("http://localhost:3030/user/register", {
            method: 'post',
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(data)
        })
        if (response.ok == false) {
            const error = await response.json();
            throw ({ message: error.message });
        }
        try {
            const data = await response.json();
            return data;
        } catch (err) {
            return response;
        }
    } catch (err) {
        throw err;
    }
};

export const loginUser = async (data) => {
    try {
        const response = await fetch("http://localhost:3030/user/login", {
            method: 'post',
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(data)
        })
        if (response.ok == false) {
            const error = await response.json();
            throw ({ message: error.message });
        }
        try {
            const data = await response.json();
            return data;
        } catch (err) {
            return response;
        }
    } catch (err) {
        throw err;
    }
};