import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/button';
import { Input } from '../../components/input';
import { Container, LoginContainer, Lados, Divisao, Logo} from './styles';
import { ReactComponent as EmailIcon } from '../../image/email.svg';
import loginImage from '../../image/login-img.png';


function RecuperarSenha() {
  const { control, formState: { errors }, handleSubmit } = useForm();

  const navigate = useNavigate(); 

  const onSubmit = (data: any) => {
    console.log(data); // Processar dados do formulário
    navigate('/dashboard'); // Redireciona para o dashboard após login
  };

  return (

    <Container>
      <Logo>CondoFácil</Logo>

      <Lados>
        <LoginContainer >
          <h1>Digite o seu email de cadastro</h1>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Input 
                name="email" 
                control={control} 
                placeholder="Email" 
                leftIcon={<EmailIcon />} 
                isRequired={true} 
            />
            <div className="container-button">
              <Button titulo="Voltar" variant='secundario' onClick={() => navigate('/login')} customStyle={{display: 'inline-block', width: '20%',margin: 0, marginRight: '4%'}}/>
              <Button titulo="Recuperar Senha" type="submit" variant='primario' customStyle={{display: 'inline-block', width: '35%', margin: 0}} />
            </div>
           
          </form>
      </LoginContainer>

      </Lados>
      <Divisao />
      
      <Lados>
        <img src={loginImage} alt="Imagem Tela de Login" />
      </Lados>
    </Container>
    

  );
}

export {RecuperarSenha};
