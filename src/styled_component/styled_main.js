import styled from "styled-components";

export const MainDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: linear-gradient(90deg, #C4D1FF 50%, #C5C4FF 72.63%);
`
export const SelectBoxDiv = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 400px;
    height: 300px;
    gap: 20px;
    border-radius: 10px;
    -webkit-box-reflect: below 5px linear-gradient(to bottom, rgba(0,0,0,0.0), rgba(0,0,0,0.7));
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
    background-color: white;
    
`
export const SelectButtonDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 55px;
    border-radius: 5px;
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transition: 0.3s ease;
    :hover{
        transition: 0.3s ease;
        background-color: #3D4EEC;
        color: white;
    }
`