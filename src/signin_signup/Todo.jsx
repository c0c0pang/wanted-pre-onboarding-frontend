import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { TokenCheck } from '../custom/functionSet'

function Todo() {
    const navigate = useNavigate()
    useEffect(() => {
        TokenCheck({ navigate })
    }, [])
    return (
        <div>Todo</div>
    )
}

export default Todo