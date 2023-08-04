import axios from 'axios';

const registerService = async (username, password, mobileNumber, email) => {
    try {
        const { data } = await axios.post(`http://localhost:3001/api/user/register`, {
            username: username,
            password: password,
            mobileNumber: mobileNumber,
            email: email
        });
        if (data) return data;
        console.log(data);
    } catch (error) {
        return error;
    }
}

const loginService = async (username, password) => {
    try {
        const { data } = await axios.post(`http://localhost:3001/api/user/login`, {
            username: username,
            password: password,
        });
        if (data){
            return data;
        } 
    } catch (error) {
        return error;
    }
}

export const authService = {
    registerService,
    loginService
}