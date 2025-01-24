import styled, {css} from 'styled-components';

interface InputContainerProps {
    variant: "primario" | "checkbox" | "radio"; // Adicione os valores que você espera
}

export const InputContainer = styled.div<InputContainerProps>`
  width: 100%;
  height: 48px;
  border: 1px solid #000;
  display: flex;
  align-items: center;
  margin: 16px auto;
  position: relative;

  

    ${({ variant }) =>
        variant === 'checkbox' && css`
            width: 20px;
            height: 20px;
            border: 1px solid #000;
            margin: 8px 0;
            position: relative;
            margin-right: 10px;
        
    `}

 
`;

export const IconContainer = styled.div`
    margin-left: 10px;
    width: 24px;
    height: 24px;
    svg{
        width: 100%;
        height: 100%;
    }

`;
export const InputText = styled.input<InputContainerProps>`
    background: transparent;
    color: #000;
    border: 0;
    width: 100%;
    height: 48px;
    outline: none;
    margin-left: 10px;
    font-size: 16px;

    ${({ variant }) =>
        variant === 'checkbox' && css`
            background: transparent;
            color: #000;
            border: 0;
            width: 100%;
            height: 100%;
            outline: none;
            margin-left: 0;
            
            border: none; /* Remove qualquer borda padrão */
            outline: none; /* Remove o contorno ao focar */
            appearance: none; /* Remove o estilo padrão do navegador */
            -webkit-appearance: none; /* Para compatibilidade com Webkit (Safari, Chrome) */
            background-color: transparent; /* Deixe o fundo transparente */

            /* Estilo do checkbox quando não estiver marcado */
            
            position: relative;
            display: inline-block;
            // width: 20px;
            // height: 20px;
            // border: 2px solid #000; /* Borda externa do checkbox */
            // border-radius: 4px; /* Cantos arredondados */
            
            /* Estilo do "check" quando marcado */
            &:checked {
                background-color: #000; /* Cor de fundo quando marcado */
                
            }
            
            /* Estilo do "checkmark" (marca de seleção) */
            &:checked::after {
                content: "✔"; /* Símbolo do check */
                position: absolute;
                top: 2px;
                left: 3px;
                color: white;
                font-size: 15px; /* Tamanho do símbolo */
            }
        `}
`;

export const ViewPassword = styled.div`
    width: 24px;
    height: 24px;
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translate(0, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    
    svg{
        width: 100%;
        height: 100%;
    }
    
    &:hover{
        cursor: pointer
    }

`;
export const ErrorText = styled.p`
    color: #FF0000;
    font-size: 12px;
    margin-bottom: 5px;
`
