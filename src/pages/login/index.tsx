import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/button';
import { Input } from '../../components/input';
import { Container, LoginContainer, Lados, Divisao, Logo } from './styles';
import { ReactComponent as AppleIcon } from '../../image/Apple.svg';
import { ReactComponent as FacebookIcon } from '../../image/Facebook.svg';
import { ReactComponent as GoogleIcon } from '../../image/Google.svg';
import { ReactComponent as ClosedEyeIcon } from '../../image/closed-eyes.svg';
import { ReactComponent as EyeIcon } from '../../image/eyes.svg';
import { ReactComponent as EmailIcon } from '../../image/email.svg';
import { ReactComponent as PasswordIcon } from '../../image/password.svg';
import loginImage from '../../image/login-img.png';

import { yupResolver } from "@hookform/resolvers/yup"  // utilizado para validacão 
import * as yup from "yup"

const schema = yup
  .object({
    email: yup.string().email("Email inválido").required("Email obrigatório!"),
    password: yup.string().min(8, "No minímo 8 caracteres").required("Senha obrigatória!"),
  })
  .required()

function Login() {
  const { control, formState: { errors, isValid}, handleSubmit, watch} = useForm({  
    resolver: yupResolver(schema), 
    mode: 'onBlur',  // quando sair do input, se estiver inválido ele manda o erro
    reValidateMode: 'onChange' // revalida o input quando troca
  });

  // console.log(errors)

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false); 
  const [passwordIcon, setPasswordIcon] = useState(<ClosedEyeIcon />); 

  const onSubmit = (data: any) => {
    console.log(data); 
    navigate('/dashboard'); 
  };

  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState); // Alterna a visibilidade da senha
    setPasswordIcon(showPassword ? <ClosedEyeIcon /> : <EyeIcon />); // Alterna o ícone
  };

  // const form = watch()
  // console.log(form)

  return (
    <Container>
      <Logo>CondoFácil</Logo>

      <Lados>
        <LoginContainer>
          <h1>Entrar</h1>
          <p>Faça login para acessar nosso sistema.</p>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Input 
              name="email" 
              control={control} 
              placeholder="Email" 
              leftIcon={<EmailIcon />} 
              isRequired={true} 
              errorMessage={errors.email?.message}
            />

            <Input 
              name="password" 
              control={control} 
              placeholder="Senha" 
              leftIcon={<PasswordIcon />} 
              viewPasswordIcon={<span onClick={togglePasswordVisibility}>{passwordIcon}</span>} // Icone que muda ao clicar
              isRequired={true} 
              type={showPassword ? "text" : "password"} // Alterando o tipo do input
              errorMessage={errors.password?.message}
            />
            <Button titulo="Entrar" type="submit" variant='primario' desabilitado={!isValid}/>
            
          </form>
          <hr />
          <Button titulo="Entrar com o Google" type="submit" variant='secundario' leftIcon={<GoogleIcon />} />
          <Button titulo="Entrar com Facebook" type="submit" variant='secundario' leftIcon={<FacebookIcon />} />
          <Button titulo="Entrar com Apple" type="submit" variant='secundario' leftIcon={<AppleIcon />} customStyle={{ marginBottom: '30px' }} />
          <a href="/recuperar-senha">Esqueceu a senha?</a>
          <p style={{ margin: "15px auto 30px" }}>Não tem uma conta? <a href="/cadastrar">Cadastrar</a></p>
        </LoginContainer>
      </Lados>
      <Divisao />
      <Lados>
        <img src={loginImage} alt="Imagem Tela de Login" />
      </Lados>
    </Container>
  );
}

export { Login };
