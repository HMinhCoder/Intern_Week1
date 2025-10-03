import React, { useState } from "react";

export default function UseStateDemo() {
  const [brand] = useState("Samsung");
  const [model] = useState("S25 Ultra");
  const [color] = useState("Gray");
  const [price] = useState("1388");

  return (
    <>
      <h2>My Phone</h2>
      <p>
        It is a {color} {brand} {model}, costing {price}$.
      </p>
    </>
  );
}
