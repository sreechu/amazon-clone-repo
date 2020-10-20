import React from "react";
import "./Product.css";
import StarIcon from "@material-ui/icons/Star";
import { useStateValue } from "./StateProvider";

function Product({ id, title, price, rating, image, index }) {
  const [state, dispatch] = useStateValue();
  const addToBasket = (prodId) => {
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

    //tryiing animations here
    let imgtodrag = document
      .getElementsByClassName(prodId)[0]
      .closest(".productImg");
    console.log(imgtodrag);
    let viewcart = document.getElementsByClassName("header__optionBasket")[0];
    let imgtodragImage = imgtodrag.querySelector(".pro-image-front");
    let disLeft = imgtodrag.getBoundingClientRect().left;
    let disTop = imgtodrag.getBoundingClientRect().top;
    let cartleft = viewcart.getBoundingClientRect().left;
    let carttop = viewcart.getBoundingClientRect().top;
    let imageTemp = imgtodragImage.cloneNode(true);
    imageTemp.style =
      "z-index: 1111; width: 100px;opacity:0.8; position:fixed; top:" +
      disTop +
      "px;left:" +
      disLeft +
      "px;transition: left 2s, top 2s, width 2s, opacity 2s cubic-bezier(1, 1, 1, 1)";
    var rechange = document.body.appendChild(imageTemp);

    setTimeout(function () {
      imageTemp.style.left = cartleft + "px";
      imageTemp.style.top = carttop + "px";
      imageTemp.style.width = "40px";
      imageTemp.style.opacity = "0";
    }, 200);
    setTimeout(function () {
      rechange.parentNode.removeChild(rechange);
    }, 2000);
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
      <div className="men-thumb-item productImg">
        <img className="pro-image-front" src={image} alt={title} />
        <img className="pro-image-back" src={image} alt={title} />

        {/* On click of this add to cart, we need to dispatch an action to update the cart!!*/}
        <input
          type="submit"
          name="submit"
          value="Add to cart"
          defaultValue="Add to cart"
          className={`product__addToCartButton ${id}`}
          onClick={() => addToBasket(id)}
        />
      </div>
    </div>
  );
}

export default Product;
