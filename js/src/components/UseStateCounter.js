import React from "react";
import { useState } from "react";

export default function UseStateCounter() {
  const [value, setValue] = useState(0);
  return (
    <div>
      <section style={{ margin: "4rem 0" }}>
        <h2>regular counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={() => setValue(value - 1)}>
          decrease
        </button>
        <button className="btn" onClick={() => setValue(value + 1)}>
          increase
        </button>
        <button className="btn" onClick={() => setValue(0)}>
          reset
        </button>
      </section>
    </div>
  );
}
