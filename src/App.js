import Navbar from "./Components/Navbar";
import Men from "./Components/Pages/Men";
import Women from "./Components/Pages/Women";
import Kids from "./Components/Pages/Kids";
import Collection from "./Components/Pages/Collection";
import Outlet from "./Components/Pages/Outlet";
import Signup from "./Components/Pages/Signup";
import Cart from "./Components/Pages/Cart";
import Login from "./Components/Pages/Login";
import {  BrowserRouter , Route, Routes} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <Navbar />
  <Routes>
  {/* <Route path="/" element={<Men />} /> */}
    <Route path="/men" element={<Men />} />
    <Route path="/women" element={<Women />} />
    <Route path="/kids" element={<Kids />} />
    <Route path="/collection" element={<Collection />} />
    <Route path="/outlet" element={<Outlet />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/login" element={<Login/>}/>
  </Routes>
    </BrowserRouter>
  );
}

export default App;

export const base_url = 'http://localhost:4000/api/v1'
