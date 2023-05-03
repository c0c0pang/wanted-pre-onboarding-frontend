import React from 'react'
import { MainDiv, SelectBoxDiv, SelectButtonDiv } from '../styled_component/styled_main'
import { useNavigate } from 'react-router-dom'
function Main() {
    const navigate = useNavigate()
    const goSignin = () => {
        navigate('/signin')
    }
    const goSignup = () => {
        navigate('/signup')
    }
    return (
        <MainDiv>
            <SelectBoxDiv>
                <SelectButtonDiv onClick={goSignin}>로그인</SelectButtonDiv>
                <SelectButtonDiv onClick={goSignup} >회원가입</SelectButtonDiv>
            </SelectBoxDiv>
        </MainDiv>
    )
}

export default Main