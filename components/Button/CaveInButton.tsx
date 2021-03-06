import { VFC } from 'react';
import styled from 'styled-components';
import { BaseButton, BaseButtonProps } from './BaseButton';

type CaveInButtonProps = BaseButtonProps & {
  bgColor?: string;
};

export const StyledCaveInButton = styled(BaseButton)<{ bgColor: string }>`
  background-color: ${({ bgColor }) => bgColor};
  border: 1px solid #444;
  border-radius: 8px;
  padding: 8px 12px;
  &:hover {
    filter: brightness(98%);
    box-shadow: inset 0 0 2px #444;
  }
  &:active {
    box-shadow: inset 0 0 6px #000;
  }
`;

export const CaveInButton: VFC<CaveInButtonProps> = ({
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
  return <StyledCaveInButton {...props} />;
};
