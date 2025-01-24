import { useFormContext } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { Input } from "../input";
import { Button } from "../button";

import { ReactComponent as EmailIcon } from '../../image/email.svg';
import { ReactComponent as PasswordIcon } from '../../image/password.svg';




export const Step1 = ({ nextStep }: { nextStep: () => void }) => {
    const { control, formState: { errors} } = useFormContext(); // Acessa o contexto compartilhado
    const navigate = useNavigate(); 
    console.log(errors)

    return (
        <div>
        <h2>Digite suas informações</h2>
        <label>Digite seu nome*</label>
        <Input
            name="nomecompleto"
            control={control}
            type="text"
            placeholder="Nome Sobrenome"
            isRequired={true}
            customStyle={{marginTop: "8px"}}
            errorMessage={errors.nomecompleto?.message as string || ''}
        />
        <label>Digite sua data de nascimento*</label>
        <Input
            name="dataNacimento"
            control={control}
            type="date"
            isRequired={true}
            customStyle={{marginTop: "8px"}}
            errorMessage={errors.dataNacimento?.message as string || ''}
        />
        <label>Digite seu cpf*</label>
        <Input
            name="cpf"
            control={control}
            type="text"
            placeholder="999.999.999-99"
            isRequired={true}
            customStyle={{marginTop: "8px"}}
            errorMessage={errors.cpf?.message as string || ''}
        />
        <label>Digite seu telefone*</label>
        <Input
            name="telefone"
            control={control}
            type="text"
            placeholder="(99) 99999-9999"
            isRequired={true}
            customStyle={{marginTop: "8px"}}
            errorMessage={errors.telefone?.message as string || ''}
        />

        <div className="container-button">
            <Button titulo="Cancelar" onClick={() => navigate('/login')} variant="secundario" />
            <Button titulo="Próximo" onClick={nextStep}  />
        </div>
        </div>
    );
};



export const Step2 = ({ prevStep, nextStep }: { prevStep: () => void; nextStep: () => void }) => {
    const { control, formState: { errors } } = useFormContext();  // Acessa o mesmo contexto

  return (
    <div>
      <h2>Email e senha para login</h2>
      <label>Digite seu email*</label>
      <Input
        name="email"
        control={control}
        type="email"
        placeholder="seuemail@gmail.com"
        isRequired={true}
        customStyle={{marginTop: "8px"}}
        leftIcon={<EmailIcon />} 
        errorMessage={errors.email?.message as string || ''}
      />
      <label>Digite sua senha*</label>
      <Input
        name="password"
        control={control}
        type="password"
        placeholder="senha"
        isRequired={true}
        customStyle={{marginTop: "8px"}}
        leftIcon={<PasswordIcon />} 
        errorMessage={errors.password?.message as string || ''}
      />
      <label>Confirme sua senha*</label>
      <Input
        name="confirmacaoSenha"
        control={control}
        type="password"
        placeholder="senha"
        isRequired={true}
        customStyle={{marginTop: "8px"}}
        leftIcon={<PasswordIcon />} 
        errorMessage={errors.confirmacaoSenha?.message as string || ''}
      />
      <div className="container-button">
        <Button titulo="Voltar" onClick={prevStep} variant="secundario" />
        <Button titulo="Próximo" onClick={nextStep} />
      </div>
    </div>
  );
};

export const Step3 = ({ prevStep, nextStep }: { prevStep: () => void; nextStep: () => void }) => {
    const { control, formState: { errors, isValid } } = useFormContext();  // Pega o controle do FormProvider


    return (
        <div>
        <h2>Sobre seu apartamento</h2>
        <label>Qual o seu bloco?</label>
        <Input
            name="bloco"
            control={control}
            type="text" 
            placeholder="Bloco X"
            isRequired={true}
            customStyle={{marginTop: "8px"}}
            errorMessage={errors.bloco?.message as string || ''}
        />
        <label>Qual é o n° do apartamento?</label>
        <Input
            name="apartamento"
            control={control}
            type="text"
            placeholder="ap100"
            isRequired={true}
            customStyle={{marginTop: "8px"}}
            errorMessage={errors.apartamento?.message as string || ''}
        />
        <div className="container-button">
            <Button titulo="Voltar" onClick={prevStep} variant="secundario" />
            <Button titulo="Próximo" onClick={nextStep} desabilitado={!isValid} />
        </div>
        </div>
    );
};
  

export const Step4 = ({ prevStep }: { prevStep: () => void }) => {
    const { control, formState: { errors, isValid } } = useFormContext();  // Pega o controle do FormProvider

    return (
        <div>
        <h2>Sobre seu veículo</h2>
        <h3>Você possui um veiculo?</h3>
        
        <div className="inputCheckbox-container">
            <Input
                name="possuiVeiculo"
                control={control}
                type="radio"
                variant="checkbox"
                value={true}
                errorMessage={errors.possuiVeiculo?.message as string || ''}
            />
            <label htmlFor="sim-possui-veiculo">Sim, eu possuo um veículo</label>
        </div>
        <div className="inputCheckbox-container" style={{marginBottom: "20px"}}>
            <Input
                name="possuiVeiculo"
                control={control}
                type="radio"
                variant="checkbox"
                value={false}
                errorMessage={errors.possuiVeiculo?.message as string || ''}
            />
            <label htmlFor="nao-possui-veiculo">Não eu não possuo um veículo</label>
        </div>

        <label>Digite o modelo</label>
        <Input
            name="modeloVeiculo"
            control={control}
            type="text"
            placeholder="Nissan GTR 2010"
            isRequired={true}
            customStyle={{marginTop: "8px"}}
            errorMessage={errors.modeloVeiculo?.message as string || ''}
        />
        <label>Digite a placa</label>
        <Input
            name="placa"
            control={control}
            type="text"
            placeholder="XXXXXX"
            isRequired={true}
            customStyle={{marginTop: "8px"}}
            errorMessage={errors.placa?.message as string || ''}
        />
        <div className="container-button">
            <Button titulo="Voltar" onClick={prevStep} variant="secundario" />
            <Button titulo="Próximo" type="submit" desabilitado={!isValid}/>
        </div>
        </div>
    );
};