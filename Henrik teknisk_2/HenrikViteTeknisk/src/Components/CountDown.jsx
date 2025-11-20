import React, { useState, useEffect } from 'react';
import '../App.css'

function CountDown() {
  const [count, setCount] = useState(10); // start from 10

  useEffect(() => {
    if (count <= 0) return;

    const timer = setTimeout(() => {
      setCount(count - 1); // decrease count by 1 every second
    }, 1000);

    return () => clearTimeout(timer); // cleanup
  }, [count]);

  return (
    <div>
      {count > 0 ? (
        <h1>CountDown: {count}</h1>
      ) : (
        <h1>🎉 Gratulerer med Dagen! 🎉</h1>
      )}

      <button onClick={() => setCount((count) => count + 1)}>Add Time!</button>
      <button onClick={() => setCount((count) => count + 10)}>Add More Time!</button>
    </div>
  );
}

export default CountDown;
