import React from "react";
import { useCart } from "./Cart"; // <-- import here

export default function CartView() {
  const { cartItems, removeFromCart, clearCart } = useCart();

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>No cards in cart.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <img src={item.image} alt="card" width={100} />
                <p>{item.title}</p>
                <p>{item.message}</p>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <button onClick={clearCart}>Clear All</button>
        </>
      )}
    </div>
  );
}
