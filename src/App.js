import Navbar from "./Components/Navbar";
import Men from "./Components/Pages/Men";

import Women from "./Components/Pages/Women";
import Kids from "./Components/Pages/Kids";
import Collection from "./Components/Pages/Collection";
import Outlet from "./Components/Pages/Outlet";
import Signup from "./Components/Pages/Signup";
import Cart from "./Components/Pages/Cart";
import Login from "./Components/Pages/Login";
import Products from "./Components/Pages/Products";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./Components/Pages/Product";
import WomenProducts from "./Components/Pages/WomenProducts";
import MenProducts from "./Components/Pages/MenProducts";
import BestDeals from "./Components/Pages/BestDeals";
import ExclusiveProducts from "./Components/Pages/ExclusiveProducts";
import WomenBagPacks from "./Components/Pages/WomenBagPacks";
import WomenWatches from "./Components/Pages/WomenWatches";
import WomenShoes from "./Components/Pages/WomenShoes";

import Main from "./Components/Pages/Main";
import Payment from "./Components/Pages/Payment";
import CheckoutForm from "./Components/Pages/CheckoutForm";
import Success from "./Components/Success";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/outlet" element={<Outlet />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product" element={<Product />} />
        <Route path="/womenproducts" element={<WomenProducts />} />
        <Route path="/menproducts" element={<MenProducts />} />
        <Route path="/bestdeals" element={<BestDeals />} />
        <Route path="/exclusiveproducts" element={<ExclusiveProducts />} />
        <Route path="/womenbagpacks" element={<WomenBagPacks />} />
        <Route path="/womenwatches" element={<WomenWatches />} />
        <Route path="/womenshoes" element={<WomenShoes />} />
       
        <Route path="/payment" element={<Payment />} />
        <Route path="/checkout" element={<CheckoutForm />} />
        <Route path="/success" element={<Success />} />
      </Routes>
      <ToastContainer/>
    </BrowserRouter>
  );
}

export default App;

// export const base_url = "http://localhost:4000/api/v1";
export const base_url = "https://ecommerce-backend-git-main-vaibhavsharma1998.vercel.app/api/v1";

