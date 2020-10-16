import React from "react";
import Subtotal from "./Subtotal";
import "./Checkout.css";
import CheckoutItem from "./CheckoutItem";
import { useStateValue } from "./StateProvider";
export const Checkout = () => {
  const [state, dispatch] = useStateValue();
  console.log(state.basket);
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423592668_.jpg"
          alt=""
        />

        <div>
          <h2 className="checkout__title">Your Shopping Basket</h2>
        </div>
        <div className="checkout__items">
          {/* let us add a checkout items component*/}
          {state?.basket?.map((eachItem) => {
            return (
              <CheckoutItem
                image={eachItem.image}
                price={eachItem.price}
                rating={eachItem.rating}
                id={eachItem.id}
                title={eachItem.title}
              />
            );
          })}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
};
export default Checkout;
