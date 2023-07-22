import { useCart } from "../../context/cart";
import { Link } from "react-router-dom";
import "./Cart.css";

const SHIPPING_CHARGES = 25;

const Cart = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } =
    useCart();

  const cartTotal = () => {
    return cart.reduce(
      (acc, item) => acc + item.product.price * item.quantity,
      0
    );
  };

  // const cartTotal = () => {
  //   let total = 0;
  //   cart.forEach((item) => {
  //     total += item.product.price * item.quantity;
  //   });
  //   return total;
  // };

  
  // const round = (value, decimals) => {
  //   return Number(Math.round(value + "e" + decimals) + "e-" + decimals);
  // };

  const round = (value, decimals) => {
    return Number(value.toFixed(decimals));
  };

  return (
    <div className="cartWrapper">
      <div className="container">
        {cart.length >= 1 ? (
          <div className="grid my-5">
            <div className="cartItem p-3">
              <h2>Order Summary</h2>
              {cart.map((item) => (
                <div className="item" key={item.product.id}>
                  <div className="grid py-3">
                    <div className="itemImage">
                      <img src={item.product.image} alt="" />
                    </div>
                    <div className="itemDesc">
                      <div className="title">
                        <Link
                          to={"/product/" + item.product.id}
                          className="titleLink"
                        >
                          {item.product.title}
                        </Link>
                      </div>
                      <span className="price">
                        ${round(item.product.price * item.quantity, 2)}
                      </span>
                    </div>
                    <div className="itemControl flex">
                      <div>
                        <button
                          onClick={() => decreaseQuantity(item.product.id)}
                          disabled={item.quantity === 1}
                          className="removeQty">-</button>
                        <span className="mx-1">{item.quantity}</span>
                        <button
                          onClick={() => increaseQuantity(item.product.id)}
                          className="addQty">+</button>
                        <div
                          className="remove my-1"
                          onClick={() => removeFromCart(item.product.id)}>
                          Remove
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="payment p-3">
              <h2>Payment Summary</h2>
              <div className="summary py-3 my-2">
                <div className="flex py-1">
                  <span>Subtotal:</span>
                  <span className="price">${round(cartTotal(), 2)}</span>
                </div>
                <div className="flex py-1">
                  <span>Shipping Fee:</span>
                  <span className="price">${SHIPPING_CHARGES}</span>
                </div>
                <div className=" flex py-1">
                  <span>Total:</span>
                  <span className="price">
                    ${round(cartTotal() + SHIPPING_CHARGES, 2)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="error">
            <span>
              <p>&#9432; Cart is empty</p> <br />
              <Link to="/" replace style={{ textDecoration: "none" }}>
                Go to homepage
              </Link>
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
export { Cart };
