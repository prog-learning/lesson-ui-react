import { VFC } from 'react';
import styled from 'styled-components';
import { BaseButton, BaseButtonProps } from './BaseButton';

type CaveInButtonProps = BaseButtonProps & {
  bgColor?: string;
};

export const StyledCaveInButton = styled(BaseButton)<{ bgColor: string }>`
  background-color: ${({ bgColor }) => bgColor};
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
  console.log(props);
  return <StyledCaveInButton {...props} />;
};
