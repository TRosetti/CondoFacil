import React, { useState } from 'react';
import { InputContainer, IconContainer, InputText, ErrorText, ViewPassword} from './styles';
import {IInput} from './type';
import { Controller } from "react-hook-form" 

const Input = ({leftIcon, name, control, errorMessage, viewPasswordIcon, isRequired = false, type = 'text', customStyle, variant = 'primario', ...rest}: IInput) => {

  // Estado para controlar o tipo do input (password ou text)
  const [inputType, setInputType] = useState(type);

  // Função para alternar o tipo de input
  const togglePasswordVisibility = () => {
    console.log('foi')
    setInputType(prevType => prevType === 'password' ? 'text' : 'password');
  };

  

  return (
    <>
      <InputContainer variant={variant}  style={customStyle} >
        {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>): null }
        {viewPasswordIcon ? (<ViewPassword onClick={togglePasswordVisibility} >{viewPasswordIcon}</ViewPassword>): null }

        <Controller
          name={name}
          control={control}
          rules={{required:  true}}
          render={({ field }) => (  <InputText variant={variant} {...field} type={inputType} {...rest}  /> )}
        />
      
      </InputContainer >
      {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}
    </>
  )
}

export {Input};
