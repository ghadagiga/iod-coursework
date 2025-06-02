import AppRoutes from "./pages/AppRoutes.jsx";
import Footer from "./Footer.jsx";
import React from "react";
import { CartProvider } from "./pages/Cart.jsx";
function App() {
  return (
    <div>
      <CartProvider>
        <AppRoutes />
        <Footer />
      </CartProvider>
    </div>
  );
}

export default App;
