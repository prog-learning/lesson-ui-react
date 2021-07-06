import { Dispatch, SetStateAction, useState, VFC } from 'react';
import { ThreeDot } from '../../components/LoadingIcon';
import { Spinner } from '../../components/LoadingIcon';

const LoaderIcon: VFC = () => {
  const [isThreeDot, setIsThreeDot] = useState(false);
  const [isSpinner, setIsSpinner] = useState(false);

  const autoFalse = (set: Dispatch<SetStateAction<boolean>>) => {
    set((prev) => !prev);
    setTimeout(() => {
      set((prev) => !prev);
    }, 3000);
  };

  return (
    <div>
      <ol>
        <li>
          <button onClick={() => autoFalse(setIsThreeDot)}>ThreeDot</button>
        </li>
        <li>
          <button onClick={() => autoFalse(setIsSpinner)}>Spinner</button>
        </li>
      </ol>
      <ThreeDot loading={isThreeDot} />
      <Spinner loading={isSpinner} />
    </div>
  );
};

export default LoaderIcon;
