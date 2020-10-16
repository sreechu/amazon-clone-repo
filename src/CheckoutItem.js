import React from "react";
import "./CheckoutItem.css";
import StarIcon from "@material-ui/icons/Star";
import { useStateValue } from "./StateProvider";

function CheckoutItem({ id, image, title, price, rating }) {
  const [state, dispatch] = useStateValue();

  const removeFromBasket = () => {
    //remove item from basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img
        src={image}
        className="CheckoutItem__productImage"
        alt="cartproduct"
      />
      <div className="CheckoutItem__Info">
        <p className="CheckoutItem__title">{title}</p>
        <p>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="CheckoutItem__rating">
          {Array(rating)
            .fill()
            .map((_, index) => (
              <StarIcon key={index} />
            ))}
        </div>
        <div className="CheckoutItem__button">
          <button onClick={removeFromBasket}>Remove from basket</button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutItem;
