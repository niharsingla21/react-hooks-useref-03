import React, { useRef, useState, useEffect } from "react";
import { useFetch } from "./useFetch";

export const Hello = () => {
  // const renders = useRef(0);
  // console.log("Hello renders : " + renders.current++);

  const [count, setCount] = useState(() =>
    JSON.parse(localStorage.getItem("count"))
  );

  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  return (
    <div>
      <div>{!data ? "Loading..." : data}</div>
      <div>count: {count}</div>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
    </div>
  );
};
