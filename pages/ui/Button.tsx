import { VFC } from 'react';
import {
  CaveInButton,
  SmallerButton,
  SinkButton,
} from '../../components/Button';

const Button: VFC = () => {
  return (
    <div>
      <CaveInButton>くぼむ</CaveInButton>
      <SmallerButton bgColor='skyblue'>小さくなる</SmallerButton>
      <SinkButton bgColor='limegreen'>へこむ</SinkButton>
    </div>
  );
};

export default Button;
