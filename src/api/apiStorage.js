import axios from "axios";

const baseURL = axios.create({
    baseURL: ' https://www.pre-onboarding-selection-task.shop'
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

class Todo {
    CreateTodo = async (props) => {

    }
}
export const authApi = new Auth()