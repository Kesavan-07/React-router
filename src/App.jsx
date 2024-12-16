import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "./components/cart";
import LandingPage from "./components/landingPage";
import HomePage from "./components/Home";
import { CartProvider } from "./contexts/cartcontext";

const App = () => {
  const routes = [
    {
      path: "/",
      element: <HomePage />,
      children: [
        {
          path: "/",
          element: <LandingPage />,
        },
        {
          path: "cart",
          element: <Cart />,
        },
     
      ],
    },
   
  ];
  let router = createBrowserRouter(routes, {
    future: {
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_skipActionErrorRevalidation: true,
      v7_skipActionStatusRevalidation: true,
      v7_partialHydration: true,
      v7_startTransition: true,
    },
  });

  return (
    <CartProvider>
      <RouterProvider router={router} future={{ v7_relativeSplatPath: true }} />
    </CartProvider>
  );
};

export default App;
