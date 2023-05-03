import React, { useEffect, useState } from 'react'
import { MainDiv, SelectBoxDiv } from '../styled_component/styled_main'
import { Input, Button } from '../styled_component/styled_signin'
import { authApi } from '../api/apiStorage'
import { useNavigate } from 'react-router-dom'
import { Validation, TokenCheck } from '../custom/functionSet'
function Signup() {
    const [inputs, setInputs] = useState({ email: '', password: '' })
    const { email, password } = inputs
    const [check, setCheck] = useState(true)
    const navigate = useNavigate()
    useEffect(() => {
        //토큰이 검사
        TokenCheck({ navigate })
    }, [])
    const onChange = (e) => {
        const { name, value } = e.target
        setInputs({ ...inputs, [name]: value })
        setCheck(true)
    }
    const onSubmit = async (e) => {
        e.preventDefault()
        const msg = await authApi.SignupAuth(inputs)
        //msg가 true이면 정상 응답이므로 signin으로 리다이렉트
        if (msg === true) {
            navigate('/signin')
        }
    }
    const onClick = () => {
        //유효성 검사
        Validation({ email, password, setCheck })
    }
    return (
        <MainDiv>
            <SelectBoxDiv onSubmit={onSubmit}>
                <Input type='email' name='email' value={email} placeholder='이메일 입력' onChange={onChange} data-testid="email-input"></Input>
                <Input type='password' name='password' value={password} onChange={onChange} placeholder='비밀번호 입력' minLength={8} data-testid="password-input"></Input>
                {check ? (<Button type='submit' data-testid="signin-button" onClick={onClick}>회원가입</Button>) : (<Button disabled>회원가입</Button>)}
            </SelectBoxDiv>
        </MainDiv>
    )
}

export default Signup