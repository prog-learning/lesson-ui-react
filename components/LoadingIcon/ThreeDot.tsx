import { VFC } from 'react';
import styled from 'styled-components';

type ThreeDotProps = {
  loading: boolean;
  color?: string;
  maskColor?: string;
  maskOpacity?: number;
};

export const ThreeDot: VFC<ThreeDotProps> = ({
  loading,
  color = '#ccc',
  maskColor = '#000',
  maskOpacity = 0.5,
}) => {
  const maskProps = {
    maskColor,
    maskOpacity,
  };
  const loaderProps = {
    color,
  };

  return (
    <>
      {loading && (
        <StyledMask {...maskProps}>
          <StyledLoader {...loaderProps}>
            <div className='dot'></div>
            <div className='dot-c'></div>
            <div className='dot'></div>
          </StyledLoader>
        </StyledMask>
      )}
    </>
  );
};

const StyledMask = styled.div<{ maskColor: string; maskOpacity: number }>`
  background-color: ${({ maskColor }) => maskColor};
  opacity: ${({ maskOpacity }) => maskOpacity};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledLoader = styled.div<{ color: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  .dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${({ color }) => color};
    margin: 0 16px;
    animation: 1.8s ease-in-out infinite scale-side;
    @keyframes scale-side {
      0% {
        transform: scale(1, 1);
        opacity: 0.6;
      }
      50% {
        transform: scale(1.5, 1.5);
        opacity: 1;
      }
      100% {
        transform: scale(1, 1);
        opacity: 0.6;
      }
    }
  }
  .dot-c {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: ${({ color }) => color};
    margin: 0 20px;
    animation: 1.8s ease-in-out infinite scale-center;
    @keyframes scale-center {
      0% {
        transform: scale(1.5, 1.5);
        opacity: 1;
      }
      50% {
        transform: scale(1, 1);
        opacity: 0.6;
      }
      100% {
        transform: scale(1.5, 1.5);
        opacity: 1;
      }
    }
  }
`;
