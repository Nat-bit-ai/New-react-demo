import React from "react";

let count = 0;

function Button() {
  const handleClick = (name) => {
    if (count < 5) {
      count++;
      console.log(`${name} you clicked me ${count} times`);
    } else {
      console.log(`${name} stop clicking me`);
    }
  };

  return (
    <>
      <button onClick={() => handleClick("Nathy")}>Click Here</button>
    </>
  );
}

export default Button;