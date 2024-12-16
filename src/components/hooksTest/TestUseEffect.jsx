import { useState, useEffect } from "react";

function TestUseEffect() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [calculation, setCalculation] = useState(10);

  useEffect(() => {
    setCalculation(() => count2 * 2);
    console.log(count);
   
  }, [count]); 

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <p>Counté: {count2}</p>
      <button onClick={() => setCount2((c) => c + 2)}>+</button>
      <p>Calculation: {calculation}</p>
    </>
  );
}

export default TestUseEffect