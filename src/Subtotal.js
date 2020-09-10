import React from "react";
//import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
export const Subtotal = () => {
  return (
    <div className="subtotal">
      <CurrencyFormat />
    </div>
  );
};
export default Subtotal;
