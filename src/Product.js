import React from "react";
import "./Product.css";
import StarIcon from "@material-ui/icons/Star";
import { useStateValue } from "./StateProvider";

function Product({ id, title, price, rating, image }) {
  const [state, dispatch] = useStateValue();
  const addToBasket = () => {
    //dispatch add to cart into data layer
    //here we are dispatching an object (made from the product properties) into a data layer
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: id,
        title: title,
        price: price,
        image: image,
        rating: rating,
      },
    });

    //now if you check the console.log in the reducer -
    //you see that everytime the button is clicked, the product item is added into the cart (state)
  };

  return (
    <div className="product">
      <div className="product__info">
        <p className="product__title">{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, index) => (
              <StarIcon key={index} />
            ))}{" "}
        </div>
      </div>

      <img src={image} alt={title} />

      {/* On click of this add to cart, we need to dispatch an action to update the cart!!*/}
      <div className="product__addToCartButton">
        <button onClick={addToBasket}>Add to Cart</button>
      </div>
    </div>
  );
}

export default Product;
