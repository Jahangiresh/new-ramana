import Header from "./components/Header";
import "./assets/css/app.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Footer from "./components/Footer";
import Branches from "./pages/Branches";
import Location from "./pages/Location";
import Contact from "./pages/Contact";
import Checkout from "./pages/Checkout";
import CookieModal from "./components/CookieModal";
import Search from "./pages/Search";
import NothingPage from "./pages/NothingPage";
import About from "./pages/About";
import SingleProduct from "./pages/SingleProduct";
import ScrollToTop from "./components/ScrollToTop";
import Shop from "./pages/Shop";
import { useState, useEffect, useMemo } from "react";
import { StoreContext } from "./StoreContext";
import Likes from "./pages/Likes";
import OffCanvasExample from "./components/Cart";
import Cart from "./components/Cart";

function App() {
  const [favorites, setFavorites] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [userInfo, setUserInfo] = useState([]);
  const [gender, setGender] = useState("");

  useEffect(() => {
    if (localStorage.getItem("favorites")) {
      setFavorites(JSON.parse(localStorage.getItem("favorites")));
    } else {
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
    if (localStorage.getItem("cartItems")) {
      setCartItems(JSON.parse(localStorage.getItem("cartItems")));
    } else {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }, []);
  const favoritesValue = useMemo(
    () => ({
      favorites,
      setFavorites,
      cartItems,
      setCartItems,
      userInfo,
      setUserInfo,
      gender,
      setGender,
    }),
    [
      favorites,
      setFavorites,
      cartItems,
      setCartItems,
      userInfo,
      setUserInfo,
      gender,
      setGender,
    ]
  );

  return (
    <div className="App">
      <Router>
        <StoreContext.Provider value={favoritesValue}>
          <Header />
          <CookieModal />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/shop/:gender" element={<Shop />} />
            <Route path="/branches" element={<Branches />} />
            <Route path="/location" element={<Location />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/search" element={<Search />} />
            <Route path="/*" element={<NothingPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/likes" element={<Likes />} />

            <Route path="/singleproduct/:id" element={<SingleProduct />} />
          </Routes>

          <Footer />
        </StoreContext.Provider>
      </Router>
    </div>
  );
}

export default App;
