import { CSSProperties } from 'react';
export interface IInput{

    leftIcon?: React.ReactNode;
    name: string; 
    control?: any;
    errorMessage?: string; 
    placeholder?: string;
    type?: string;
    viewPasswordIcon?: React.ReactNode;
    isRequired?: boolean;
    customStyle?: CSSProperties;
    variant?: "primario" | "checkbox" | "radio"; // Adicione outros valores que você quer permitir
    [key: string]: any;
}

