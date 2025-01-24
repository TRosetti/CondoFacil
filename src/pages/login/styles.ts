import styled from "styled-components"

export const Logo = styled.div`
    position: Absolute;
    left: 40px;
    top: 35px;
    font-family: "Ranga", serif;
    font-weight: 400;
    font-size: 24px;
`; 

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;
`; 


export const Divisao = styled.div`
    heigth: 100vh;
    width: 1px;
    background-color: black;
`; 
export const Lados = styled.div`
    width: 50%;
    height: 100vh;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;

    img{
        width: 100%;
    }
`; 

export const LoginContainer = styled.div`
    width: 70%;
    margin: auto;
    text-align: center;

    h1{
        font-weight: bold;
        font-size: 48px;
        margin-bottom: 20px;
    }
    
    p{
        font-weight: 400;
        font-size: 18px;
        margin-bottom: 30px;
    }
    
    a{
            font-weight: 400;
        font-size: 18px;
        color: black;
    }
    
    hr{
        margin: 30px auto;
    }
`; 

