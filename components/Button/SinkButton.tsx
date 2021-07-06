import { VFC } from 'react';
import styled from 'styled-components';
import { BaseButton, BaseButtonProps } from './BaseButton';

type SinkButtonProps = BaseButtonProps & {
  bgColor?: string;
};

export const StyledSinkButton = styled(BaseButton)<{ bgColor: string }>`
  background-color: ${({ bgColor }) => bgColor};
  border: 1px solid #444;
  border-radius: 8px;
  padding: 8px 12px;
  box-shadow: 2px 4px 1px #444;
  &:hover {
    filter: brightness(97%);
    position: relative;
    top: 2px;
    left: 1px;
    box-shadow: 1px 2px 1px #444;
  }
  &:active {
    filter: brightness(97%);
    position: relative;
    top: 4px;
    left: 2px;
    box-shadow: inset 0 0 2px #444;
  }
`;

export const SinkButton: VFC<SinkButtonProps> = ({
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
  return <StyledSinkButton {...props} />;
};
