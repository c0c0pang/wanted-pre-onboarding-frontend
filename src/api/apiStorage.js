import axios from "axios";

const baseURL = axios.create({
    baseURL: 'http://localhost:8000'
})

class Auth {
    SigninAuth = async (props) => {
        return await baseURL.post('/auth/signin', {
            email: props.email,
            password: props.password
        }).then((res) => res.status === 200 ? (res.data.access_token) : (false))
    }
    SignupAuth = async (props) => {
        return await baseURL.post('/auth/signup', {
            email: props.email,
            password: props.password
        }).then((res) => res.status === 201 ? (true) : (false))
    }
}

export const authApi = new Auth()