import { createContext, useState } from "react";

export const CartContext = createContext(null)

export const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([])
  
  const counterCart = () => {
    return cart.reduce((acc, item) => acc + item.contador, 0);
  }

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const totalPrice = () => {
    return cart.reduce((acc, item) => acc + item.precio * item.contador, 0)
  }

  const emptyCart = () => {
    setCart([]);
  };


  return (
    <CartContext.Provider value={{ cart, setCart, counterCart, removeItem, totalPrice, emptyCart }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider