import { CSSProperties } from 'react';
export interface IButton {
    variant?: 'primario' | 'secundario';
    titulo: string; // Título do botão
    onClick?: () => void; // Função de clique
    leftIcon?: React.ReactNode; // Ícone opcional
    type?: string; // Tipo do botão (opcional)
    customStyle?: CSSProperties;
    desabilitado?: boolean;
}
  