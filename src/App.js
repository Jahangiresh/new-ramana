import Header from "./components/Header";
import "./assets/css/app.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Footer from "./components/Footer";
import Shop from "./pages/Shop";
import WomenShop from "./pages/WomenShop";
import Branches from "./pages/Branches";
import Location from "./pages/Location";
import Contact from "./pages/Contact";
import Checkout from "./pages/Checkout";
import CookieModal from "./components/CookieModal";
import Search from "./pages/Search";
import NothingPage from "./pages/NothingPage";
import About from "./pages/About";
import SingleProduct from "./pages/SingleProduct";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <CookieModal />

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/womenshop" element={<WomenShop />} />
          <Route path="/branches" element={<Branches />} />
          <Route path="/location" element={<Location />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/search" element={<Search />} />
          <Route path="/*" element={<NothingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/singleproduct/:id" element={<SingleProduct />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
