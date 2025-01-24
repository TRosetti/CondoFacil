import { ButtonContainer, IconContainer } from './styles';
import { IButton } from './type';

const Button = ({ variant = 'primario', titulo, onClick, leftIcon, customStyle, desabilitado }: IButton) => {
  return (
    <ButtonContainer variant={variant} onClick={onClick} style={customStyle}disabled={desabilitado}>
      {leftIcon ? <IconContainer>{leftIcon}</IconContainer> : null}
      {titulo}
    </ButtonContainer>
  );
};

export { Button };
