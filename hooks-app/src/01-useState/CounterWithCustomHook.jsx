import React from "react";
import { useCounter } from "../hooks/useCounter";

export const CounterWithCustomHook = () => {

  const { counter, increment, decrement, reset } = useCounter(0);

  return (
    <>
      <h1>CounterWithCustomHook: {counter}</h1>
      <hr />

      <button className="btn btn-primary m-1" onClick={()=>decrement()}>
        -1
      </button>
      <button className="btn btn-primary m-1" onClick={reset}>
        reset
      </button>
      <button className="btn btn-primary m-1" onClick={()=>increment()}>
        +1
      </button>
    </>
  );
};
