import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

import "./checkout.styles.scss";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => {
        const { id } = cartItem;
        return <CheckoutItem cartItem={cartItem} key={id} />;
      })}
      <span className="total">Total: ${cartTotal}</span>
    </div>
  );
};

export default Checkout;
{
  /* <>
{cartItems.map((cartItem) => {
  const { id, name, price, imageUrl, quantity } = cartItem;
  return (
    <div key={id} style={{ marginBottom: "1rem" }}>
      <h2>{name}</h2>
      <p>{price}</p>
      <p>
        <span
          style={styleForArrows}
          onClick={() => decrementQuantity(cartItem)}
        >
          &lt;
        </span>
        {quantity}
        <span
          style={styleForArrows}
          onClick={() => incrementQuantity(cartItem)}
        >
          &gt;
        </span>
      </p>
      <p style={styleForArrows} onClick={() => deleteCartItem(cartItem)}>
        &#215;
      </p>
    </div>
  );
})}
</> */
}
