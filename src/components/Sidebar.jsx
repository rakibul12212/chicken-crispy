import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import { ImBin2 } from "react-icons/im";

const Sidebar = ({
  cartItems,
  totalPrice,
  updateQuantity,
  isSidebarOpen,
  closeSidebar,
  removeItem,
}) => {
  return (
    <div
      className={`fixed right-0 top-0 w-1/5 h-full bg-red-500 transform ${
        isSidebarOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out z-50`}
    >
      <div className="px-4 py-4 flex justify-between items-center bg-gray-100">
        <div className="flex items-center space-x-2">
          <FaShoppingBag className="text-red-500" />{" "}
          <h2 className="text-md font-bold">
            ({cartItems.reduce((total, item) => total + item.quantity, 0)})
            <span className="space-x-4">items</span>
          </h2>
        </div>
        <button
          onClick={closeSidebar}
          className="text-sm text-red-500 border-2 border-red-500 px-2 rounded"
        >
          close
        </button>
      </div>

      <div className="p-4 overflow-y-auto h-4/5">
        {cartItems.length > 0 ? (
          <ul>
            {cartItems.map((item, index) => (
              <li
                key={index}
                className="relative flex items-center justify-between mb-4 pb-4 border-2 border-white rounded-lg bg-red-500 p-2"
              >
                <button
                  onClick={() => removeItem(item.id)}
                  className="absolute top-0 right-0 text-white bg-transparent  hover:text-red-300 p-1 rounded-full"
                >
                  <ImBin2 />
                </button>

                <div className="flex items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-20 rounded object-cover rounded-md "
                  />

                  <div className="ml-4">
                    <p className="font-bold text-white">{item.name}</p>
                    <p className="text-xs text-white">{item.price}$/each</p>

                    <div className="flex items-center mt-2 ">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="bg-gray-300 text-black px-2 py-1 rounded"
                        disabled={item.quantity === 0}
                      >
                        -
                      </button>
                      <p className="px-3  bg-white  text-black">
                        {item.quantity}
                      </p>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="bg-gray-300 text-black px-2 py-1 rounded"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                <div className="text-white text-right absolute bottom-0 right-2">
                  <p className="font-bold">${item.price * item.quantity}</p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-white mt-4">Your cart is empty.</p>
        )}
      </div>

      <div className="p-5 bg-white ">
        <h3 className="text-lg font-bold text-center space-x-4 text-red-500">
          <span>Place order</span> <span>${totalPrice.toFixed(2)}</span>
        </h3>
      </div>
    </div>
  );
};

export default Sidebar;