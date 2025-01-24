import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import {Step1, Step2, Step3, Step4} from "../../components/cadastroSteps"
import { CadastrarContainer, FormContainer, FormContent } from './styles';
import { yupResolver } from "@hookform/resolvers/yup"  // utilizado para validacão 
import * as yup from "yup"

const schema = yup
  .object({
    // STEP1
    nomecompleto: yup
      .string()
      .min(8, "No mínimo 8 caracteres")
      .required("Campo obrigatório"),
    dataNacimento: yup
      .date()
      .max(new Date(), "Data de nascimento não pode ser no futuro")
      // .test(
      //   "min-age",
      //   "Você deve ter pelo menos 18 anos",
      //   (value) => {
      //     const hoje = new Date();
      //     const nascimento = new Date(value);
      //     const idade = hoje.getFullYear() - nascimento.getFullYear();
      //     return idade >= 18;
      //   }
      // )
      .required("Campo obrigatório"),

    cpf: yup
      .string()
      .length(11, "CPF inválido")
      .matches(/^\d+$/, "CPF deve conter apenas números")
      // .test("valid-cpf", "CPF inválido", (value) => validarCPF(value))
      .required("Campo obrigatório"),
    telefone: yup
      .string()
      .matches(
        /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/,
        "Formato inválido. Exemplo: (99) 99999-9999"
      )
      .required("Campo obrigatório"),


    // STEP2
    email: yup
      .string()
      .email("Email inválido")
      .required("Campo obrigatório"),
    password: yup
      .string()
      .min(8, "No mínimo 8 caracteres")
      .required("Campo obrigatório"),
    confirmacaoSenha: yup
      .string()
      .oneOf([yup.ref("password")], "As senhas não coincidem")  // verifica se a senha é igual a de cima
      .required("Campo obrigatório"),

    // STEP3
    bloco: yup
      .string()
      .matches(/^[A-Za-z0-9]+$/, "Bloco inválido")
      .required("Campo obrigatório"),
    apartamento: yup
      .string()
      .matches(/^\d+$/, "Apartamento inválido")
      .required("Campo obrigatório"),

    // STEP4
    possuiVeiculo: yup
      .boolean()
      .required("Campo obrigatório"),
    modeloVeiculo: yup
      .string()
      .when("possuiVeiculo", {
        is: true,
        then: (schema) => schema.required("Campo obrigatório"),
        otherwise: (schema) => schema.notRequired(),
      }),
    placa: yup
      .string()
      .when("possuiVeiculo", {
        is: true,
        then: (schema) =>
          schema
            .required("Campo obrigatório")
            .matches(
              /^[A-Z]{3}\d[A-Z\d]\d{2}$/,
              "Placa inválida. Exemplo: ABC1D23"
            ),
        otherwise: (schema) => schema.notRequired(),
      }),
  })
  .required();



// function validarCPF(cpf) {
//   if (!cpf || cpf.length !== 11) return false;
//   const digits = cpf.split("").map(Number);
//   const verifier1 = digits
//     .slice(0, 9)
//     .reduce((sum, digit, index) => sum + digit * (10 - index), 0);
//   const mod1 = (verifier1 * 10) % 11 % 10;
//   const verifier2 = digits
//     .slice(0, 10)
//     .reduce((sum, digit, index) => sum + digit * (11 - index), 0);
//   const mod2 = (verifier2 * 10) % 11 % 10;
//   return mod1 === digits[9] && mod2 === digits[10];
// }



const ProgressBar = ({ step }: { step: number }) => (
  <div className="progress-bar">
    {[1, 2, 3, 4].map((num) => (
      <div key={num} className={`circle ${num <= step ? "active" : ""}`}>
        <span>{num}</span>
      </div>
    ))}
    <div className="line">
      <div className="line-fill" style={{ width: `${(step - 1) * 33.33}%` }} />
    </div>
  </div>
);

// No MultiStepForm, adicione:




const Cadastrar = () => {

  const methods = useForm({
    resolver: yupResolver(schema), 
    mode: 'onBlur',  // quando sair do input, se estiver inválido ele manda o erro
    reValidateMode: 'onChange' // revalida o input quando troca
  }); // Inicializa o react-hook-form


  const { handleSubmit , formState: { errors }, /*watch*/ } = methods; // Para capturar o evento de submit

  console.log(errors)

  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const onSubmit = (data: any) => {
    console.log("Formulário submetido:", data);
    // Aqui você pode enviar os dados para o backend
  };

  // const form = watch()
  // console.log(form)

  return (
    <CadastrarContainer>
    <header>
      <h1 className="logo">CondoFacil</h1>
      <a href="/login">Já possui uma conta?</a>
    </header>
  
    <FormContainer>
      <FormContent>
        <ProgressBar step={step} />
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              {step === 1 && <Step1 nextStep={nextStep} />}
              {step === 2 && <Step2 nextStep={nextStep} prevStep={prevStep} />}
              {step === 3 && <Step3 nextStep={nextStep} prevStep={prevStep} />}
              {step === 4 && <Step4 prevStep={prevStep} />}
              
              
            </div>
          </form>
        </FormProvider>
      </FormContent>
    </FormContainer>
    
    </CadastrarContainer>
    
  );
};

export { Cadastrar };
