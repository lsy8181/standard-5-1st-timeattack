import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState("");

  const hadleChange = (e) => {
    setNumber(e.target.value);
  };

  const hadleadd = () => {
    setCount(count + Number(number));
  };

  const hadleSub = () => {
    setCount(count - Number(number));
  };

  const handleReset = () => {
    setCount(0);
    setNumber("");
  };

  return (
    <div>
      <h1>덧셈과 뺄셈이 가능한 앱 만들기</h1>
      <div>
        <input value={number} onChange={hadleChange} /> 만큼을{" "}
        <button onClick={hadleadd}>더할게요</button>{" "}
        <button onClick={hadleSub}>뺄게요</button>
        <button onClick={handleReset}>초기화</button>
      </div>
      <hr />
      <div>
        <h3>결과</h3>
        <p>{count}</p>
      </div>
    </div>
  );
}
