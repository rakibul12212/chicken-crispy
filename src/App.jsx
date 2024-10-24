// src/App.jsx
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Sidebar from "./components/Sidebar";

const App = () => {
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const addToCart = (product) => {
    const existingProduct = cartItems.find((item) => item.id === product.id);
    if (existingProduct) {
      // Increase quantity if product already exists
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    setCartCount(cartCount + 1);
    setSidebarOpen(true);
  };

  const updateQuantity = (id, increment) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(item.quantity + increment, 0) }
          : item
      )
    );
    setCartCount(cartItems.reduce((total, item) => total + item.quantity, 0));
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className={`relative flex ${isSidebarOpen ? "w-4/5" : "w-full"}`}>
      <div className="flex-1">
        <Navbar cartCount={cartCount} />
        <Hero addToCart={addToCart} />
      </div>
      {isSidebarOpen && (
        <Sidebar
          cartItems={cartItems}
          totalPrice={totalPrice}
          updateQuantity={updateQuantity}
          isSidebarOpen={isSidebarOpen}
          closeSidebar={closeSidebar}
          className="w-1/5"
        />
      )}
    </div>
  );
};

export default App;
