import React, { useState } from "react";

const Hero = ({ addToCart }) => {
  const [isOpen, setIsOpen] = useState(false);

  const products = [
    {
      id: 1,
      name: "Chicken",
      price: 69,
      image: "https://i.ibb.co/cF9LXJj/chicken.jpg",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, architecto. Nesciunt sed aut dolorum cum porro molestias praesentium veniam odio.",
      new: true, // New product
    },
    {
      id: 2,
      name: "Fajitas",
      price: 169,
      image: "https://i.ibb.co.com/Mh7HmKW/Fajitas.jpg",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, architecto. Nesciunt sed aut dolorum cum porro molestias praesentium veniam odio.",
    },
    {
      id: 3,
      name: "Chicken Masala",
      price: 269,
      image: "https://i.ibb.co.com/ggr7yM7/Chicken-Masala.jpg",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, architecto. Nesciunt sed aut dolorum cum porro molestias praesentium veniam odio.",
      new: true,
    },
  ];

  return (
    <section className="py-8 px-8">
      <div className="container px-4 md:px-0">
      <h1 className="text-center text-3xl md:text-4xl sm:text-2xl font-bold mb-4">
          CHICKEN CRISPER® COMBOS
        </h1>
        <p className="text-center pb-4 text-gray-500 text-xs">
          Menu <span className="text-red-500">&gt;</span> CHICKEN CRISPER®
          COMBOS
        </p>
        <p className="text-center text-gray-800 font-medium pb-8">
          Find everything from our big Month Burgers®, our always sizzling
          Full-on Fajitas, and our famous CHICKEN CRISPER®.
        </p>
        {/* menu dropdown */}
        <div className="flex justify-between px-5 pb-20">
          <div></div>
          <div className="relative inline-block text-left">
            <div>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex justify-end w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Menu
                <svg
                  className="-mr-1 ml-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            {isOpen && (
              <div
                className="origin-top-right absolute right-0  w-full rounded-md shadow-lg bg-white  "
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
              >
                <div className="py-1" role="none">
                  <a
                    href="#"
                    className="block px-4 py-1 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Rewards
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Location
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
        {/* card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center relative"
            >
              {product.new && (
                <span className="absolute top-2 left-1 bg-red-500 text-white text-xs px-2 py-1 rounded-full transform -rotate-45">
                  NEW
                </span>
              )}

              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover mb-4 rounded-md"
              />
              <div className="text-start">
                <p className=" text-lg font-bold">{product.name}</p>
                <p className="text-gray-600 ">{product.price}$/foreach</p>
                <p className="text-gray-600 text-sm ">{product.description}</p>
              </div>

              <button
                onClick={() => addToCart(product)}
                className="mt-4 w-full bg-red-500 text-white font-medium hover:text-white hover:bg-gray-500 py-2 rounded"
              >
                Add to Order
              </button>
              <button
                onClick={() => addToCart(product)}
                className="mt-4 w-full bg-white text-red-500 border-2 border-red-500 py-2 rounded font-medium"
              >
                Customize
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;