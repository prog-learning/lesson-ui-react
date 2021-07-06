import { ReactNode, VFC } from 'react';

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
    <button className={className} disabled={disabled}>
      {children}
    </button>
  );
};
