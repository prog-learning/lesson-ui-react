import { ReactNode, VFC } from 'react';
import styled from 'styled-components';

export type BaseButtonProps = {
  className?: string;
  children: string | ReactNode;
  disabled?: boolean;
};

export const BaseButton: VFC<BaseButtonProps> = ({
  className,
  children,
  disabled,
}) => {
  return (
    <StyledButton className={className} disabled={disabled}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  appearance: none;
`;
