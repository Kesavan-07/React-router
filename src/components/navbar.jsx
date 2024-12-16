import { useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import cartContext from "../contexts/cartcontext";

const Navbar = () => {
  const navigate = useNavigate();
  const { cartLength } = useContext(cartContext);

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-[#00B4D8] to-[#90E0EF] shadow-md z-50">
        <div className="flex flex-row justify-between items-center py-2 px-5 font-bold text-white">
          <p>Kaadugal</p>
          <div>
            <button
              onClick={() => navigate("/")}
              className="text-lg hover:text-[#FFBF69] transition duration-300"
            >
              Home
            </button>
            &nbsp; &nbsp;
            <button
              onClick={() => navigate("/cart")}
              className="text-lg hover:text-[#FFBF69] transition duration-300"
            >
              Cart
            </button>
          </div>
          <div
            onClick={() => navigate("/cart")}
            className="flex flex-row space-x-1 cursor-pointer"
          >
            <span className="material-symbols-outlined text-3xl font-bold">
              shopping_cart
            </span>
            <p>{cartLength}</p>
          </div>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Navbar;
