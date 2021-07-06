import { VFC } from 'react';
import styled from 'styled-components';
import { BaseButton, BaseButtonProps } from './BaseButton';

type SmallerButtonProps = BaseButtonProps & {
  bgColor?: string;
};

export const StyledSmallerButton = styled(BaseButton)<{ bgColor: string }>`
  background-color: ${({ bgColor }) => bgColor};
  border: 1px solid #444;
  border-radius: 8px;
  padding: 8px 12px;
  &:hover {
    filter: brightness(90%);
    transform: scale(0.98);
  }
  &:active {
    filter: brightness(90%);
    transform: scale(0.9);
  }
`;

export const SmallerButton: VFC<SmallerButtonProps> = ({
  className,
  children,
  disabled,
  bgColor = 'tomato',
}) => {
  const props = {
    className,
    children,
    disabled,
    bgColor,
  };
  return <StyledSmallerButton {...props} />;
};
