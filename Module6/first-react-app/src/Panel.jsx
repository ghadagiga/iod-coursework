import { Fragment, useState } from "react";

export function Calculator() {
  const [operator, setOperator] = useState(null);
  const [preoperator, setPreoperator] = useState("");
  const [postoperator, setPostoperator] = useState("");
  const [result, setResult] = useState(null);

  function handleInput(value) {
    if (!isNaN(value)) {
      if (operator === null) {
        setPreoperator((prev) => prev + value);
      } else {
        setPostoperator((prev) => prev + value);
      }
    } else if (["+", "-", "*", "/"].includes(value)) {
      setOperator(value);
    } else if (value === "=") {
      if (preoperator && postoperator && operator) {
        const a = parseFloat(preoperator);
        const b = parseFloat(postoperator);
        let res;
        switch (operator) {
          case "+":
            res = a + b;
            break;
          case "-":
            res = a - b;
            break;
          case "*":
            res = a * b;
            break;
          case "/":
            res = b !== 0 ? a / b : "Err";
            break;
          default:
            res = "Err";
        }
        setResult(res);
      }
    } else if (value === "AC") {
      setPreoperator("");
      setPostoperator("");
      setOperator(null);
      setResult(null);
    }
  }
  return (
    <>
      <div className="screen">
        {result !== null
          ? result
          : preoperator + (operator || "") + postoperator}
      </div>
      <div className="panel">
        <div className="buttons">
          {["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].map((n) => (
            <button
              key={n}
              value={n}
              onClick={(e) => handleInput(e.target.value)}
            >
              {n}
            </button>
          ))}
          {["+", "-", "*", "/"].map((op) => (
            <button
              key={op}
              value={op}
              onClick={(e) => handleInput(e.target.value)}
            >
              {op}
            </button>
          ))}
          <button value="=" onClick={(e) => handleInput(e.target.value)}>
            =
          </button>
          <button value="AC" onClick={(e) => handleInput(e.target.value)}>
            AC
          </button>
        </div>
      </div>
    </>
  );
}
