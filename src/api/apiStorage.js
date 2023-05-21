import axios from "axios";
import { TOKEN } from "../custom/functionSet";

const baseURL = axios.create({
    baseURL: 'https://www.pre-onboarding-selection-task.shop'
})
const config = {
    headers: {
        'Authorization': 'Bearer ' + TOKEN
    }
}
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
    CreateTodo = async (todo) => {
        return await baseURL.post('/todos',
            {
                todo: todo
            },
            config
        ).then((res) => {
            console.log(res.status)
        })
    }
    GetTodo = async () => {
        return await baseURL.get('/todos', config)
            .then((res) => res.data)
    }
    DeleteTodo = async (id) => {
        return await baseURL.delete(`/todos/${id}`, config)
            .then((res) => res.status)
    }
}
export const authApi = new Auth()
export const todoApi = new Todo()