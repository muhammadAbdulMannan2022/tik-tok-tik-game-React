import React from "react";
export default function Nave(props) {
  return (
    <div className="nav">
      <button onClick={props.show}>step</button>
    </div>
  );
}
