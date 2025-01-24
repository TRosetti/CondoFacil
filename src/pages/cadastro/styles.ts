import styled from "styled-components"

export const CadastrarContainer = styled.div`
    header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 76px;
        box-shadow: 0 4px 20px #00000025;
        padding: 0 94px;
    }
    
    header a{
        font-size: 17px;
        color: black;
        
    }

    header h1.logo{
        font-family: "Ranga", serif;
        font-weight: 400;
        font-size: 24px;
    }
`;


export const FormContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 60px;
    width: 100%;

`;

export const FormContent = styled.div`
    max-width: 560px;
    width: 100%;
    


    h2{
        font-size: 40px;
        font-weight: bold;
        text-align: center;
        margin-bottom: 42px;
    }

    h3{
        font-size: 20px;
        font-weight: bold;
        text-align: left;
        margin-bottom: 28px;
    }
  
    .container-button{
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
    }

    .container-button button{
        width: 22%;
        display: inline-block;
        margin: 0;
    }
    .container-button button:first-child{
        margin-right: 15px;
    }
    
    .progress-bar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;
        margin-bottom: 45px; 
    }

    .circle {
        width: 40px;
        height: 40px;
        border: 2px solid #000;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #fff;
        position: relative;
        z-index: 1;
        transition: background-color 0.3s, border-color 0.3s;
    }

    .circle.active {
        background-color: #000;
        color: #fff;
        border-color: #000;
    }

    .circle span {
        font-size: 16px;
        font-weight: bold;
    }

    .line {
        position: absolute;
        top: 50%;
        left: 0;
        right: 0;
        height: 2px;
        background-color: #ddd;
        z-index: 0;
        transform: translateY(-50%);
    }

    .line-fill {
        height: 2px;
        background-color: #000;
        width: 0;
        transition: width 0.3s;
    }

    .inputCheckbox-container{
        display: flex;
        flex-direction: row;
        align-items: center;
        
    }
`;