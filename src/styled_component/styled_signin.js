import styled from "styled-components";

export const Input = styled.input`
    width: 220px;
    height: 38px;
    border: none;
    border-radius: 5px;
    border: 1px solid gray;
    outline: none;
    font-size: 15px;
    ::placeholder{
        font-size: 15px;
    }
`
export const Button = styled.button`
    width: 180px;
    height: 40px;
    font-size: 20px;
    border: none;
    border-radius: 7px;
    transition: 0.3s ease;
    cursor: pointer;
    :hover{
        transition: 0.3s ease;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
        font-weight: bold;
    }

`