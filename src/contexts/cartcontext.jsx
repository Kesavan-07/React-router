import { createContext, useState } from "react";

const cartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existingProduct = cartItems.find((item) => item.id === product.id);

    if (existingProduct) {
      setCartItems(
        cartItems.map((singleProduct) =>
          singleProduct.id === product.id
            ? { ...singleProduct, quantity: singleProduct.quantity + 1 }
            : singleProduct
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }

    console.log(
      "Added new product to cart:",
      { ...product, quantity: 1 },
      "else block"
    );

    console.log("Current Cart Items:", [
      ...cartItems,
      existingProduct
        ? cartItems.find((item) => item.id === product.id)
        : { ...product },
    ]);
  };

  const removeFromCart = (productId) => {
    setCartItems(
      cartItems.filter((singleProduct) => singleProduct.id !== productId)
    );
  };

  const updateQuantity = (productId, quantity) => {
    setCartItems(
      cartItems.map((singleProduct) =>
        singleProduct.id === productId
          ? { ...singleProduct, quantity }
          : singleProduct
      )
    );
  };

  return (
    <cartContext.Provider
      value={{
        cartItems,
        cartLength: cartItems.length,
        addToCart,
        removeFromCart,
        updateQuantity,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};

export default cartContext;
