import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <main className="container">
      <h1>카운터 예제</h1>
      <h2>현재 카운트: {count}</h2>
      <div className="grid">
        <button onClick={() => setCount((preCount) => preCount + 1)}>
          증가
        </button>
        <button onClick={() => setCount((preCount) => preCount - 1)}>
          감소
        </button>
      </div>
    </main>
  );
}
