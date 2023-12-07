import React from "react";
import "./Connect.modular.css";

const Connect = () => {
  return (
    <div className="connect">
      <input type="text" placeholder="Full Name"></input>
      <input type="email" placeholder="Email Address"></input>
      <input type="text" placeholder="Message"></input>
      <button>CONNECT</button>
    </div>
  );
};

export default Connect;
