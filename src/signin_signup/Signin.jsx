import React, { useEffect, useState } from 'react'
import { MainDiv, SelectBoxDiv } from '../styled_component/styled_main'
import { Input, Button } from '../styled_component/styled_signin'
import { authApi } from '../api/apiStorage'
import { useNavigate } from 'react-router-dom'
import { TokenCheck, Validation } from '../custom/functionSet'
function Signin() {
    const [inputs, setInputs] = useState({ email: '', password: '' })
    const { email, password } = inputs
    const [check, setCheck] = useState(true)
    const navigate = useNavigate()
    useEffect(() => {
        //토큰 검사
        TokenCheck({ navigate })
    }, [])
    const onChange = (e) => {
        const { name, value } = e.target
        setInputs({ ...inputs, [name]: value })
        setCheck(true)
    }
    const onSubmit = async (e) => {
        e.preventDefault()
        const msg = await authApi.SigninAuth(inputs)
        //msg가 정상응답이면 /todo로 리다이렉트
        if (msg) {
            window.localStorage.setItem('access_token', msg)
            navigate('/todo')
        }
    }
    const onClick = () => {
        //유효성 검사
        Validation({ email, password, setCheck })
    }
    return (
        <MainDiv>
            <SelectBoxDiv onSubmit={onSubmit}>
                <Input type='email' name='email' value={email} placeholder='이메일' onChange={onChange} data-testid="email-input"></Input>
                <Input type='password' name='password' value={password} onChange={onChange} placeholder='비밀번호' minLength={8} data-testid="password-input"></Input>
                <Button type='submit' data-testid="signin-button" onClick={onClick} disabled={!check}>로그인</Button>
            </SelectBoxDiv>
        </MainDiv>
    )
}

export default Signin