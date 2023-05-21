import { useNavigate } from "react-router-dom"
export const Validation = (props) => {
    //이메일 유효성 검사
    if (!props.email.includes('@')) {
        props.setCheck(false)
        return
    }
    //비밀번호 유효성 검사
    if (props.password.length < 8) {
        props.setCheck(false)
        return
    }
}

export const TOKEN = window.localStorage.getItem('access_token')

export const TokenCheck = (props) => {
    if (TOKEN) {
        //토큰이 존재하면 /todo로 리다이렉트
        props.navigate('/todo')
    }
}
export const TokenCheckTodo = (props) => {
    if (TOKEN) {
        //토큰이 존재하지 않으면 /signin로 리다이렉트
        props.navigate('/todo')
    }
}