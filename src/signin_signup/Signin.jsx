import React, { useState } from 'react'
import { MainDiv, SelectBoxDiv } from '../styled_component/styled_main'
import { Input, Button } from '../styled_component/styled_signin'
function Signin() {
    const [inputs, setInputs] = useState({ email: '', password: '' })
    const { email, password } = inputs
    const [check, setCheck] = useState(true)
    const onChange = (e) => {
        const { name, value } = e.target
        setInputs({ ...inputs, [name]: value })
        setCheck(true)
    }
    const onSubmit = (e) => {
        e.preventDefault()
    }
    const onClick = () => {
        if (!email.includes('@')) {
            setCheck(false)
            return
        }
        if (password.length < 8) {
            setCheck(false)
            return
        }
    }
    return (
        <MainDiv>
            <SelectBoxDiv onSubmit={onSubmit}>
                <Input type='email' name='email' value={email} placeholder='이메일' onChange={onChange} data-testid="email-input"></Input>
                <Input type='password' name='password' value={password} onChange={onChange} placeholder='비밀번호' minLength={8} data-testid="password-input"></Input>
                {check ? (<Button type='submit' data-testid="signin-button" onClick={onClick}>로그인</Button>) : (<Button disabled>로그인</Button>)}

            </SelectBoxDiv>
        </MainDiv>
    )
}

export default Signin