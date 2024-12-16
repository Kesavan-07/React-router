import { useEffect, useState, useContext } from "react";
import cartContext from "../contexts/cartcontext";

const LandingPage = () => {
  const [products, setProducts] = useState([]);
  const { addToCart, cartItems, removeFromCart } = useContext(cartContext);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data, ".then2");
        setProducts(data);
      })
      .catch((error) => console.log("error in fetching", error));
  }, []);

  function handleCart(product) {
    const existingProduct = cartItems.find((item) => item.id === product.id);

    if (existingProduct) {
      removeFromCart(product.id);
    } else {
      addToCart(product);
    }
  }

  return (
    <div className="py-16 my-3 mx-3">
      <div className="bg-[#F7F7F2] px-5 py-10">
        <div className="flex flex-wrap gap-4 p-5 bg-[#EFF7F6] justify-center">
          {products.map((product) => {
            const isInCart = cartItems.some((item) => item.id === product.id);
            return (
              <div
                key={product.id}
                className="w-full sm:w-[45%] md:w-[30%] lg:w-[23%] border-2 bg-white p-4 flex flex-col min-h-[100px] rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-[180px] object-cover rounded-lg"
                />
                <div className="flex flex-col justify-between flex-grow text-center space-y-3 mt-3">
                  <h1 className="font-bold text-2xl text-gray-800 truncate">
                    {product.title}
                  </h1>
                  <p className="text-sm text-gray-600">{product.description}</p>
                  <p className="text-lg font-medium text-green-600">
                    ₹ {product.price}
                  </p>
                  <button
                    onClick={() => handleCart(product)}
                    className={`border-2 p-2 rounded-xl cursor-pointer transition-colors duration-300 hover:bg-[#FF69B4] ${
                      isInCart
                        ? "bg-red-500 text-white"
                        : "bg-[#4CAF50] text-white"
                    }`}
                  >
                    {isInCart ? "Remove from Cart" : "Add to Cart"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
