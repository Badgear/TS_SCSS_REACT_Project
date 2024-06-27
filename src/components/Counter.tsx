import React, { useState } from 'react';
import styles from './Counter.module.scss';

const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 2);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment} className={styles.btn}>
        UpUp!
      </button>
    </div>
  );
};

export default Counter;
