import styled, { css } from 'styled-components';
import { IButton } from './type';

type ButtonStyleProps = {
  variant?: 'primario' | 'secundario';
};

export const ButtonContainer = styled.button<ButtonStyleProps>`
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000;
  color: #fff;
  border: 1px solid #000;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
  margin: 16px auto;

  ${({ variant }) =>
    variant === 'secundario' &&
    css`
      border: 1px solid #000;
      background-color: #fff;
      color: #000;
    `}

    &:disabled{
    opacity: 50%
    }
`;

export const IconContainer = styled.div`
  margin-right: 10px;
  width: 24px;
  height: 24px;
  svg {
    width: 100%;
    height: 100%;
  }
`;
