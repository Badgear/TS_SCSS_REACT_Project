import { Button } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export const Counter = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);
  const increment = () => {
    dispatch(counterActions.increment());
  };
  const decrement = () => {
    dispatch(counterActions.decrement());
  };
  return (
    <div>
      <h1 data-testid="counter-header">
        {
          counterValue
        }
      </h1>
      <Button
        onClick={increment}
        data-testid="increment-button"
      >
        +
      </Button>
      <Button
        onClick={decrement}
        data-testid="decrement-button"
      >
        -
      </Button>
    </div>
  );
};
